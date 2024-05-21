import React, { useEffect, useState } from "react";
import { Footer, Marquee, Navbar, Title } from "../components";
import ProductComponent from "../components/ProductComponent/Product";
import Filter from "../components/Filter/Filter";
const Shop = () => {
  const [filter, setFilter] = useState([]);
  const [sorter, setSorter] = useState();
  const [filterBrandsName, setFilterBrandsName] = useState(null);
  const [filterCategoriesName, setFilterCategoriesName] = useState(null);
  const [filterPricesValues, setFilterPricesValues] = useState([]);

  const allFilters = {
    filter,
    sorter,
    filterBrandsName,
    filterCategoriesName,
    filterPricesValues,
  };

  const allSetters = {
    setFilter,
    setFilterBrandsName,
    setFilterCategoriesName,
    setFilterPricesValues,
    setSorter,
  };

  return (
    <main className="bg-[#eae0f5]  overflow-hidden">
      <Marquee />
      <Title />
      <Navbar />
      <div className="flex border-y-2 border-red-200 mt-4">
        <Filter allSetters={allSetters} />
        <ProductComponent allFilters={allFilters} />
      </div>
      <Footer />
    </main>
  );
};

export default Shop;
