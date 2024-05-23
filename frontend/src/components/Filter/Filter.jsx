import React, { useState, useEffect } from "react";
import getCategories from "../../utils/categories/getCategories";
import getBrands from "../../utils/brands/getBrands";
import filterValidator from "../../utils/filter/filterValidator";
import SortComponent from "../SortComponent/SortComponent";

const Filter = ({
  setFilter,
  setFilterBrandsName,
  setFilterCategoriesName,
}) => {
  const [allBrands, setAllBrands] = useState(null);
  const [filterBrands, setFilterBrands] = useState(null);
  const [allCategories, setAllCategories] = useState(null);
  const [filterCategories, setFilterCategories] = useState(null);
  const [minPrice, setMinPrice] = useState(null);
  const [maxPrice, setMaxPrice] = useState(null);
  const [filterPrices, setFilterPrices] = useState([]);

  const handleClickBrands = (brand) => {
    return () => {
      setFilterBrands(brand);
      setFilterBrandsName(brand);
    };
  };

  const handleClickCategories = (category) => {
    return () => {
      setFilterCategories(category.id);
      setFilterCategoriesName(category.name);
    };
  };

  const onChangeMinPrice = (event) => {
    const arrayPrices = [event.target.value, filterPrices[1]];
    setFilterPrices(arrayPrices);
  };

  const onChangeMaxPrice = (event) => {
    const arrayPrices = [filterPrices[0], event.target.value];
    setFilterPrices(arrayPrices);
  };

  useEffect(() => {
    getBrands(setAllBrands);
    getCategories(setAllCategories);
    const filterQuery = filterValidator(
      filterBrands,
      filterCategories,
      filterPrices
    );
    filterQuery.filterActive && setFilter(filterQuery.result);
  }, [filterBrands, filterCategories, filterPrices]);

  return (
    <section className="left-side  border-red-200 border-r-2 md:min-w-[240px] min-w-[160px]  w-[15%] p-6">
      <div className="category-section ">
        <h2 className="py-4 underline underline-offset-4 text-[#2e2e2e]">
          Categorias
        </h2>
        <li className="list-none">
          <ul>
            {allCategories?.categories?.map((category) => (
              <h3
                key={category.id}
                onClick={handleClickCategories(category)}
                className="text-[#5a5b5a] hover:text-[#Dbb1bc]  tracking-tighter cursor-pointer "
              >
                {category.name}
              </h3>
            ))}
          </ul>
        </li>
      </div>
      <div className="category-section">
        <h2 className="py-4 underline underline-offset-4 text-[#2e2e2e]">
          Marcas
        </h2>
        <li className="list-none">
          <ul>
            {allBrands?.brands.map((brand) => (
              <h3
                key={brand}
                onClick={handleClickBrands(brand)}
                className="text-[#5a5b5a] hover:text-[#Dbb1bc]  tracking-tighter cursor-pointer "
              >
                {brand}
              </h3>
            ))}
          </ul>
        </li>
      </div>
      <div className="category-section">
        <h2 className="py-4 underline underline-offset-4 text-[#2e2e2e]">
          Rango de precio:
        </h2>
        <form className="flex gap-2" action="">
          <label htmlFor="">
            <input
              className="w-full border rounded-md "
              type="text"
              placeholder="min"
              value={minPrice}
              onChange={onChangeMinPrice}
            />
          </label>
          <label htmlFor="">
            <input
              className="w-full rounded-md border"
              type="text"
              placeholder="max"
              value={maxPrice}
              onChange={onChangeMaxPrice}
            />
          </label>
        </form>
      </div>
    </section>
  );
};

export default Filter;
