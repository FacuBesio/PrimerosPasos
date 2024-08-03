import { useContext } from "react";
import { filterSelectorStyle, filterSelectorStyle_dashboard } from "../../../../styles";
import useBrands from "../../../../hooks/Brands/useBrands";
import { FilterContext } from "../../../../context";

function Brand_Selector({ handlerChange }) {
  const { allBrands } = useBrands();
  const { filter } = useContext(FilterContext);
  const { brand_selector } = filter;

  return (
    <>
      <select
        className={filterSelectorStyle_dashboard}
        name="brand_selector"
        id="brand_selector"
        onChange={handlerChange}
        value={brand_selector}
      >
        <option value="">All</option>
        {allBrands?.brands?.map((brand) => (
          <option key={brand} className="text-[#5a5b5a]" value={brand}>
            {brand}
          </option>
        ))}
      </select>
    </>
  );
}

export default Brand_Selector;
