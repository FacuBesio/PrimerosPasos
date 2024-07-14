import { useContext, useRef } from "react";
import {
  categoryLink_style,
  categoryLinks_invisible,
  categoryLinks_visible,
  categoryLinkSelected_style,
  categoryLinksStyle,
} from "../../styles";
import useCategories from "../../hooks/Categories/useCategories";
import { CategoriesContext } from "../../context";

const CategoryLinks = ({ showCategory }) => {
  const { allCategories, areCategoriesLoaded } = useCategories();
  const { setCategory } = useContext(CategoriesContext);
  const selectedCategory = useRef();
//  console.log("allCategories: ", allCategories);
//  console.log("areCategoriesLoaded: ", areCategoriesLoaded);


  const categoryLinks_visibility =
    areCategoriesLoaded && showCategory
      ? categoryLinks_visible
      : categoryLinks_invisible;

  const handlerClickCategories = (category_id) => {
    setCategory(category_id);
    selectedCategory.current = category_id;
  };

  return (
    <div className={`${categoryLinksStyle} ${categoryLinks_visibility}`}>
      {allCategories?.categories?.map((category) => (
        <button
          key={category.id}
          onClick={() => handlerClickCategories(category.id)}
          className={
            category.id === selectedCategory.current
              ? categoryLinkSelected_style
              : categoryLink_style
          }
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default CategoryLinks;
