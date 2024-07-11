import { useEffect, useRef, useState } from "react";
import useProducts from "../../hooks/Products/useProducts";
import { productBox, products_invisible, products_visible } from "../../styles";

const Products = ({ categoryQuery }) => {
  let { allProducts, areProductsLoaded } = useProducts(categoryQuery);

  const productsStyle = areProductsLoaded
    ? products_visible
    : products_invisible;

  // console.log("allProducts.products: ", allProducts.products);
  // console.log("areProductsLoaded: ", areProductsLoaded);



  return (
    <div className={productsStyle}>
      {allProducts?.products?.map((product) => (
        <div key={product.id} className={productBox}>
          <img
            className="object-contain rounded-lg h-full p-2"
            src={product.img}
            alt={product.name}
            onClick={() => navigate(`/shop/productDetail/${product.id}`)}
          />
          <div className="text-center">
            <h2 className="font-bold text-gray-400 text-[16px] md:text-[18px] lg:text-[22px] pt-2 pb-1">
              {product.name}
            </h2>
            <h2 className="text-gray-400 text-[16px] md:text-[18px] lg:text-[22px] p-1">
              {product.brand}
            </h2>
            <h2 className="text-gray-400 text-[16px] md:text-[18px] lg:text-[20px] pt-1 pb-2">
              ${product.price}
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
