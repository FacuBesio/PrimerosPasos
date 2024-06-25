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
      <nav className={`${flexColCenter} md:flex-row gap-4 pb-2`}>
        <MainLinks />

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

      <CategoryLinks />

      {/* </motion.article> */}
    </div>
  );
};

export default React.memo(Navbar);
