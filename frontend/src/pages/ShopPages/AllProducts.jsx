import  React, { useCallback, useContext, useEffect } from "react";
import { Footer, Marquee, Navbar, Title } from "../../components";
import ProductComponent from "../../components/ProductComponent/Product";
import getProducts from "../../utils/products/getProducts";
import getBrands from "../../utils/brands/getBrands";
import {
  BrandsContext,
  ProductsContext,
} from "../../context/index";
import { mainPages } from "../../styles";
import useLoading from "../../hooks/useLoading";

const AllProducts = ({ productsParams }) => {
  const { filter, page, searchBar, sorter } = productsParams;
  const { setAllBrands } = useContext(BrandsContext);
  const { setAllProducts } = useContext(ProductsContext);
  const { loading, delayLoading } = useLoading();
  const loaderStates = { loading, delayLoading };
console.log("Render Test");
  useEffect(() => {
    getBrands(setAllBrands);
  }, [setAllBrands]);

  const fetchProducts = useCallback(() => {
    getProducts(setAllProducts, page, searchBar, filter, sorter);
  }, [setAllProducts, page, searchBar, filter, sorter]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <main className={mainPages}>
      <Marquee />
      <Title />
      <Navbar />
      <div className="flex border-y-2 border-white mt-4 md:px-10">
        <ProductComponent loaderStates={loaderStates} />
      </div>
      <Footer />
    </main>
  );
};

export default React.memo(AllProducts);
