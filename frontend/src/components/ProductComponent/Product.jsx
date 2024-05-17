import React, { useEffect, useState } from "react";
import getProducts from "../../utils/products/getProducts.js";
import getCategories from "../../utils/categories/getCategories.js";
import Paginated from "../Paginated/Paginated";

const ProductComponent = () => {
  const [allProducts, setAllProducts] = useState(null);
  const [categories, setCategories] = useState(null);
  const [page, setPage] = useState(1);
 
  const handlerNextPage = () => {
    setPage(page + 1)
  };

  console.log(categories);
  
  useEffect(() => {
    getProducts(setAllProducts, page)
    getCategories(setCategories)
    }, [page]);

  return (
    <section>
      <button onClick={handlerNextPage}> Next </button>
      <div className="right-side p-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {allProducts?.products?.map((product) => (
          <a
            href={`/productDetail/${product.id}`}
            key={product.id}
            className="bg-white rounded-lg flex flex-col items-center hover:shadow-2xl hover:shadow-[#82525e] ease-in duration-200"
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
      <Paginated currentPage={1} totalPages={15} onPageChange={1 + 1} />
    </section>
  );
};

export default ProductComponent;
