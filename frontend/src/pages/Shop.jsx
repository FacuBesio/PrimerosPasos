import React, { useEffect, useState } from "react";
import { Footer, Marquee, Navbar, Title } from "../components";
import ProductComponent from "../components/ProductComponent/Product";
import Filter from "../components/Filter/Filter";
const Shop = () => {
  const [filter, setFilter] = useState([]);
  const [filterCategoriesName, setFilterCategoriesName] = useState(null);
  const [filterBrandsName, setFilterBrandsName] = useState(null);


  return (
    <main className="bg-[#eae0f5]  overflow-hidden">
      <Marquee />
      <Title />
      <Navbar />
      <div className="flex border-y-2 border-red-200 mt-4">
        <Filter
          setFilter={setFilter}
          setFilterCategoriesName={setFilterCategoriesName}
          setFilterBrandsName={setFilterBrandsName}
        />
        <ProductComponent
          filter={filter}
          filterBrandsName={filterBrandsName}
          filterCategoriesName={filterCategoriesName}
        />
      </div>
     
      <Footer />
    </main>
  );
};

export default Shop;
