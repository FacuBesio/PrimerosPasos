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
    setFilterPrices,
    brandsTag,
    setBrandsTag,
    pricesTag,
    setPricesTag,
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
    setFilterBrands("");
    setBrandsTag("");
    setPage(1);
  }, [setFilterBrands, setBrandsTag, setPage]);

  const handleRemovePricesTag = useCallback(() => {
    setPricesTag("");
    setFilterPrices([0, 0]);
    setPage(1);
  }, [setPricesTag, setFilterPrices, setPage]);

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

      {pricesTag.length === 2 && pricesTag[1] > 0 ? (
        <h2 onClick={handleRemovePricesTag} className={filterTags}>
          {pricesTag.join(" - ")}
        </h2>
      ) : (
        <div className="hidden "></div>
      )}
    </div>
  );
};

export default Tags;
