import { useContext, useEffect, useState, useCallback, useMemo } from "react";
import { useParams, useLocation } from "react-router-dom";
import { Footer, Marquee, Navbar, Title } from "../../components";
import ProductComponent from "../../components/ProductComponent/Product";
import getProductsByCategories from "../../utils/products/getProductsByCategories";
import getBrands from "../../utils/brands/getBrands";
import {
  BrandsContext,
  CategoriesContext,
  ProductsContext,
} from "../../context/index";
import { mainPages } from "../../styles";

const ProductsByCategory = ({ setOriginUrl, productsParams }) => {
  const { filter, page, searchBar, sorter } = productsParams;
  const url = useLocation().pathname;
  const { name } = useParams();
  const { setCategoryTag } = useContext(CategoriesContext);
  const { setAllBrands } = useContext(BrandsContext);
  const { setAllProducts } = useContext(ProductsContext);
  const [loading, setLoading] = useState(true);
  const [delayLoading, setDelayLoading] = useState(true);

  console.log("Render TestBYIDDDDDD");

  // Memoize fetch functions
  const fetchBrands = useCallback(async () => {
    await getBrands(setAllBrands);
    setLoading(false);
  }, [setAllBrands]);

  const fetchProductsByCategory = useCallback(async () => {
    await getProductsByCategories(
      setAllProducts,
      setCategoryTag,
      page,
      searchBar,
      filter,
      sorter,
      name
    );
    setLoading(false);
  }, [setAllProducts, setCategoryTag, page, searchBar, filter, sorter, name]);

  // Reset loading state when name changes
  useEffect(() => {
    setLoading(true);
    setDelayLoading(true);
  }, [name]);

  // Fetch brands on initial load or url change
  useEffect(() => {
    setOriginUrl(url);
    fetchBrands();
  }, [url, fetchBrands]);

  // Delay the removal of loading state for smooth UX
  useEffect(() => {
    if (!loading) {
      const timer = setTimeout(() => {
        setDelayLoading(false);
      }, 350);
      return () => clearTimeout(timer);
    }
  }, [loading]);

  // Fetch products on dependency changes
  useEffect(() => {
    if (!loading) {
      fetchProductsByCategory();
    }
  }, [page, searchBar, filter, sorter, name, loading, fetchProductsByCategory]);

  const loaderStates = useMemo(() => ({ loading, delayLoading }), [loading, delayLoading]);

  return (
    <main className={mainPages}>
      <Marquee />
      <Title />
      <Navbar />
      <div className="flex border-y-2 border-white mt-4 md:px-10">
        <ProductComponent loaderStates={loaderStates} />
      </div>
      <Footer />
    </main>
  );
};

export default ProductsByCategory;
