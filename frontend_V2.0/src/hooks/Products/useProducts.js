import { useContext, useState, useEffect, useRef } from "react";
import getProducts from "../../services/Products/getProducts";
import {
  CategoriesContext,
  FilterContext,
  PagesContext,
  SearchContext,
  ShopContext,
} from "../../context";

const useProducts = () => {
  const { category } = useContext(CategoriesContext);
  const { filter } = useContext(FilterContext);
  const { page, setPage } = useContext(PagesContext);
  const { serach } = useContext(SearchContext);
  const { setWasShopActive } = useContext(ShopContext);
  const [allProducts, setAllProducts] = useState({ products: [] });
  const querysInput = { category, filter, page, serach };

  let areProductsLoaded;
  allProducts.hasOwnProperty("totalResults")
    ? (areProductsLoaded = true)
    : (areProductsLoaded = false);

  useEffect(() => {
    setWasShopActive(true);
  }, []);
  
  useEffect(() => {
    setTimeout(() => {
      getProducts(querysInput).then((data) => setAllProducts(data));
    }, 150);
    return () => setAllProducts({ products: [] });
  }, [category, filter, page, serach]);

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 150);
  }, [page]);

  useEffect(() => {
    setPage(1);
  }, [category, filter, serach]);

  return { allProducts, areProductsLoaded };
};

export default useProducts;
