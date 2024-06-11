/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, useContext } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link, useNavigate } from "react-router-dom";
import getCategories from "../../utils/categories/getCategories";
import { handlerClickCategories } from "../../utils/filter/filterHandlers";
import {
  CategoriesContext,
  PagesContext,
  SearchContext,
} from "../../context/index";
import CartAside from "../CartAside/CartAside";
import postUsers from "../../utils/users/postUsers";
import { flexColCenter, navbarCategoryStyle, navbarMainStyle } from "../../styles";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import isAdminIcon from "../../assets/adminIcon.png"

const Navbar = () => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();
  const { setPage } = useContext(PagesContext);
  const { searchBar, setSearchBar, setSearchBarTag } = useContext(SearchContext);

  const [isAdmin, setIsAdmin] = useState(false)
  
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

  const handleButtonCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const onChangeSearchBar = (event) => {
    setSearchBar(event.target.value);
    setSearchBarTag(event.target.value);
    setPage(1);
  };

  const onSubmitSearchBar = (event) => {
    event.preventDefault();
    setPage(1);
    navigate("/shop");
  };

  const handleLogout = () => {
    window.localStorage.removeItem("userData");
    const updatedCart = { id: null, products: [] };
    window.localStorage.setItem("cart", JSON.stringify(updatedCart));
    logout();
  };

  useEffect(() => {
    if (isAuthenticated && user && !userData) {
      postUsers(user);
    }
    if(userData?.role === "owner" || userData?.role === "admin"){
      setIsAdmin(true)
    }
   

    allCategories.length === 0 && getCategories(setAllCategories);
  }, [userData, isAuthenticated]);

  const handleCategoryClick = (category) => {
    handlerClickCategories(navigate, setFilterCategories, setCategoryTag, category, setPage )();
  };

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div>
      <motion.article initial="hidden" animate="visible" exit={{ opacity: 0, transition: { duration: 0.5 } }}>
        <nav className={`${flexColCenter} md:flex-row gap-4  pb-2`}>
          <div className="flex gap-4 justify-center">
            <Link  to="/"  className={navbarMainStyle}>
              Home
            </Link>
            <Link  to="/shop"  className={navbarMainStyle}>
              Shop
            </Link>
            <Link to="/contacto"  className={navbarMainStyle}>
              Contacto
            </Link>
            {!isAuthenticated ? (
              <button
                target="_blank"
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
                <img className="w-[30px] hover:scale-110" src="/src/assets/VectorSearch.png" alt="" />
              </button>
            </form>
            <button onClick={handleButtonCart}>
              <img src="/src/assets/cart.png" className="w-[30px] ml-2 hover:scale-110" alt="" />
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
         { isAdmin && (
            <Link to="/admin/manageProducts">
                <img
                  src={isAdminIcon}
                  alt={userData?.name}
                  className="w-8 h-8 cursor-pointer my-1  rounded-full hover:scale-110"
                />
              </Link>
          )}
          </div>
        </nav>
        <div className="flex justify-center items-center gap-4 m-2 h-fit   overflow-x-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex gap-2 items-center overflow-x-auto"
          >
            {allCategories?.categories?.map((category) => (
              <motion.h3
                key={category.id}
                variants={itemVariants}
                onClick={() => handleCategoryClick(category)}
                className={`${
                  filterCategories === category.id ? "text-[#Dbb1bc]" : ""
                } "text-[#524343] hover:text-[#Dbb1bc]  cursor-pointer rounded-md p-1  "`}
              >
                {category.name}
              </motion.h3>
            ))}
          </motion.div>
        </div>
      </motion.article>
    </div>
  );
};

export default Navbar;
