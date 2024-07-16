import { useContext } from "react";
import { tag_style } from "../../../styles.js";
import { TagsContext } from "../../../context/TagsContext.jsx";
import { FilterContext } from "../../../context/FilterContext.jsx";

const BrandSelector_Tag = () => {
  const { filter, setFilter } = useContext(FilterContext);
  const { filterTags, setFilterTags } = useContext(TagsContext);
  const { brand_selector } = filterTags;

  const handleRemoveBrandTag = () => {
    setFilter({ ...filter, brand_selector: "" });
    setFilterTags({ ...filter, brand_selector: "" });
  };

  return (
    <>
      {brand_selector && brand_selector !== "" && (
        <h2 onClick={handleRemoveBrandTag} className={tag_style}>
          {brand_selector}
        </h2>
      )}
    </>
  );
};

export default BrandSelector_Tag;
