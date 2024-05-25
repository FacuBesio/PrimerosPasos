import React, { useEffect, useState, useRef, useContext } from "react";
import { AppContext } from "../../context/context";
import { useAuth0 } from "@auth0/auth0-react";
import { Link, useNavigate } from "react-router-dom";
import newUserdata from "../../utils/navbar/newUserdata";
import getCategories from "../../utils/categories/getCategories";

import { handlerClickCategories } from "../../utils/filter/filterHandlers";
import filterValidator from "../../utils/filter/filterValidator";

const Navbar = () => {
  const navigate = useNavigate();
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();



  const { state, setState } = useContext(AppContext);

  const [userData, setUserData] = useState();

  const [allCategories, setAllCategories] = useState(null);
  const [isCategoriesOpen, setCategoriesOpen] = useState(false);

  const [filterBrands, setFilterBrands] = useState(null);
  const [filterCategories, setFilterCategories] = useState(null);
  const [filterPrices, setFilterPrices] = useState([0, 0]);

  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartRef = useRef(null);

  const handleCategoriesOpen = () => {
    setCategoriesOpen(!isCategoriesOpen);
  };

  const handleButtonCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const onChangeSearchBar = (event) => {
    const searchBar = event.target.value;
    setState((prevState) => ({ ...prevState, searchBar }));
  };

  const onSubmitSearchBar = (event) => {
    event.preventDefault();
    setState((prevState) => ({ ...prevState }));
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
    getCategories(setAllCategories);

    const filterQuery = filterValidator(filterCategories);
    const filter = filterQuery.result;

    filterQuery.filterActive &&
      setState((prevState) => ({ ...prevState, filter }));
  }, [isAuthenticated, user, filterCategories]);

  return (
    <nav className="flex flex-col  gap-4 justify-center items pb-6 ">
      <div className="flex gap-4 justify-center">
        <a
          href="/"
          className="md:text-xl  hover:text-[#DBB1BC] hover:scale-105  "
        >
          Home
        </a>
        <button
          className="md:text-xl hover:text-[#DBB1BC] hover:scale-105  "
          onClick={handleCategoriesOpen}
        >
          Categorias
        </button>
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
            value={state.searchBar}
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
            onClick={handleButtonCart}
          >
            <div className="fixed right-0 top-0 h-screen w-[20%] bg-white z-50 pt-10 px-6 text-center flex flex-col gap-12 transition-all "></div>
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
      <div className="h-8 flex  justify-center items-center gap-4">
        {isCategoriesOpen && (
          <li className="list-none flex">
            <ul className="flex gap-4">
              {allCategories?.categories?.map((category) => (
                <h3
                  key={category.id}
                  onClick={handlerClickCategories(
                    navigate,
                    setFilterCategories,
                    category
                  )}
                  className="text-[#5a5b5a] hover:text-[#Dbb1bc]  tracking-tighter"
                >
                  {category.name}
                </h3>
              ))}
            </ul>
          </li>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
