import { filterSelectorStyle } from "../../../styles";
import useColors from "../../../hooks/Colors/useColors";

function Color_Selector({ handlerChange }) {
  const { allColors } = useColors();

  return (
    <>
      <select
        className={filterSelectorStyle}
        name="color_selector"
        id="color_selector"
        onChange={handlerChange}
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
