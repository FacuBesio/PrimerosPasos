import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/context";
import { Footer, Marquee, Navbar, Title } from "../components";
import ProductComponent from "../components/ProductComponent/Product";
import getProducts from "../utils/products/getProducts";
import getBrands from "../utils/brands/getBrands";

const Shop = () => {
  const { state, setState } = useContext(AppContext);
  const { filter, searchBar, sorter, categoryTag } = state;

  const [page, setPage] = useState(1);
  const [allProducts, setAllProducts] = useState(null);
  const [allBrands, setAllBrands] = useState(null);

  const productComponentProps = {
    allProducts,
    allBrands,
    setState,
    categoryTag,
    page,
    setPage,
  };

  useEffect(() => {
    getProducts(setAllProducts, page, searchBar, filter, sorter);
    getBrands(setAllBrands);
  }, [page, searchBar, filter, sorter,]);

  return (
    <main className="bg-[#eae0f5]  overflow-hidden">
      <Marquee />
      <Title />
      <Navbar />
      <div className="flex border-y-2 border-red-200 mt-4">
        <ProductComponent productComponentProps= {productComponentProps}/>
      </div>
      <Footer />
    </main>
  );
};

export default Shop;
