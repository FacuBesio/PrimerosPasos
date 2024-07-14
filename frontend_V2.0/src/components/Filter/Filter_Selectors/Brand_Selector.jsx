import { filterSelectorStyle } from "../../../styles";
import useBrands from "../../../hooks/Brands/useBrands";

function Brand_Selector({ handlerChange }) {
  const { allBrands } = useBrands();

  return (
    <>
      <select
        className={filterSelectorStyle}
        name="brand_selector"
        id="brand_selector"
        onChange={handlerChange}
      >
        <option className="bg-slate-200" value="" disabled>
          Marca
        </option>
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
