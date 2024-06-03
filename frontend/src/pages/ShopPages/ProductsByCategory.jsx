/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Footer, Marquee, Navbar, Title } from "../../components";
import ProductComponent from "../../components/ProductComponent/Product";
import getProductsByCategories from "../../utils/products/getProductsByCategories";
import getBrands from "../../utils/brands/getBrands";
import {
  BrandsContext,
  CategoriesContext,
  FilterContext,
  PagesContext,
  ProductsContext,
  SearchContext,
  SortContext,
} from "../../context/index";

const ProductsByCategory = () => {
  const { id } = useParams();
  const { categoryTag, setCategoryTag } = useContext(CategoriesContext);
  const { setAllBrands } = useContext(BrandsContext);
  const { filter } = useContext(FilterContext);
  const { page } = useContext(PagesContext);
  const { setAllProducts } = useContext(ProductsContext);
  const { searchBar } = useContext(SearchContext);
  const { sorter } = useContext(SortContext);

  const [loading, setLoading] = useState(true);
  const [delayLoading, setDelayLoading] = useState(true);
  const loaderStates = { loading, delayLoading };

  useEffect(() => {
    getBrands(setAllBrands);
    setLoading(false);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDelayLoading(false);
    }, 250);
    return () => clearTimeout(timer);
  }, [loading]);

  useEffect(() => {
    getProductsByCategories(
      setAllProducts,
      setCategoryTag,
      page,
      searchBar,
      filter,
      sorter,
      id
    );

  }, [page, searchBar, categoryTag, filter, sorter]);

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
