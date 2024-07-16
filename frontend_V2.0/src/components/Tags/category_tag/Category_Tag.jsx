import { useContext } from "react";
import { tag_style } from "../../../styles.js";
import { TagsContext } from "../../../context/TagsContext.jsx";
import { CategoriesContext } from "../../../context/CategoriesContext.jsx";

const Category_Tag = () => {
  const { setCategory, setSelectedCategory } = useContext(CategoriesContext);
  const { categoryTag, setCategoryTag } = useContext(TagsContext);

  const handleRemoveCategoryTag = () => {
    setCategory("");
    setSelectedCategory("");
    setCategoryTag("");
  };

  return (
    <>
      {categoryTag !== "" && (
        <h2 onClick={handleRemoveCategoryTag} className={tag_style}>
          {categoryTag}
        </h2>
      )}
    </>
  );
};

export default Category_Tag;
