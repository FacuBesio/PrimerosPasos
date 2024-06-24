/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {
  useEffect,
  useState,
  useContext,
  useCallback,
  useMemo,
} from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link, useNavigate } from "react-router-dom";
import getCategories from "../../utils/categories/getCategories";
import { handlerClickCategories } from "../../utils/filter/filterHandlers";
import {
  CategoriesContext,
  FlagCartEffectContext,
  PagesContext,
  SearchContext,
} from "../../context/index";
import CartAside from "../CartAside/CartAside";
import postUsers from "../../utils/users/postUsers";
import {
  flexColCenter,
  navbarCategoryStyle,
  navbarMainStyle,
} from "../../styles";
import { motion } from "framer-motion";
import isAdminIcon from "../../assets/adminIcon.png";

const Navbar = () => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();
  const { setPage } = useContext(PagesContext);
  const { searchBar, setSearchBar, setSearchBarTag } =
    useContext(SearchContext);

  const { flag } = useContext(FlagCartEffectContext);
  // console.log("flag", flag);

  const [isAdmin, setIsAdmin] = useState(false);

  const {
    filterCategories,
    allCategories,
    setAllCategories,
    setFilterCategories,
    setCategoryTag,
  } = useContext(CategoriesContext);

  const userData = JSON.parse(window.localStorage.getItem("userData"));
  const [isCartOpen, setIsCartOpen] = useState(false);

  const navigate = useNavigate();

  const handleButtonCart = useCallback(() => {
    setIsCartOpen((prev) => !prev);
  }, []);

  const onChangeSearchBar = useCallback(
    (event) => {
      setSearchBar(event.target.value);
      setSearchBarTag(event.target.value);
      setPage(1);
    },
    [setSearchBar, setSearchBarTag, setPage]
  );

  const onSubmitSearchBar = useCallback(
    (event) => {
      event.preventDefault();
      setPage(1);
      navigate("/shop");
    },
    [navigate, setPage]
  );

  const handleLogout = useCallback(() => {
    window.localStorage.removeItem("userData");
    const updatedCart = { id: null, products: [] };
    window.localStorage.setItem("cart", JSON.stringify(updatedCart));
    logout();
  }, [logout]);

  useEffect(() => {
    if (isAuthenticated && user && !userData) {
      postUsers(user);
    }
    if (userData?.role === "owner" || userData?.role === "admin") {
      setIsAdmin(true);
    }
    getCategories(setAllCategories);
  }, [userData, isAuthenticated, user, allCategories.length, setAllCategories]);

  const handleCategoryClick = useCallback(
    (category) => {
      handlerClickCategories(
        navigate,
        setFilterCategories,
        setCategoryTag,
        category,
        setPage
      )();
    },
    [navigate, setFilterCategories, setCategoryTag, setPage]
  );

  const containerVariants = useMemo(
    () => ({
      hidden: { opacity: 1 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.2,
          delayChildren: 0.1,
        },
      },
    }),
    []
  );

  const itemVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: -20 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    }),
    []
  );

  const categoryLinks = useMemo(
    () =>
      allCategories?.categories?.map((category) => (
        <motion.h3
          key={category.id}
          variants={itemVariants}
          onClick={() => handleCategoryClick(category)}
          className={`${
            filterCategories === category.id ? "text-[#Dbb1bc]" : ""
          } text-[#524343] hover:text-[#Dbb1bc] cursor-pointer rounded-md p-1`}
        >
          {category.name}
        </motion.h3>
      )),
    [allCategories, filterCategories, handleCategoryClick, itemVariants]
  );

  return (
    <div>
      {/* <motion.article initial="hidden" animate="visible" exit={{ opacity: 0, transition: { duration: 0.5 } }}> */}
      <nav className={`${flexColCenter} md:flex-row gap-4 pb-2`}>
        <div className="flex gap-4 justify-center">
          <Link to="/" className={navbarMainStyle}>
            Home
          </Link>
          <Link to="/shop" className={navbarMainStyle}>
            Shop
          </Link>
          <Link to="/contacto" className={navbarMainStyle}>
            Contacto
          </Link>
          {!isAuthenticated ? (
            <button
              className={navbarMainStyle}
              onClick={() => loginWithRedirect()}
            >
              Login
            </button>
          ) : (
            <button className={navbarMainStyle} onClick={handleLogout}>
              Logout
            </button>
          )}
        </div>
        <div className="flex justify-center">
          <form className="flex gap-2" onSubmit={onSubmitSearchBar}>
            <input
              placeholder="Buscar"
              className="px-1 rounded-md border border-red-100 max-w-[160px]"
              type="text"
              value={searchBar}
              onChange={onChangeSearchBar}
            />
            <button>
              <img
                className="w-[30px] hover:scale-110"
                src="/src/assets/VectorSearch.png"
                alt="Search Icon"
              />
            </button>
          </form>

          <button onClick={handleButtonCart}>
            {/* <img src="/src/assets/cart.png" className={`w-[30px] ml-2 hover:scale-110 ${flag === true ? "animate-bounce" : "animate-none"}  `} alt="" /> */}
            <img
              src="/src/assets/cart.png"
              className="w-[30px] ml-2 hover:scale-110"
              alt="Cart Icon"
            />
          </button>

          {isCartOpen && <CartAside handleButtonCart={handleButtonCart} />}
          {isAuthenticated && (
            <Link to="/profile/personalInfo">
              <img
                src={userData?.img}
                alt={userData?.name}
                className="w-8 h-8 cursor-pointer p-1 m-1 rounded-full hover:scale-110"
              />
            </Link>
          )}
          {isAdmin && (
            <Link to="/admin/manageProducts">
              <img
                src={isAdminIcon}
                alt="Admin Icon"
                className="w-8 h-8 cursor-pointer my-1 rounded-full hover:scale-110"
              />
            </Link>
          )}
        </div>
      </nav>
      <div className="flex justify-center items-center gap-4 m-2 h-fit overflow-x-auto">
        {/* <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex gap-2 items-center overflow-x-auto"
          > */}
        {categoryLinks}
        {/* </motion.div> */}
      </div>
      {/* </motion.article> */}
    </div>
  );
};

export default React.memo(Navbar);
