import { useContext, useState, useEffect, useRef } from "react";
import getProducts from "../../services/Products/getProducts";
import {
  AdminContext,
  CategoriesContext,
  FilterContext,
  PagesContext,
  SearchContext,
  ShopContext,
  SortContext,
} from "../../context";

const useProducts = () => {
  const { productRemoved, setProductRemoved } = useContext(AdminContext);
  const { category } = useContext(CategoriesContext);
  const { filter } = useContext(FilterContext);
  const { page, setPage } = useContext(PagesContext);
  const { serach } = useContext(SearchContext);
  const { sorter } = useContext(SortContext);
  const { setWasShopActive } = useContext(ShopContext);
  const [allProducts, setAllProducts] = useState({ products: [] });
  const querysInput = { category, filter, page, serach, sorter };

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
    }, 200);
    return () => {
      setAllProducts({ products: [] });
    };
  }, [category, filter, page, serach, sorter]);

  useEffect(() => {
    if (productRemoved) {
      setAllProducts({ products: [] });
      setTimeout(() => {
        getProducts(querysInput).then((data) => setAllProducts(data));
      }, 200);
      setProductRemoved(false);
    }
  }, [productRemoved]);

  useEffect(() => {
    setPage(1);
  }, [category, filter, serach, sorter]);

  return { allProducts, areProductsLoaded };
};

export default useProducts;