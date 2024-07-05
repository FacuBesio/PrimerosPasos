import {
  CategoriesContext,
  FlagCartEffectContext,
  PagesContext,
} from "../../context/index";
import React, { useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import {
  navbarCategoryStyle,
  navbarCategoryStyle_Selected,
} from "../../styles";
import getCategories from "../../utils/categories/getCategories";

const CategoryLinks = () => {
  const { setPage } = useContext(PagesContext);
  const { flag } = useContext(FlagCartEffectContext);
  const { allCategories, setAllCategories, setCategoryTag } =
    useContext(CategoriesContext);

  const handlerClickCategories = (category, setCategoryTag, setPage) => {
    setCategoryTag(category.name);
    setPage(1);
  };

  useEffect(() => {
    getCategories(setAllCategories);
  }, []);

  const block =
    "block transition-transform duration-100 ease-in flex justify-start md:justify-center items-center gap-4 m-2 w-full overflow-x-auto text-[12px] md:text-[18px]";
  const hidden =
    "hidden transition-transform duration-100 ease-in flex justify-start md:justify-center items-center gap-4 m-2 w-full overflow-x-auto text-[12px] md:text-[18px]";
  
    return (
    <div className={flag ? block : hidden}>
      {allCategories?.categories?.map((category) => (
        <NavLink
          to={`/shop/categories/${category.name}`}
          key={category.id}
          className={({ isActive }) =>
            isActive ? navbarCategoryStyle_Selected : navbarCategoryStyle
          }
          onClick={() =>
            handlerClickCategories(category, setCategoryTag, setPage)
          }
        >
          {category.name}
        </NavLink>
      ))}
    </div>
  );
};

export default CategoryLinks;
