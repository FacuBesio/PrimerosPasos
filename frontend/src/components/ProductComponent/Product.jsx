import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Paginated from "../Paginated/Paginated";
import SortComponent from "../SortComponent/SortComponent.jsx";
import sorterValidator from "../../utils/sorter/sorterValidator.js";
import Filter from "../Filter/Filter.jsx";
import Loader from "../Loader/Loader.jsx";
import {
  CategoriesContext,
  FilterContext,
  PagesContext,
  ProductsContext,
  SearchContext,
  SortContext,
} from "../../context/index.js";
import ButtonAddToCart from "../ButtonAddToCart/ButtonAddToCart.jsx";
import { productBox, filterTags } from "../../styles.js";

const ProductComponent = ({ loaderStates }) => {
  const navigate = useNavigate();
  const { categoryTag, setCategoryTag } = useContext(CategoriesContext);
  const { page, setPage } = useContext(PagesContext);
  const { allProducts } = useContext(ProductsContext);
  const { searchBarTag, setSearchBarTag, setSearchBar } = useContext(SearchContext);
  const { setFilterBrands, setFilterPrices, brandsTag, setBrandsTag, pricesTag, setPricesTag } = useContext(FilterContext);
  const { setSorter, sorterByPrice, setSorterByPrice, sorterByRating, setSorterByRating } = useContext(SortContext);

  const { loading, delayLoading } = loaderStates;
  const productsAvailable = allProducts?.products?.length > 0;

  const onChangeSorterPrice = useCallback((event) => {
    setSorterByPrice(event.target.value);
  }, [setSorterByPrice]);

  const onChangeSorterRating = useCallback((event) => {
    setSorterByRating(event.target.value);
  }, [setSorterByRating]);

  const sortComponentProps = useMemo(() => ({
    sorterByPrice,
    onChangeSorterPrice,
    sorterByRating,
    onChangeSorterRating
  }), [sorterByPrice, onChangeSorterPrice, sorterByRating, onChangeSorterRating]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const sorterQuery = sorterValidator(sorterByPrice, sorterByRating);
    if (sorterQuery.sorterActive) {
      setSorter(sorterQuery.result);
    }
  }, [categoryTag, sorterByPrice, sorterByRating, setSorter]);

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

  if (loading || delayLoading) {
    return <Loader delayLoading={delayLoading} />;
  }



  return (
    <section className="w-full">
      <div className="flex w-full p-4 md:gap-4 items-center justify-between overflow-x-auto">
        <Filter />
        <div className="flex gap-2">
        {searchBarTag ? (
          <h2
            onClick={handleRemoveSearchBarTag}
            className={filterTags}
          >
            {searchBarTag}
          </h2>
        ) : (
          <div className="hidden "></div>
        )}

        {categoryTag !== "" ? (
          <h2
            onClick={handleRemoveCategoryTag}
            className={filterTags}
          >
            {categoryTag}
          </h2>
        ) : (
          <div className="hidden "></div>
        )}

        {brandsTag ? (
          <h2
            onClick={handleRemoveBrandTag}
            className={filterTags}
          >
            {brandsTag}
          </h2>
        ) : (
          <div className="hidden"></div>
        )}

        {pricesTag.length === 2 && pricesTag[1] > 0 ? (
          <h2
            onClick={handleRemovePricesTag}
            className={filterTags}
          >
            {pricesTag.join(" - ")}
          </h2>
        ) : (
          <div className="hidden "></div>
        )}
        </div>

        <SortComponent sortComponentProps={sortComponentProps} />
      </div>
      {productsAvailable ? (
        <div className="right-side p-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {allProducts.products.map((product) => (
            <div
              key={product.id}
              className={productBox}
            >
              <ButtonAddToCart product={product} />

              <img
                className="object-contain rounded-lg h-full p-2"
                src={product.img}
                alt={product.name}
                onClick={() => navigate(`/shop/productDetail/${product.id}`)}
              />

              <div className="text-center">
                <h2 className="font-bold text-gray-400 text-[16px] md:text-[18px] lg:text-[22px] px-2">
                  {product.name}
                </h2>
                <h2 className="text-gray-800 text-[16px] md:text-[18px] lg:text-[20px] py-2">
                  ${product.price}
                </h2>
                <h2 className="text-gray-400 text-[16px] md:text-[18px] lg:text-[20px] pb-2">
                  Stock: {product.stock}
                </h2>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center md:h-screen py-4">
          <h2 className="text-gray-800 text-[18px] md:text-[20px] lg:text-[22px]">
            No se encuentran productos disponibles.
          </h2>
        </div>
      )}

      <Paginated
        page={page}
        setPage={setPage}
        totalPages={allProducts?.totalPages}
      />
    </section>
  );
};

export default React.memo(ProductComponent);
