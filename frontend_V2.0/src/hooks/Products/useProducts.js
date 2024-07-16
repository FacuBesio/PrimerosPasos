import { useContext, useState, useEffect, useRef } from "react";
import getProducts from "../../services/Products/getProducts";
import { CategoriesContext, FilterContext, SearchContext } from "../../context";

const useProducts = () => {
  const { category } = useContext(CategoriesContext);
  const { filter } = useContext(FilterContext);
  const { serach } = useContext(SearchContext);
  const [allProducts, setAllProducts] = useState({ products: [] });
  const querysInput = { category, filter, serach };

  let areProductsLoaded;
  allProducts.hasOwnProperty("totalResults")
    ? (areProductsLoaded = true)
    : (areProductsLoaded = false);

  useEffect(() => {
    setTimeout(() => {
      getProducts(querysInput).then((data) => setAllProducts(data));
    }, 200);
    return () => setAllProducts({ products: [] });
  }, [category, filter, serach]);

  return { allProducts, areProductsLoaded };
};

export default useProducts;
