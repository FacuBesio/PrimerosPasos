import { NavLink } from "react-router-dom";
import { mainLink_style, mainLinkSelected_style } from "../../styles";
import { CategoriesContext, TagsContext } from "../../context";
import { useContext } from "react";

const MainLinks = () => {
  const isAuthenticated = true;
  const { setCategory, setSelectedCategory } = useContext(CategoriesContext);
  const { setCategoryTag } = useContext(TagsContext);

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
        <button className={mainLink_style}>Login</button>
      ) : (
        <button className={mainLink_style}>Logout</button>
      )}
    </div>
  );
};

export default MainLinks;
