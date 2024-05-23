import React, { useEffect, useState } from "react";
import getProducts from "../../utils/products/getProducts.js";
import Paginated from "../Paginated/Paginated";
import SortComponent from "../SortComponent/SortComponent.jsx";

const ProductComponent = ({
  filter,
  filterCategoriesName,
  filterBrandsName,
}) => {
  const [allProducts, setAllProducts] = useState(null);
  const [page, setPage] = useState(1);
  const [selectedFilter, setSelectedFilter] = useState(null);

  useEffect(() => {
    getProducts(setAllProducts, page, filter);
  }, [page, filter]);

  const handleFilterClick = (selectedFilter) => {
    setSelectedFilter(filter);
  };
  const handleRemoveFilter = () => {
    setSelectedFilter(null);
  };
  console.log(filterCategoriesName, filterBrandsName);
  return (
    <section className="">
      <div className="sort-section flex justify-between p-4">
      <div className="flex">
        {filterCategoriesName && (
          <h2 className="border-2 bg-white  border-red-200 w-fit p-1 rounded-md m-2">
            {filterCategoriesName}
            <img className="w-2 h-2" src="./assets/cross.png" alt="" />
          </h2>
        )}
      </div>
      <SortComponent />
      </div>
      <div className="right-side p-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 min-h-screen min-w-screen">
        {allProducts?.products?.map((product) => (
          <a
            href={`/productDetail/${product.id}`}
            key={product.id}
            className="bg-white rounded-lg flex flex-col items-center hover:shadow-xl hover:shadow-[#fdd9e3] ease-in duration-200 max-h-[640px]"
          >
            <img
              className=" object-contain rounded-lg h-full p-2"
              src={product.img}
              alt={product.name}
            />
            <div className="text-center ">
              <h2 className="font-bold text-gray-400 text-[16px] md:text-[18px] lg:text-[22px] px-2">
                {product.name}
              </h2>
              <h2 className=" text-gray-800 text-[16px] md:text-[18px] lg:text-[20px] py-2">
                ${product.price}
              </h2>
              <h2 className="text-gray-400 text-[16px] md:text-[18px] lg:text-[20px] pb-2">
                Stock:{product.stock}
              </h2>
            </div>
          </a>
        ))}
      </div>
      <Paginated
        page={page}
        setPage={setPage}
        totalPages={allProducts?.totalPages}
      />
    </section>
  );
};

export default ProductComponent;
