import { useContext } from "react";
import { navbarLinkStyle, navbarLinkStyle_Selected } from "../../styles";
import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { CategoriesContext } from "../../context/index";


const MainLinks = () => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();
  // const { flag } = useContext(FlagCartEffectContext);
  const { setCategoryTag } = useContext(CategoriesContext);

  const handleLogout = () => {
    window.localStorage.removeItem("userData");
    const updatedCart = { id: null, products: [] };
    window.localStorage.setItem("cart", JSON.stringify(updatedCart));
    logout();
  };

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

export default MainLinks;
