import { navbarLinkStyle, navbarLinkStyle_Selected } from "../../styles";
import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const NavBar_Links = () => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();

  return (
    <div className="flex gap-4 justify-center">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? navbarLinkStyle_Selected : navbarLinkStyle
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/shop"
        className={({ isActive }) =>
          isActive ? navbarLinkStyle_Selected : navbarLinkStyle
        }
      >
        Shop
      </NavLink>

      <NavLink
        to="/contacto"
        className={({ isActive }) =>
          isActive ? navbarLinkStyle_Selected : navbarLinkStyle
        }
      >
        Contacto
      </NavLink>

      {!isAuthenticated ? (
        <button className={navbarLinkStyle} onClick={() => loginWithRedirect()}>
          Login
        </button>
      ) : (
        <button className={navbarLinkStyle} onClick={handleLogout}>
          Logout
        </button>
      )}
    </div>
  );
};

export default NavBar_Links;
