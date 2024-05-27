import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/context";
import { Footer, Marquee, Navbar, Title } from "../components";
import ProductComponent from "../components/ProductComponent/Product";
import getProducts from "../utils/products/getProducts";
import getBrands from "../utils/brands/getBrands";

const Shop = ({ appLocalStates }) => {
  const { state, setState } = useContext(AppContext);
  const { filter, searchBar, sorter } = state;
  const { setAllBrands, page } = appLocalStates;
  const [loading, setLoading] = useState(true);
  const [delayLoading, setDelayLoading] = useState(true);
  const loaderStates = { loading, delayLoading };

  useEffect(() => {
    getBrands(setAllBrands);
    setLoading(false);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDelayLoading(false);
    }, 250);
    return () => clearTimeout(timer);
  }, [loading]);

  useEffect(() => {
    getProducts(setState, page, searchBar, filter, sorter);
  }, [page, searchBar, filter, sorter]);

  return (
    <main className="bg-[#eae0f5]  overflow-hidden">
      <Marquee />
      <Title />
      <Navbar />
      <div className="flex border-y-2 border-red-200 mt-4">
        <ProductComponent
          appLocalStates={appLocalStates}
          loaderStates={loaderStates}
        />
      </div>
      <Footer />
    </main>
  );
};

export default Shop;
