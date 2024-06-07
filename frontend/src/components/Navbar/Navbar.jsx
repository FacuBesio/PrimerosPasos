import { useEffect, useState, useContext } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link,  useNavigate } from "react-router-dom";
import getCategories from "../../utils/categories/getCategories";
import { handlerClickCategories } from "../../utils/filter/filterHandlers";
import {
  CategoriesContext,
  PagesContext,
  SearchContext,
} from "../../context/index";
import CartAside from "../CartAside/CartAside";
import postUsers from "../../utils/users/postUsers";

const Navbar = () => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();
  const { setPage } = useContext(PagesContext);
  const { searchBar, setSearchBar, setSearchBarTag } = useContext(SearchContext);
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
    allCategories.length === 0 && getCategories(setAllCategories);
  }, [userData, isAuthenticated]);

  const handleCategoryClick = (category) => {
    handlerClickCategories(navigate, setFilterCategories, setCategoryTag, category, setPage )();
  };

  return (
    <div>
      <nav className="flex items-center flex-col md:flex-row gap-4 justify-center pb-2">
        <div className="flex gap-4 justify-center">
          <a href="/" className="md:text-xl hover:text-[#DBB1BC] hover:scale-105">
            Home
          </a>
          <a href="/shop" className="md:text-xl hover:text-[#DBB1BC] hover:scale-105 text-[#5a5b5a]">
            Shop
          </a>
          <a href="/contacto" className="md:text-xl hover:text-[#DBB1BC] hover:scale-105">
            Contacto
          </a>
          {!isAuthenticated ? (
            <button
              target="_blank"
              className="md:text-xl hover:text-[#DBB1BC] hover:scale-105 text-[#5a5b5a]"
              onClick={() => loginWithRedirect()}
            >
              Login
            </button>
          ) : (
            <button
              className="md:text-xl hover:text-[#DBB1BC] hover:scale-105 text-[#5a5b5a]"
              onClick={handleLogout}
            >
              Logout
            </button>
          )}
        </div>
        <div className="flex justify-center">
          <form className="flex gap-2" onSubmit={onSubmitSearchBar}>
            <input
              placeholder="Buscar"
              className="px-1 rounded-md border border-red-200"
              type="text"
              value={searchBar}
              onChange={onChangeSearchBar}
            />
            <button>
              <img className="w-[30px]" src="/src/assets/VectorSearch.png" alt="" />
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
        </div>
      </nav>
      <div className="flex justify-center items-center gap-4 m-2 h-fit pl-20 md:pl-0 overflow-x-auto">
        <div className="flex gap-2 items-center ">
          {allCategories?.categories?.map((category) => (
            <h3
              key={category.id}
              onClick={() => handleCategoryClick(category)}
              className={`text-[#5a5b5a]   hover:text-[#Dbb1bc] focus:text-[#Dbb1bc] tracking-tighter cursor-pointer rounded-md p-1 ${
                filterCategories === category.id ? "text-[#Dbb1bc]" : ''
              }`}
            >
              {category.name}
            </h3>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
