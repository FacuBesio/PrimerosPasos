import { filterStyles } from "../../styles";

const Filter = () => {

  return (
    <section className="flex flex-col items-center justify-center gap-4 p-2">
      {/* {filterPriceInputs} */}

      <select
        className={filterStyles}
        name="filterByBrand"
        id="filterByBrand"
        // onChange={onBrandChange}
        // value={filterBrands[0] || ""}
      >
        {/* {brandOptions} */}
      </select>

      <select
        className={filterStyles}
        name="filterByColor"
        id="filterByColor"
        // onChange={onColorChange}
        // value={filterColors[0] || ""}
      >
        {/* {colorsOptions} */}
      </select>

      <select
        className={filterStyles}
        name="filterBySizes"
        id="filterBySizes"
        // onChange={onSizeChange}
        // value={filterSizes[0] || ""}
      >
        {/* {sizesOptions} */}
      </select>
    </section>
  );
};

export default Filter;
