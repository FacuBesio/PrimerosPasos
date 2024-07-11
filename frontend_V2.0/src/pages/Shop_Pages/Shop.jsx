import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import Products from "../../components/Products/Products";
import filterIcon from "../../assets/filter.png";
import Aside_FilterBar from "../../components/Aside_FilterBar/Aside_FilterBar";

const Shop = () => {
  const { name } = useParams();

  return (
    <section className="flex border-y-2 border-white mt-4 flex-grow">
      <Aside_FilterBar />
      <Products categoryQuery={name} />
    </section>
  );
};

export default Shop;
