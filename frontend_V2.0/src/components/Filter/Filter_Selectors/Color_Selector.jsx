import { filterSelectorStyle } from "../../../styles";
import useColors from "../../../hooks/Colors/useColors";
import { useContext } from "react";
import { FilterContext } from "../../../context";

function Color_Selector({ handlerChange }) {
  const { allColors } = useColors();
  const { filter } = useContext(FilterContext);
  const { color_selector } = filter;

  return (
    <>
      <select
        className={filterSelectorStyle}
        name="color_selector"
        id="color_selector"
        onChange={handlerChange}
        value={color_selector}
      >
        <option className="bg-slate-200" value="" disabled>
          Color
        </option>
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
