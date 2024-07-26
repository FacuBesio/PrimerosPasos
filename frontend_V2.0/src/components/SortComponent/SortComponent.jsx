/* eslint-disable react/prop-types */
import { useContext } from "react";
import { SortContext } from "../../context/index.js";
import Order_Price_Selector from "./Sorter_Selectors/Order_Price_Selector.jsx";
import Order_Rating_Selector from "./Sorter_Selectors/Order_Rating_Selector.jsx";
import useLoadEffect from "../../hooks/Effects/useLoadEffect.js";

const SortComponent = () => {
  const { sorter, setSorter } = useContext(SortContext);
  const { loadEffect } = useLoadEffect();

  const sorter_visibility = loadEffect ? "opacity-100 visible" : "opacity-0 invisible";

  const handlerChange = (event) => {
    const property = event.target.name;
    let value = event.target.value;
    setSorter({ ...sorter, [property]: value });
  };

  return (
    <div className={`flex gap-4 ${sorter_visibility}`}>
      <Order_Price_Selector handlerChange={handlerChange} />
      <Order_Rating_Selector handlerChange={handlerChange} />
    </div>
  );
};

export default SortComponent;
