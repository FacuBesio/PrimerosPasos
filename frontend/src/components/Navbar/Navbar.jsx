/* eslint-disable react-refresh/only-export-components */
import React, {
  useEffect,
  useState,
  useContext,
  useCallback,
  useMemo,
} from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link, useNavigate } from "react-router-dom";
import { PagesContext, SearchContext } from "../../context/index";
import CartAside from "../CartAside/CartAside";
import postUsers from "../../utils/users/postUsers";
import { flexColCenter, navbarCategoryStyle } from "../../styles";
import { motion } from "framer-motion";
import isAdminIcon from "../../assets/adminIcon.png";
import CategoryLinks from "../NavBar_CategoryLinks/CategoryLinks";
import MainLinks from "../NavBar_Links/MainLinks";
import cartIcon from "../../assets/cart.png";
import searchIcon from "../../assets/VectorSearch.png";

const Navbar = () => {
  const navigate = useNavigate();
  const { isAuthenticated, user } = useAuth0();
  const { setPage } = useContext(PagesContext);
  const { searchBar, setSearchBar, setSearchBarTag } =
    useContext(SearchContext);
  const [isAdmin, setIsAdmin] = useState(false);
  const userData = JSON.parse(window.localStorage.getItem("userData"));
  const [isCartOpen, setIsCartOpen] = useState(false);

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

  useEffect(() => {
    if (isAuthenticated && user && !userData) {
      postUsers(user);
    }
    if (userData?.role === "owner" || userData?.role === "admin") {
      setIsAdmin(true);
    }
  }, [userData, isAuthenticated]);

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

  return (
    <div>
      {/* <motion.article initial="hidden" animate="visible" exit={{ opacity: 0, transition: { duration: 0.5 } }}> */}
      <nav className={`${flexColCenter} md:flex-row gap-2 pb-2`}>
        <MainLinks />

        <div className="flex justify-center items-center">
          <form
            className="flex gap-2 items-center"
            onSubmit={onSubmitSearchBar}
          >
            <input
              placeholder="Buscar"
              className="px-1 rounded-md border border-red-100 max-w-[160px] h-fit text-[12px] md:text-[18px]"
              type="text"
              value={searchBar}
              onChange={onChangeSearchBar}
            />
            <button>
              <img
                className="w-[30px] hover:scale-110 transition-transform duration-200"
                src={searchIcon}
                alt="Search Icon"
              />
            </button>
          </form>

          <button onClick={handleButtonCart}>
            {/* <img src="/src/assets/cart.png" className={`w-[30px] ml-2 hover:scale-110 ${flag === true ? "animate-bounce" : "animate-none"}  `} alt="" /> */}
            <img
              src={cartIcon}
              className="w-[30px] ml-2 hover:scale-110 transition-transform duration-200"
              alt="Cart Icon"
            />
          </button>

          {isCartOpen && <CartAside handleButtonCart={handleButtonCart} />}
          {isAuthenticated && (
            <Link to="/profile/personalInfo">
              <img
                src={userData?.img}
                alt={userData?.name}
                className="w-9 h-9 cursor-pointer p-1 m-1 rounded-full hover:scale-110 transition-transform duration-200"
              />
            </Link>
          )}
          {isAuthenticated && userData && (
            <Link to="/admin/manageProducts">
              <img
                src={isAdminIcon}
                alt="Admin Icon"
                className="w-9 h-9 cursor-pointer my-1 rounded-full hover:scale-110 transition-transform duration-200"
              />
            </Link>
          )}
        </div>
      </nav>

      <CategoryLinks />

      {/* </motion.article> */}
    </div>
  );
};

export default React.memo(Navbar);
