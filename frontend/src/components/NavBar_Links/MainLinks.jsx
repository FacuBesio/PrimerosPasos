import { useContext } from "react";
import { navbarLinkStyle, navbarLinkStyle_Selected } from "../../styles";
import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { FlagCartEffectContext, PagesContext } from "../../context/index";

const MainLinks = () => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();
  const { flag, setFlag } = useContext(FlagCartEffectContext);
  const { setPage } = useContext(PagesContext);

  const handleLogout = () => {
    window.localStorage.removeItem("userData");
    const updatedCart = { id: null, products: [] };
    window.localStorage.setItem("cart", JSON.stringify(updatedCart));
    logout();
  };

  const handlerActiveCategories = () => {
    setFlag(!flag);
  };

  const handlerClickShop = (setPage) => {
    setPage(1);
  };

  return (
    <div className="flex gap-4 justify-center text-[16px] md:text-[22px]">
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
        onClick={() =>
          handlerClickShop(category, setCategoryTag, setPage)
        }
      >
        Shop
      </NavLink>

      <NavLink
        className={(flag) =>
          !flag ? navbarLinkStyle_Selected : navbarLinkStyle
        }
        onClick={handlerActiveCategories}
      >
        Categorías
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
