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
  allProducts.products.length > 0
    ? (areProductsLoaded = true)
    : (areProductsLoaded = false);

  useEffect(() => {
    setTimeout(() => {
      getProducts(querysInput).then((data) =>
        setAllProducts(data)
      );
    }, 150);

    return () =>
      setAllProducts({
        products: [],
        totalResults: 0,
      });
  }, [category, serach]);

  return { allProducts, areProductsLoaded };
};

export default useProducts;
