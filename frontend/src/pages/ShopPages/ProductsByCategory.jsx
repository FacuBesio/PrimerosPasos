/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
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

const ProductsByCategory = ({ setOriginUrl, productsParams }) => {
  const { filter, page, searchBar, sorter } = productsParams;
  const url = useLocation().pathname;
  const { name } = useParams();
  const { categoryTag, setCategoryTag } = useContext(CategoriesContext);
  const { setAllBrands } = useContext(BrandsContext);
  const { setAllProducts } = useContext(ProductsContext);
  const [loading, setLoading] = useState(true);
  const [delayLoading, setDelayLoading] = useState(true);

  // Reset loading state when name changes
  useEffect(() => {
    setLoading(true);
    setDelayLoading(true);
  }, [name]);

  useEffect(() => {
    setOriginUrl(url);
    getBrands(setAllBrands).finally(() => setLoading(false));
  }, [url]);

  useEffect(() => {
    if (!loading) {
      const timer = setTimeout(() => {
        setDelayLoading(false);
      }, 250);
      return () => clearTimeout(timer);
    }
  }, [loading]);

  useEffect(() => {
    getProductsByCategories(
      setAllProducts,
      setCategoryTag,
      page,
      searchBar,
      filter,
      sorter,
      name
    ).finally(() => setLoading(false));
  }, [page, searchBar, categoryTag, filter, sorter, name]);

  const loaderStates = { loading, delayLoading };

  return (
    <main className="bg-[#eae0f5]  overflow-hidden ">
      <Marquee />
      <Title />
      <Navbar />
      <div className="flex border-y-2 border-red-200 mt-4 md:px-10">
        <ProductComponent loaderStates={loaderStates} />
      </div>
      <Footer />
    </main>
  );
};

export default ProductsByCategory;
