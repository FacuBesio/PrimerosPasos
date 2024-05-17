import React, { useEffect, useState } from "react";
import { Footer, Marquee, Navbar, Title } from "../components";
import ProductComponent from "../components/ProductComponent/Product";
import CategoryFilter from "../components/CategoryFilter/CategoryFilter";
import getCategories from "../utils/categories/getCategories";
import getBrands from "../utils/brands/getBrands";
const Shop = () => {
  const [allCategories, setAllCategories] = useState(null);
  const [allBrands, setAllBrands] = useState(null);

  const [filter, setFilter] = useState([]);

  console.log(filter);

  useEffect(() => {
    getCategories(setAllCategories);
    getBrands(setAllBrands);
  }, []);

  return (
    <main className="bg-[#eae0f5]  overflow-hidden">
      <Marquee />
      <Title />
      <Navbar />
      <div className="flex border-y-2 border-red-200 mt-4">
        <CategoryFilter
          setFilter={setFilter}
          allBrands={allBrands}
          allCategories={allCategories}
        />
        <ProductComponent filter={filter} />
      </div>
      <Footer />
    </main>
  );
};

export default Shop;
