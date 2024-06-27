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
    setFilterColors,
    setColorsTag,
    setFilterPrices,
    setPricesTag,
    setFilterSizes,
    setSizesTag,
  } = useContext(FilterContext);
  const { setPage } = useContext(PagesContext);
  const { setCategoryTag } = useContext(CategoriesContext);
  const { setSearchBar, setSearchBarTag } = useContext(SearchContext);
  const { setSorter, setSorterByPrice, setSorterByRating } =
    useContext(SortContext);
  const { setAllProducts } = useContext(ProductsContext);

  useEffect(() => {
    setAllProducts([]);
    setPage(1);
    setSearchBar("");
    setFilter([]);
    setFilterBrands([]);
    setFilterColors([]);
    setFilterPrices([0, 0]);
    setFilterSizes([]), setBrandsTag("");
    setColorsTag("");
    setCategoryTag("");
    setPricesTag([]);
    setSearchBarTag("");
    setSizesTag(""), 
    setSorter("");
    setSorterByPrice("");
    setSorterByRating("");
  }, []);
};

export default useStatesReset;
