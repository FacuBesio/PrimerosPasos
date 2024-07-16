import { useContext } from "react";
import { tag_style } from "../../../styles.js";
import { TagsContext } from "../../../context/TagsContext.jsx";
import { FilterContext } from "../../../context/FilterContext.jsx";

const PriceSelector_Tag = () => {
  const { filter, setFilter } = useContext(FilterContext);
  const { filterTags, setFilterTags } = useContext(TagsContext);
  const { price_inputs } = filterTags;

  const handleRemoveColorTag = () => {
    setFilter({ ...filter, price_inputs: [0,0] });
    setFilterTags({ ...filter, price_inputs: [0,0] });
  };

  return (
    <>
      {price_inputs && price_inputs[1] > 0 && (
        <h2 onClick={handleRemoveColorTag} className={`${tag_style} capitalize`}>
          {`${price_inputs[0]} - ${price_inputs[1]}`}
        </h2>
      )}
    </>
  );
};

export default PriceSelector_Tag;
