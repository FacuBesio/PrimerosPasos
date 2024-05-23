import React, { useState, useEffect } from "react";
import getCategories from "../../utils/categories/getCategories";
import getBrands from "../../utils/brands/getBrands";
import filterValidator from "../../utils/filter/filterValidator";
import sorterValidator from "../../utils/sorter/sorterValidator";
import {
  handlerClickBrands,
  handlerClickCategories,
  handlerMinPrice,
  handlerMaxPrice,
} from "../../utils/filter/filterHandlers";
import SortComponent from "../SortComponent/SortComponent";

const Filter = ({ allShopSetters }) => {
  const { setFilter, setSorter } = allShopSetters;

  const [allBrands, setAllBrands] = useState(null);
  const [allCategories, setAllCategories] = useState(null);

  const [filterBrands, setFilterBrands] = useState(null);
  const [filterCategories, setFilterCategories] = useState(null);
  const [filterPrices, setFilterPrices] = useState([0, 0]);

  const [sorterByPrice, setSorterByPrice] = useState("");
  const [sorterByRating, setSorterByRating] = useState("");

  const allSetters = {
    ...allShopSetters,
    setAllBrands,
    setAllCategories,
    setFilterBrands,
    setFilterCategories,
    setFilterPrices,
  };

  const onChangeMinPrice = (event) => {
    handlerMinPrice(event, filterPrices, allSetters);
  };

  const onChangeMaxPrice = (event) => {
    handlerMaxPrice(event, filterPrices, allSetters);
  };

  const onChangeSorterPrice = (event) => {
    setSorterByPrice(event.target.value);
  };

  const onChangeSorterRating = (event) => {
    setSorterByRating(event.target.value);
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

    const sorterQuery = sorterValidator(sorterByPrice, sorterByRating);
    sorterQuery.sorterActive && setSorter(sorterQuery.result);
  }, [
    filterBrands,
    filterCategories,
    filterPrices,
    sorterByPrice,
    sorterByRating,
  ]);

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
                onClick={handlerClickCategories(allSetters, category)}
                className="text-[#5a5b5a] hover:text-[#Dbb1bc]  tracking-tighter "
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
                onClick={handlerClickBrands(allSetters, brand)}
                className="text-[#5a5b5a] hover:text-[#Dbb1bc]  tracking-tighter "
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
              placeholder="mín"
              value={filterPrices[0] === 0 ? "" : filterPrices[0]}
              onChange={onChangeMinPrice}
            />
          </label>
          <label htmlFor="">
            <input
              className="w-full rounded-md border"
              type="text"
              placeholder="máx"
              value={filterPrices[1] === 0 ? "" : filterPrices[1]}
              onChange={onChangeMaxPrice}
            />
          </label>
        </form>
      </div>
      {/* <SortComponent sorterByRating={sorterByRating} sorterByPrice={sorterByPrice}  onChangeSorterPrice ={onChangeSorterPrice} onChangeSorterRating={onChangeSorterRating} />  */}
      <div className="category-section">
        <div>
          <h3 className="py-4 underline underline-offset-4 text-[#2e2e2e] ">
            Ordenar por precio
          </h3>
          <select
            className="rounded-md w-full"
            name="sorterByPrice"
            id="sorterByPrice"
            onChange={onChangeSorterPrice}
            value={sorterByPrice}
          >
            <option value="">Precio</option>
            <option value="asc">Menor precio</option>
            <option value="desc">Mayor precio</option>
          </select>
        </div>
        <div>
          <h3 className="py-4 underline underline-offset-4 text-[#2e2e2e] ">
            Ordenar por rating
          </h3>
          <select
            className="rounded-md w-full"
            name="sorterByRating"
            id="sorterByRating"
            onChange={onChangeSorterRating}
            value={sorterByRating}
          >
            <option value="">Sin rating</option>
            <option value="asc">Menor rating</option>
            <option value="desc">Mayor rating</option>
          </select>
        </div>
      </div>
    </section>
  );
};

export default Filter;
