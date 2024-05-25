import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../../context/context";

import getCategories from "../../utils/categories/getCategories";
import getBrands from "../../utils/brands/getBrands";
import filterValidator from "../../utils/filter/filterValidator";
import {

  handlerClickBrands,
  handlerMinPrice,
  handlerMaxPrice,
} from "../../utils/filter/filterHandlers";


const Filter = ({ allShopSetters }) => {

  const { setState } = useContext(AppContext); 
  const [allBrands, setAllBrands] = useState(null);
  const [filterBrands, setFilterBrands] = useState(null);
  const [filterPrices, setFilterPrices] = useState([0, 0]);

  const allSetters = {
    ...allShopSetters,
    setAllBrands,
    setFilterBrands,
    setFilterPrices,
  };

  const onChangeMinPrice = (event) => {
    handlerMinPrice(event, filterPrices, allSetters);
  };

  const onChangeMaxPrice = (event) => {
    handlerMaxPrice(event, filterPrices, allSetters);
  };

  useEffect(() => {
    getBrands(setAllBrands);

    const  pirulito = null
    const filterQuery = filterValidator(
      pirulito,
      filterBrands,
      filterPrices
    );
    const filter = filterQuery.result
    filterQuery.filterActive && setState((prevState) => ({ ...prevState, filter }));

  }, [
    filterBrands,
    filterPrices
  ]);

  return (
    <section className="left-side p-2    "> 
      <div className="category-section">
        <h2 className="py-2  text-[#2e2e2e]">
          Rango de precio:
        </h2>
        <form className="flex gap-2" action="">
          <label htmlFor="">
            <input
              className="max-w-[60px] text-center border rounded-md "
              type="text"
              placeholder="mín"
              value={filterPrices[0] === 0 ? "" : filterPrices[0]}
              onChange={onChangeMinPrice}
            />
          </label>
          <label htmlFor="">
            <input
              className="max-w-[80px] text-center rounded-md border"
              type="text"
              placeholder="máx"
              value={filterPrices[1] === 0 ? "" : filterPrices[1]}
              onChange={onChangeMaxPrice}
            />
          </label>
        </form>
      </div>
      <div className="category-section">
        <h2 className=" pt-4  text-[#2e2e2e]">
          Marcas
        </h2>
        <li className="list-none">
          <ul>
            {allBrands?.brands.map((brand) => (
              <h3
                key={brand}
                onClick={handlerClickBrands(allSetters, brand)}
                className="text-[#5a5b5a] hover:text-[#Dbb1bc]  tracking-tighter cursor-pointer "
              >
                {brand}
              </h3>
            ))}
          </ul>
        </li>
      </div>
    </section>
  );
};

export default Filter;
