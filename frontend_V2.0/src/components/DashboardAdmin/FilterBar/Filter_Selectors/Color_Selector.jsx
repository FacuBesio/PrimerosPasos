import { useContext } from "react";
import { filterSelectorStyle_dashboard } from "../../../../styles";
import useColors from "../../../../hooks/Colors/useColors";
import { FilterContext } from "../../../../context";

function Color_Selector({ handlerChange }) {
  const { allColors } = useColors();
  const { filter } = useContext(FilterContext);
  const { color_selector } = filter;

  return (
    <>
      <select
        className={filterSelectorStyle_dashboard}
        name="color_selector"
        id="color_selector"
        onChange={handlerChange}
        value={color_selector}
      >
        <option value="">All</option>
        {allColors?.colors?.map((color) => (
          <option
            key={color}
            className="text-[#5a5b5a] capitalize"
            value={color}
          >
            {color}
          </option>
        ))}
      </select>
    </>
  );
}

export default Color_Selector;
