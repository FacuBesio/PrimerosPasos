import { useState } from "react";
import filterIcon from "../../assets/filter.png";
import Filter from "../../components/Filter/Filter";
import {
  asideFilter_invisible,
  asideFilter_visible,
  asideFilterStyles,
} from "../../styles";
import useProducts from "../../hooks/Products/useProducts";
import useLoadEffect from "../../hooks/Effects/useLoadEffect";
import useLoadEffect_0 from "../../hooks/Effects/useLoadEffect_0";

const Aside_FilterBar = () => {
  const { loadEffect } = useLoadEffect();

  const [showFilter, setShowFilter] = useState(false);

  const asideFilter_visibility = loadEffect
    ? asideFilter_visible
    : asideFilter_invisible;

  const handlerShowFilter = () => {
    setShowFilter(!showFilter);
  };

  const asideFilter_width = showFilter ? "w-1/6" : "w-10";
  // const asideFilter_width_0 = showFilter ? "w-1/6" : "w-0";
  const button_ml = showFilter ? "ml-0" : "ml-10";

  return (
    <div className={`${asideFilterStyles} ${asideFilter_width}`}>
      <div className={` ${asideFilter_visibility}`}>
        <button
          className={`bg-white rounded-full h-fit w-10 p-2 mt-4 hover:scale-105 hover:border-2 border-red-200 cursor-pointer ${button_ml} transition-all duration-500 ease-in-out transform`}
          onClick={handlerShowFilter}
        >
          <img className="" src={filterIcon} alt="filter_icon" />
        </button>

        <div
          className={`mt-2 transition-all duration-300 ease-in-out transform w-full ${
            showFilter ? "opacity-100 visible" : "opacity-50 invisible"
          }`}
        >
          <Filter />
        </div>
      </div>
    </div>
  );
};

export default Aside_FilterBar;
