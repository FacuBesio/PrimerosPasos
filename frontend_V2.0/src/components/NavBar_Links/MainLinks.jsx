import { NavLink } from "react-router-dom";
import { navbarLinkStyle, navbarLinkStyle_Selected } from "../../styles";

const MainLinks = () => {
  const isAuthenticated = true;

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
        onClick={() => handlerClickShop(category, setCategoryTag, setPage)}
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
        <button className={navbarLinkStyle}>
          Login
        </button>
      ) : (
        <button className={navbarLinkStyle}>
          Logout
        </button>
      )}
    </div>
  );
};

export default MainLinks;
