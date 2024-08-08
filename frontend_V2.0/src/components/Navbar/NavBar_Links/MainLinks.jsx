import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { mainLink_style, mainLinkSelected_style } from "../../../styles";
import { CategoriesContext, TagsContext } from "../../../context";
import { useContext } from "react";

const MainLinks = () => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();
  const { setCategory, setSelectedCategory } = useContext(CategoriesContext);
  const { setCategoryTag } = useContext(TagsContext);

  const handleLogout = () => {
    window.localStorage.removeItem("userData");
    const resetCart = { id: null, products: [] };
    window.localStorage.setItem("cart", JSON.stringify(resetCart));
    logout();
  };

  const handlerResetCategory = () => {
    setCategory("");
    setSelectedCategory("");
    setCategoryTag("");
  };

  return (
    <div className="flex gap-4 justify-center text-[16px] md:text-[22px]">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? mainLinkSelected_style : mainLink_style
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/shop"
        className={({ isActive }) =>
          isActive ? mainLinkSelected_style : mainLink_style
        }
        onClick={handlerResetCategory}
      >
        Shop
      </NavLink>

      <NavLink
        to="/contacto"
        className={({ isActive }) =>
          isActive ? mainLinkSelected_style : mainLink_style
        }
      >
        Contacto
      </NavLink>

      {!isAuthenticated ? (
        <button className={mainLink_style} onClick={() => loginWithRedirect()}>Login</button>
      ) : (
        <button className={mainLink_style} onClick={handleLogout}>Logout</button>
      )}
    </div>
  );
};

export default MainLinks;
