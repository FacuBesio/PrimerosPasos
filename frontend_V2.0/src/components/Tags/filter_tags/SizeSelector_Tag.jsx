import { useContext } from "react";
import { tag_style } from "../../../styles.js";
import { TagsContext } from "../../../context/TagsContext.jsx";
import { FilterContext } from "../../../context/FilterContext.jsx";

const SizeSelector_Tag = () => {
  const { filter, setFilter } = useContext(FilterContext);
  const { filterTags, setFilterTags } = useContext(TagsContext);
  const { size_selector } = filterTags;

  const handleRemoveSizeTag = () => {
    setFilter({ ...filter, size_selector: "" });
    setFilterTags({ ...filter, size_selector: "" });
  };

  return (
    <>
      {size_selector && size_selector !== "" && (
        <h2 onClick={handleRemoveSizeTag} className={tag_style}>
          {size_selector}
        </h2>
      )}
    </>
  );
};

export default SizeSelector_Tag;
