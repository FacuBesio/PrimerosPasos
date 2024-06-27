import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ProductsContext } from "../../context/index.js";
import ButtonAddToCart from "../ButtonAddToCart/ButtonAddToCart.jsx";
import { productBox } from "../../styles.js";
import { motion } from "framer-motion";

const Products_Iterator = () => {
  const navigate = useNavigate();
  const { allProducts } = useContext(ProductsContext);

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.6 } },
  };

  const productsAvailable = allProducts?.products?.length > 0;

  return (
    <>
      {productsAvailable ? (
        <div className="right-side p-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {allProducts?.products?.map((product) => (
            <div key={product.id} className={productBox}>
              {/* <motion.div
            variants={itemVariants}
            key={product.id}
            className={productBox}
          > */}
              <ButtonAddToCart product={product} />

              <img
                className="object-contain rounded-lg h-full p-2"
                src={product.img}
                alt={product.name}
                onClick={() => navigate(`/shop/productDetail/${product.id}`)}
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
              {/* </motion.div> */}
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center md:h-screen py-4">
          <h2 className="text-gray-800 text-[18px] md:text-[20px] lg:text-[22px]">
            No se encuentran productos disponibles.
          </h2>
        </div>
      )}
    </>
  );
};

export default Products_Iterator;
