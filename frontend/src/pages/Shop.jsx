import React, { useEffect, useState } from "react";
import { Footer, Marquee, Navbar, Title } from "../components";
import ProductComponent from "../components/ProductComponent/Product";
import Filter from "../components/Filter/Filter";
const Shop = () => {
  const [filter, setFilter] = useState([]);

  useEffect(() => {}, []);

  return (
    <main className="bg-[#eae0f5]  overflow-hidden">
      <Marquee />
      <Title />
      <Navbar />
      <div className="flex border-y-2 border-red-200 mt-4">
        <Filter setFilter={setFilter} />
        <ProductComponent filter={filter} />
      </div>
      <Footer />
    </main>
  );
};

export default Shop;
