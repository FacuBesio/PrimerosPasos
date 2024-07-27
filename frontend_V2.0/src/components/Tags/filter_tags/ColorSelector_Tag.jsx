import { useContext } from "react";
import { tag_style } from "../../../styles.js";
import { TagsContext } from "../../../context/TagsContext.jsx";
import { FilterContext } from "../../../context/FilterContext.jsx";

const ColorSelector_Tag = () => {
  const { filter, setFilter } = useContext(FilterContext);
  const { filterTags, setFilterTags } = useContext(TagsContext);
  const { color_selector } = filterTags;

  const handleRemoveColorTag = () => {
    setFilter({ ...filter, color_selector: "" });
    setFilterTags({ ...filter, color_selector: "" });
  };

  return (
    <>
      {color_selector && color_selector !== "" && (
        <h2 onClick={handleRemoveColorTag} className={`${tag_style} capitalize`}>
          {color_selector}
        </h2>
      )}
    </>
  );
};

export default ColorSelector_Tag;
