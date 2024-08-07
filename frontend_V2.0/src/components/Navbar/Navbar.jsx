import { Link, NavLink, useLocation } from "react-router-dom";
import isAdminIcon from "../../assets/adminIcon.png";
import MainLinks from "../NavBar_Links/MainLinks";
import CategoryLinks from "../NavBar_Links/CategoryLinks";
import SearchBar from "../SearchBar/SearchBar";
import { invisible, navBarStyle, visible } from "../../styles";
import useLoadEffect from "../../hooks/Effects/useLoadEffect";
import { useAuth0 } from "@auth0/auth0-react";
import useLoginUser from "../../hooks/Users/useLoginUser";
import UserProfile_button from "../Buttons/Navbar_buttons/UserProfile_button";
import Cart_button from "../Buttons/Navbar_buttons/Cart_button";
import Admin_button from "../Buttons/Navbar_buttons/Admin_button";

const Navbar = () => {
  const location = useLocation();
  const { isAuthenticated } = useAuth0();
  const showCategory = location.pathname === "/shop" ? true : false;
  const { loadEffect } = useLoadEffect();

  const navBar_visibility = loadEffect ? visible : invisible;

  return (
    <div>
      <nav className={`${navBarStyle} ${navBar_visibility}`}>
        <MainLinks />
        <SearchBar />
        <div className="flex justify-center items-center gap-2">
          <Cart_button />
          {isAuthenticated && <Admin_button />}
          {isAuthenticated && <UserProfile_button />}
        </div>
      </nav>

      <CategoryLinks showCategory={showCategory} />
    </div>
  );
};

export default Navbar;
