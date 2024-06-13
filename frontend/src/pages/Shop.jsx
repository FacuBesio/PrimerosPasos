import React, { useContext, useState, useEffect, useMemo } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import AllProducts from "./ShopPages/AllProducts";
import ProductsByCategory from "./ShopPages/ProductsByCategory";
import ProductDetail from "./ShopPages/ProductDetail";
import {
  FilterContext,
  PagesContext,
  SearchContext,
  SortContext,
} from "../../src/context/index";

const Shop = () => {
  const location = useLocation();
  const [originUrl, setOriginUrl] = useState(location.pathname);
  const { filter } = useContext(FilterContext);
  const { page } = useContext(PagesContext);
  const { searchBar } = useContext(SearchContext);
  const { sorter } = useContext(SortContext);

  // Memoiza productsParams para evitar cambios en cada renderizado
  const productsParams = useMemo(
    () => ({ filter, page, searchBar, sorter }),
    [filter, page, searchBar, sorter]
  );

  useEffect(() => {
    setOriginUrl(location.pathname);
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
              setOriginUrl={setOriginUrl}
              productsParams={productsParams}
            />
          }
        />
        <Route
          path="/productDetail/:id"
          element={<ProductDetail originUrl={originUrl} />}
        />
      </Routes>
    </>
  );
};

export default Shop;
