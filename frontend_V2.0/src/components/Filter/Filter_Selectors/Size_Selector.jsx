import { filterSelectorStyle } from "../../../styles";
import useSizes from "../../../hooks/Size/useSizes";
import { FilterContext } from "../../../context";
import { useContext } from "react";

function Size_Selector({ handlerChange }) {
  const { allSizes } = useSizes();
  const { filter } = useContext(FilterContext);
  const { size_selector } = filter;

  return (
    <>
      <select
        className={filterSelectorStyle}
        name="size_selector"
        id="size_selector"
        onChange={handlerChange}
        value={size_selector}
      >
        <option className="bg-slate-200" value="" disabled>
          Talle
        </option>
        <option value="">All</option>
        {allSizes?.sizes?.map((size) => (
          <option key={size} className="text-[#5a5b5a]" value={size}>
            {size}
          </option>
        ))}
      </select>
    </>
  );
}

export default Size_Selector;
