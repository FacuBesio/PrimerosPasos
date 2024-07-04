import React, { useCallback, useContext, useEffect, useMemo } from "react";
import filterValidator from "../../utils/filter/filterValidator.js";
import {
  BrandsContext,
  ColorsContext,
  FilterContext,
  PagesContext,
  SizesContext,
} from "../../context/index.js";
import {
  handlerMinPrice,
  handlerMaxPrice,
} from "../../utils/filter/filterHandlers.js";
import { filterStyles } from "../../styles.js";
import getBrands from "../../utils/brands/getBrands.js";
import getColors from "../../utils/colors/getColors.js";
import getSizes from "../../utils/sizes/getSizes.js";

const Filter_Dashboard = () => {
  const { allBrands, setAllBrands } = useContext(BrandsContext);
  const { allColors, setAllColors } = useContext(ColorsContext);
  const { allSizes, setAllSizes } = useContext(SizesContext);
  const { setPage } = useContext(PagesContext);

  const {
    setFilter,
    filterBrands,
    setFilterBrands,
    filterColors,
    setFilterColors,
    filterPrices,
    setFilterPrices,
    filterSizes,
    setFilterSizes,
    setBrandsTag,
    setColorsTag,
    setPricesTag,
    setSizesTag,
  } = useContext(FilterContext);

  const allSetters = useMemo(
    () => ({
      setPricesTag,
      setFilterBrands,
      setFilterColors,
      setFilterPrices,
      setPage,
    }),
    [setPricesTag, setFilterBrands, setFilterColors, setFilterPrices, setPage]
  );

  const onChangeMinPrice = useCallback(
    (event) => {
      handlerMinPrice(event, filterPrices, allSetters);
    },
    [filterPrices, allSetters]
  );

  const onChangeMaxPrice = useCallback(
    (event) => {
      handlerMaxPrice(event, filterPrices, allSetters);
    },
    [filterPrices, allSetters]
  );

  const onBrandChange = useCallback(
    (event) => {
      const selectedBrand = event.target.value;
      setFilterBrands([selectedBrand]);
      setBrandsTag(selectedBrand);
      setPage(1);
    },
    [setFilterBrands, setBrandsTag, setPage]
  );

  const onColorChange = useCallback(
    (event) => {
      const selectedColor = event.target.value;
      setFilterColors([selectedColor]);
      setColorsTag(selectedColor);
      setPage(1);
    },
    [setFilterColors, setColorsTag, setPage]
  );

  const onSizeChange = useCallback(
    (event) => {
      const selectedSize = event.target.value;
      setFilterSizes([selectedSize]);
      setSizesTag(selectedSize);
      setPage(1);
    },
    [setFilterSizes, setSizesTag, setPage]
  );

  useEffect(() => {
    getBrands(setAllBrands);
    getColors(setAllColors);
    getSizes(setAllSizes);
  }, []);

  useEffect(() => {
    const filterQuery = filterValidator(
      filterBrands,
      filterColors,
      filterPrices,
      filterSizes
    );
    if (filterQuery.filterActive) {
      setFilter(filterQuery.result);
    }
  }, [filterBrands, filterColors, filterPrices, filterSizes, setFilter]);

  const filterPriceInputs = useMemo(
    () => (
      <div className="items-center whitespace-nowrap hidden lg:flex gap-2">
        <h2 className={filterStyles}>Rango de precio</h2>
        <form className="flex gap-2" action="">
          <label htmlFor="">
            <input
              className="max-w-[60px] text-center border rounded-md border-white"
              type="text"
              placeholder="$ mín"
              value={filterPrices[0] === 0 ? "" : filterPrices[0]}
              onChange={onChangeMinPrice}
            />
          </label>
          <label htmlFor="">
            <input
              className="max-w-[60px] text-center rounded-md border border-white"
              type="text"
              placeholder="$ máx"
              value={filterPrices[1] === 0 ? "" : filterPrices[1]}
              onChange={onChangeMaxPrice}
            />
          </label>
        </form>
      </div>
    ),
    [filterPrices, onChangeMinPrice, onChangeMaxPrice]
  );

  const brandOptions = useMemo(
    () => (
      <>
        <option value="" disabled>
          Marca
        </option>
        <option value="">All</option>
        {allBrands?.brands?.map((brand) => (
          <option key={brand} className="text-[#5a5b5a]" value={brand}>
            {brand}
          </option>
        ))}
      </>
    ),
    [allBrands]
  );

  const colorsOptions = useMemo(
    () => (
      <>
        <option value="" disabled>
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
      </>
    ),
    [allColors]
  );

  const sizesOptions = useMemo(
    () => (
      <>
        <option value="" disabled>
          Talle
        </option>
        <option value="">All</option>
        {allSizes?.sizes?.map((size) => (
          <option key={size} className="text-[#5a5b5a]" value={size}>
            {size}
          </option>
        ))}
      </>
    ),
    [allSizes]
  );

  return (
    <section className="left-side flex items-center gap-2">
      {filterPriceInputs}

      <select
        className={filterStyles}
        name="filterByBrand"
        id="filterByBrand"
        onChange={onBrandChange}
        value={filterBrands[0] || ""}
      >
        {brandOptions}
      </select>

      <select
        className="text-[#5a5b5a] border border-white bg-white rounded-md w-[100px] md:w-fit px-1 capitalize text-[12px] md:text-[18px]"
        name="filterByColor"
        id="filterByColor"
        onChange={onColorChange}
        value={filterColors[0] || ""}
      >
        {colorsOptions}
      </select>

      <select
        className="text-[#5a5b5a] border border-white bg-white rounded-md w-[100px] md:w-fit px-1 capitalize text-[12px] md:text-[18px]"
        name="filterBySizes"
        id="filterBySizes"
        onChange={onSizeChange}
        value={filterSizes[0] || ""}
      >
        {sizesOptions}
      </select>
    </section>
  );
};

export default React.memo(Filter_Dashboard);
