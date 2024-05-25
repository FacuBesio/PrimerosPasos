/* eslint-disable react/prop-types */
import React, { useEffect, useState, useContext } from "react";
import { AppContext } from "../../context/context.jsx";
import getProducts from "../../utils/products/getProducts.js";
import Paginated from "../Paginated/Paginated";
import SortComponent from "../SortComponent/SortComponent.jsx";
import sorterValidator from "../../utils/sorter/sorterValidator.js";
import Filter from "../Filter/Filter.jsx";


const ProductComponent = ({ allFilters, setSorter }) => {
  
  const {
    sorter,
    filterBrandsName,
    filterPricesValues,
  } = allFilters;
  const { state } = useContext(AppContext);

  const [sorterByPrice, setSorterByPrice] = useState("");
  const [sorterByRating, setSorterByRating] = useState("");

  const { searchBar, filter } = state;
  const [allProducts, setAllProducts] = useState(null);
  const [page, setPage] = useState(1);



  
  const onChangeSorterPrice = (event) => {
    setSorterByPrice(event.target.value);
  };
  
  const onChangeSorterRating = (event) => {
    setSorterByRating(event.target.value);
  };
  
  const sortComponentParams = {
    sorterByPrice,
    onChangeSorterPrice,
    sorterByRating,
    onChangeSorterRating,
  };

  useEffect(() => {
    const sorterQuery = sorterValidator(sorterByPrice, sorterByRating);
    sorterQuery.sorterActive && setSorter(sorterQuery.result);
    getProducts(setAllProducts, page, searchBar, filter, sorter);
  }, [page, searchBar, filter, sorter, sorterByPrice, sorterByRating, setSorter]);

  const productsAvailable = allProducts?.products?.length > 0;

  return (
    <section className="w-full ">
    <div className="flex w-full justify-end py-2">


      {filterBrandsName && (
        <h2 className="border-2 bg-white border-red-200 w-fit p-1 text-sm rounded-md m-1 ">
          {filterBrandsName}
        </h2>
      )}

      {filterPricesValues.length === 2 && filterPricesValues[1] > 0 && (
        <h2 className="border-2 bg-white border-red-200 w-fit p-1 text-sm rounded-md m-1">
          {filterPricesValues.join(" - ")}
        </h2>
      )}

    
      <SortComponent sortComponentParams={sortComponentParams} />
    </div>

    {productsAvailable ? (
      <div className="right-side p-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {allProducts.products.map((product) => (
          <a
            href={`/productDetail/${product.id}`}
            key={product.id}
            className="bg-white rounded-lg flex flex-col items-center hover:shadow-2xl hover:shadow-[#d2afb8] ease-in duration-200"
          >
            <img
              className="object-contain rounded-lg h-full p-2"
              src={product.img}
              alt={product.name}
            />
            <div className="text-center">
              <h2 className="font-bold text-gray-400 text-[16px] md:text-[18px] lg:text-[22px] px-2">
                {product.name}
              </h2>
              <h2 className="text-gray-800 text-[16px] md:text-[18px] lg:text-[20px] py-2">
                ${product.price}
              </h2>
              <h2 className="text-gray-400 text-[16px] md:text-[18px] lg:text-[20px] pb-2">
                Stock: {product.stock}
              </h2>
            </div>
          </a>
        ))}
      </div>
    ) : (
      <div className="text-center md:h-screen  py-4">
        <h2 className="text-gray-800 text-[18px] md:text-[20px] lg:text-[22px]">
          No se encuentran productos disponibles.
        </h2>
      </div>
    )}

    <Paginated
      page={page}
      setPage={setPage}
      totalPages={allProducts?.totalPages}
    />
  </section>
  );
};

export default ProductComponent;
