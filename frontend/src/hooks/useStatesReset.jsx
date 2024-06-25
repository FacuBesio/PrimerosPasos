import { useContext, useEffect } from "react";
import {
  CategoriesContext,
  FilterContext,
  PagesContext,
  ProductsContext,
  SearchContext,
  SortContext,
} from "../../src/context/index";

const useStatesReset = () => {
  const {
    setFilter,
    setFilterBrands,
    setBrandsTag,
    setFilterPrices,
    setPricesTag,
  } = useContext(FilterContext);
  const { setPage } = useContext(PagesContext);
  const { setCategoryTag } = useContext(CategoriesContext);
  const { setSearchBar, setSearchBarTag } =
    useContext(SearchContext);
  const { setSorter, setSorterByPrice, setSorterByRating } =
    useContext(SortContext);
  const { setAllProducts } = useContext(ProductsContext);

  useEffect(() => {
    setAllProducts([])
    setPage(1);
    setFilter([]);
    setFilterBrands([]);
    setFilterPrices([0, 0]);
    setBrandsTag("");
    setCategoryTag("");
    setPricesTag([]);
    setSearchBar("");
    setSearchBarTag("");
    setSorter("");
    setSorterByPrice("");
    setSorterByRating("");
  }, []);
};

export default useStatesReset;
