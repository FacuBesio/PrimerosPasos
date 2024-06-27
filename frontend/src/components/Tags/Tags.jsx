import { useCallback, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  CategoriesContext,
  FilterContext,
  PagesContext,
  SearchContext,
} from "../../context/index.js";
import { filterTags } from "../../styles.js";

const Tags = () => {
  const navigate = useNavigate();
  const {
    setFilterBrands,
    setFilterColors,
    setFilterPrices,
    setFilterSizes,
    brandsTag,
    setBrandsTag,
    colorsTag,
    setColorsTag,
    pricesTag,
    setPricesTag,
    sizesTag,
    setSizesTag,
  } = useContext(FilterContext);
  const { categoryTag, setCategoryTag } = useContext(CategoriesContext);
  const { setPage } = useContext(PagesContext);
  const { searchBarTag, setSearchBarTag, setSearchBar } =
    useContext(SearchContext);

  const handleRemoveSearchBarTag = useCallback(() => {
    setSearchBarTag("");
    setSearchBar("");
    setPage(1);
  }, [setSearchBarTag, setSearchBar, setPage]);

  const handleRemoveCategoryTag = useCallback(() => {
    setCategoryTag("");
    setPage(1);
    navigate(`/shop`);
  }, [setCategoryTag, setPage, navigate]);

  const handleRemoveBrandTag = useCallback(() => {
    setFilterBrands([]);
    setBrandsTag("");
    setPage(1);
  }, [setFilterBrands, setBrandsTag, setPage]);

  const handleRemoveColorTag = useCallback(() => {
    setFilterColors([]);
    setColorsTag("");
    setPage(1);
  }, [setFilterColors, setColorsTag, setPage]);

  const handleRemovePricesTag = useCallback(() => {
    setPricesTag("");
    setFilterPrices([0, 0]);
    setPage(1);
  }, [setPricesTag, setFilterPrices, setPage]);

  const handleRemoveSizeTag = useCallback(() => {
    setFilterSizes([]);
    setSizesTag("");
    setPage(1);
  }, [setFilterSizes, setSizesTag, setPage]);

  return (
    <div className="flex gap-2">
      {searchBarTag ? (
        <h2 onClick={handleRemoveSearchBarTag} className={filterTags}>
          {searchBarTag}
        </h2>
      ) : (
        <div className="hidden "></div>
      )}

      {categoryTag !== "" ? (
        <h2 onClick={handleRemoveCategoryTag} className={filterTags}>
          {categoryTag}
        </h2>
      ) : (
        <div className="hidden "></div>
      )}

      {brandsTag ? (
        <h2 onClick={handleRemoveBrandTag} className={filterTags}>
          {brandsTag}
        </h2>
      ) : (
        <div className="hidden"></div>
      )}

      {colorsTag ? (
        <h2
          onClick={handleRemoveColorTag}
          className="border-2 bg-white border-white w-fit p-1 text-sm rounded-md h-fit hidden lg:block cursor-pointer capitalize hover:scale-105 transition-transform duration-150"
        >
          {colorsTag}
        </h2>
      ) : (
        <div className="hidden"></div>
      )}

      {pricesTag.length === 2 && pricesTag[1] > 0 ? (
        <h2 onClick={handleRemovePricesTag} className={filterTags}>
          {pricesTag.join(" - ")}
        </h2>
      ) : (
        <div className="hidden "></div>
      )}
     
      {sizesTag ? (
        <h2
          onClick={handleRemoveSizeTag}
          className="border-2 bg-white border-white w-fit p-1 text-sm rounded-md h-fit hidden lg:block cursor-pointer capitalize hover:scale-105 transition-transform duration-150"
        >
          {sizesTag}
        </h2>
      ) : (
        <div className="hidden"></div>
      )}
    </div>
  );
};

export default Tags;
