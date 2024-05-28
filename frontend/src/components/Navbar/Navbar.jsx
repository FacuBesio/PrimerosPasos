import React, { useEffect, useState, useRef, useContext } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link, useNavigate } from "react-router-dom";
import newUserdata from "../../utils/navbar/newUserdata";
import getCategories from "../../utils/categories/getCategories";
import { handlerClickCategories } from "../../utils/filter/filterHandlers";
import { CategoriesContext } from "../../context/CategoriesContext";
import { SearchContext } from "../../context/SearchContext";

const Navbar = () => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();
  const { searchBar, setSearchBar, setSearchBarTag } = useContext(SearchContext);
  const {
    allCategories,
    setAllCategories,
    setFilterCategories,
    setCategoryTag,
  } = useContext(CategoriesContext);

  const [userData, setUserData] = useState();

  const [isCategoriesOpen, setCategoriesOpen] = useState(true);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartRef = useRef(null);
  const navigate = useNavigate();

  const handleCategoriesOpen = () => {
    setCategoriesOpen(!isCategoriesOpen);
  };

  const handleButtonCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const onChangeSearchBar = (event) => {
    setSearchBar(event.target.value);
    setSearchBarTag(event.target.value);
  };

  const onSubmitSearchBar = (event) => {
    event.preventDefault();
    navigate("/shop");
  };

  const handleLogout = () => {
    window.localStorage.removeItem("userData");
    setUserData(null);
    logout();
  };

  useEffect(() => {
    if (isAuthenticated && user && !userData) {
      newUserdata(setUserData, user);
    }
    allCategories.length === 0 && getCategories(setAllCategories);
  }, [isAuthenticated, user]);

  return (
    <div>
      <nav className="flex items-center flex-col md:flex-row  gap-4 justify-center items pb-2 ">
        <div className="flex gap-4 justify-center">
          <a
            href="/"
            className="md:text-xl  hover:text-[#DBB1BC] hover:scale-105  "
          >
            Home
          </a>
          <a
            href="/shop"
            className="md:text-xl hover:text-[#DBB1BC] hover:scale-105 text-[#5a5b5a]  "
            
          >
            Productos
          </a>
          <a
            href="/contacto"
            className="md:text-xl hover:text-[#DBB1BC] hover:scale-105  "
          >
            Contacto
          </a>
          {!isAuthenticated ? (
            <button
              target="_blank"
              className="md:text-xl hover:text-[#DBB1BC] hover:scale-105 text-[#5a5b5a] "
              onClick={() => loginWithRedirect()}
            >
              Login
            </button>
          ) : (
            <button
              className="md:text-xl hover:text-[#DBB1BC] hover:scale-105 text-[#5a5b5a] "
              onClick={handleLogout}
            >
              Logout
            </button>
          )}
        </div>
        <div className="flex justify-center   ">
          <form className="flex gap-2" onSubmit={onSubmitSearchBar}>
            <input
              placeholder="Buscar"
              className="px-1 rounded-md border border-red-200"
              type="text"
              value={searchBar}
              onChange={onChangeSearchBar}
            />
            <button>
              <img
                className="w-[30px]"
                src="/src/assets/VectorSearch.png"
                alt=""
              />
            </button>
          </form>
          <button onClick={handleButtonCart}>
            <img src="/src/assets/cart.png" className="w-[30px] ml-2" alt="" />
          </button>
          {isCartOpen && (
            <div
              ref={cartRef}
              className="fixed left-0 top-0 h-screen w-[100%] bg-black bg-opacity-50 backdrop-blur-sm z-40 transition-all"
              
            >
              <div>
                <div className="fixed justify-between py-6 items-center  right-0 top-0 h-screen w-[50%] md:w-[20%] bg-white z-50  px-6 text-center flex flex-col gap-12 transition-all ">
                  <h2>Carrito de compras</h2>
                  <button className="items-center flex bg-gray-200 w-fit p-2 hover:scale-105 hover:bg-red-200 transition-all duration-200 rounded-xl border border-[#Dbb1bc] text-[#393334]" onClick={handleButtonCart}>Volver al menu</button>
                </div>
              </div>
            </div>
          )}
          {isAuthenticated && (
            <Link to="/profile/personalInfo">
              <img
                src={userData?.picture}
                alt={userData?.name}
                className="w-8 h-8 cursor-pointer"
              />
            </Link>
          )}
        </div>
      </nav>
      <div className=" flex  justify-center items-center gap-4 m-2 h-fit pl-20 md:pl-0 overflow-x-auto">
        {isCategoriesOpen && (
          <div className="flex gap-2 items-center ">
            {allCategories?.categories?.map((category) => (
              <h3
                key={category.id}
                onClick={handlerClickCategories(
                  navigate,
                  setFilterCategories,
                  setCategoryTag,
                  category
                )}
                className="text-[#5a5b5a] hover:text-[#Dbb1bc]  tracking-tighter cursor-pointer  rounded-md p-1 "
              >
                {category.name}
              </h3>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
