import { Link, NavLink, useLocation } from "react-router-dom";
import cartIcon from "../../assets/cart.png";
import isAdminIcon from "../../assets/adminIcon.png";
import MainLinks from "../NavBar_Links/MainLinks";
import CategoryLinks from "../NavBar_Links/CategoryLinks";
import SearchBar from "../SearchBar/SearchBar";
import { invisible, navBarStyle, visible } from "../../styles";
import useLoadEffect from "../../hooks/Effects/useLoadEffect";
import { useAuth0 } from "@auth0/auth0-react";
import useLoginUser from "../../hooks/Users/useLoginUser";


const Navbar = () => {
  const location = useLocation();
  const { isAuthenticated, user } = useAuth0();
  const showCategory = location.pathname === "/shop" ? true : false;
  const { loadEffect } = useLoadEffect();
  const { userData } = useLoginUser();

  const navBar_visibility = loadEffect ? visible : invisible;

  return (
    <div>
      <nav className={`${navBarStyle} ${navBar_visibility}`}>
        <MainLinks />
        <SearchBar />
        <div className="flex justify-center items-center gap-2">
          <button>
            <img
              src={cartIcon}
              className="w-[30px] ml-2 hover:scale-110 transition-transform duration-200"
              alt="Cart Icon"
            />
          </button>
          {isAuthenticated && (
            <Link to="/profile/personalInfo">
              <img
                src={userData?.img}
                alt={userData?.name}
                className="w-9 h-9 cursor-pointer p-1 m-1 rounded-full hover:scale-110 transition-transform duration-200"
              />
            </Link>
          )}

          {isAuthenticated && (
            <NavLink to="/admin/manageProducts">
              <img
                src={isAdminIcon}
                alt="Admin Icon"
                className="w-9 h-9 cursor-pointer my-1 rounded-full hover:scale-110 transition-transform duration-200"
              />
            </NavLink>
          )}
        </div>
      </nav>

      <CategoryLinks showCategory={showCategory} />
    </div>
  );
};

export default Navbar;
