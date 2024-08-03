import { useContext } from "react";
import { filterSelectorStyle_dashboard } from "../../../../styles";
import useSizes from "../../../../hooks/Size/useSizes";
import { FilterContext } from "../../../../context";

function Size_Selector({ handlerChange }) {
  const { allSizes } = useSizes();
  const { filter } = useContext(FilterContext);
  const { size_selector } = filter;

  return (
    <>
      <select
        className={filterSelectorStyle_dashboard}
        name="size_selector"
        id="size_selector"
        onChange={handlerChange}
        value={size_selector}
      >
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
