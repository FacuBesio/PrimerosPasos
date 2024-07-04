/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import React, { useCallback, useContext, useEffect } from "react";
import { Footer, Marquee, Navbar, Title } from "../../components";
import ProductComponent from "../../components/ProductComponent/ProductComponent";
import getProducts from "../../utils/products/getProducts";
import { CategoriesContext, ProductsContext } from "../../context/index";
import { mainPages } from "../../styles";
import useLoading from "../../hooks/useLoading";

const AllProducts = ({ productsParams }) => {
  const { filter, page, searchBar, sorter } = productsParams;
  const { setAllProducts } = useContext(ProductsContext);
  const { setCategoryTag } = useContext(CategoriesContext);
  const { loading, delayLoading } = useLoading();
  const loaderStates = { loading, delayLoading };
 
  console.log("Render AllProducts");

  const fetchProducts = useCallback(() => {
    getProducts(setAllProducts, page, searchBar, filter, sorter);
  }, [setAllProducts, page, searchBar, filter, sorter]);

  useEffect(() => {
    fetchProducts();
    setCategoryTag("")
  }, [fetchProducts]);

  return (
    <main className={mainPages}>
      <Marquee />
      <Title />
      <Navbar />
      <div className="flex border-y-2 border-white mt-4 px-4 ">
        <ProductComponent loaderStates={loaderStates} />
      </div>
      <Footer />
    </main>
  );
};

export default React.memo(AllProducts);
