import { useContext, useState } from "react";
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
  const [originUrl, setOriginUrl] = useState(useLocation().pathname);
  const { filter } = useContext(FilterContext);
  const { page } = useContext(PagesContext);
  const { searchBar } = useContext(SearchContext);
  const { sorter } = useContext(SortContext);

  const productsParams = { filter, page, searchBar, sorter };

  console.log("originUrl: ", originUrl);

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
