import { NavLink } from "react-router-dom";
import {
  navbarCategoryStyle,
  navbarCategoryStyle_Selected,
} from "../../styles";
import useCategories from "../../hooks/Categories/useCategories";
import { CategoriesContext } from "../../context";
import { useContext, useRef } from "react";

const CategoryLinks = () => {
  const { allCategories } = useCategories();
  const { setCategory } = useContext(CategoriesContext);
  const selectedCategory = useRef();

  const handlerClickCategories = (category_id) => {
    setCategory(category_id);
    selectedCategory.current = category_id;
  };
  console.log("selectedCategory: ", selectedCategory);

  return (
    <div className="flex transition-transform duration-100 ease-in justify-start md:justify-center items-center gap-4 m-2 w-full overflow-x-auto text-[12px] md:text-[18px]">
      {allCategories?.categories?.map((category) => (
        <button
          key={category.id}
          onClick={() => handlerClickCategories(category.id)}
          className={
            category.id === selectedCategory.current
              ? navbarCategoryStyle_Selected
              : navbarCategoryStyle
          }
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default CategoryLinks;
