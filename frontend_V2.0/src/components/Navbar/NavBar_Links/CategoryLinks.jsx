import { useContext } from "react";
import {
  categoryLink_style,
  categoryLinkSelected_style,
  categoryLinksStyle,
  invisible,
  visible,
} from "../../../styles";
import useCategories from "../../../hooks/Categories/useCategories";
import { CategoriesContext, TagsContext } from "../../../context";

const CategoryLinks = ({ showCategory }) => {
  const { allCategories, areCategoriesLoaded } = useCategories();
  const { setCategory, selectedCategory, setSelectedCategory } =
    useContext(CategoriesContext);
  const { setCategoryTag } = useContext(TagsContext);

  const categoryLinks_visibility =
    areCategoriesLoaded && showCategory
      ? `${visible} h-fit`
      : `${invisible} h-0`;

  const handlerClickCategories = (category_id, category_name) => {
    setCategory(category_id);
    setSelectedCategory(category_id);
    setTimeout(() => {
      setCategoryTag(category_name);
    }, [150]);
  };

  return (
    <div className={`${categoryLinksStyle} ${categoryLinks_visibility}`}>
      {allCategories?.categories?.map((category) => (
        <button
          key={category.id}
          onClick={() => handlerClickCategories(category.id, category.name)}
          className={
            category.id === selectedCategory
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
