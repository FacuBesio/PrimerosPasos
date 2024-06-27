import React, { useContext, useState, useEffect, useMemo } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import AllProducts from "./ShopPages/AllProducts";
import ProductsByCategory from "./ShopPages/ProductsByCategory";
import ProductDetail from "./ShopPages/ProductDetail";
import {
  FilterContext,
  OriginUrlContext,
  PagesContext,
  SearchContext,
  SortContext,
} from "../../src/context/index";

const Shop = () => {
  const location = useLocation();
  // const [originUrl, setOriginUrl] = useState(location.pathname);
  const { filter } = useContext(FilterContext);
  const { originUrl, setOriginUrl } = useContext(OriginUrlContext);
  const { page } = useContext(PagesContext);
  const { searchBar } = useContext(SearchContext);
  const { sorter } = useContext(SortContext);

  // Memoiza productsParams para evitar cambios en cada renderizado
  const productsParams = { filter, page, searchBar, sorter }

console.log("SHOP originUrl:", originUrl);
  
useEffect(() => {
  if (!originUrl && !(location.pathname.includes('productDetail'))) {
    setOriginUrl(location.pathname);
  } 
  }, [location.pathname]);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<AllProducts productsParams={productsParams} />}
        />
        <Route
          path="categories/:name"
          element={
            <ProductsByCategory
              productsParams={productsParams}
              setOriginUrl={setOriginUrl}
            />
          }
        />
        <Route
          path="/productDetail/:id"
          element={<ProductDetail originUrl={originUrl}/>}
        />
      </Routes>
    </>
  );
};

export default Shop;
