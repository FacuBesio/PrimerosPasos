/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { Footer, Marquee, Navbar, Title } from "../components";
import ProductComponent from "../components/ProductComponent/Product";
import getProducts from "../utils/products/getProducts";
import {
  FilterContext,
  PagesContext,
  ProductsContext,
  SearchContext,
  SortContext,
} from "../context/index";

const Shop = () => {
  const { filter } = useContext(FilterContext);
  const { page } = useContext(PagesContext);
  const { setAllProducts } = useContext(ProductsContext);
  const { searchBar } = useContext(SearchContext);
  const { sorter } = useContext(SortContext);
  const [loading, setLoading] = useState(true);
  const [delayLoading, setDelayLoading] = useState(true);
  const loaderStates = { loading, delayLoading };

  useEffect(() => {
    setLoading(false);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDelayLoading(false);
    }, 250);
    return () => clearTimeout(timer);
  }, [loading]);

  useEffect(() => {
    getProducts(setAllProducts, page, searchBar, filter, sorter);
  }, [page, searchBar, filter, sorter]);

  return (
    <main className="bg-[#eae0f5]  overflow-hidden ">
      <Marquee />
      <Title />
      <Navbar />
      <div className="flex border-y-2 border-red-200 mt-4 md:px-10">
        <ProductComponent loaderStates={loaderStates} />
      </div>
      <Footer />
    </main>
  );
};

export default Shop;
