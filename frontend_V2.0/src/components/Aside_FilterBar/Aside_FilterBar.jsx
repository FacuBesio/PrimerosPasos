import { useState } from "react";
import filterIcon from "../../assets/filter.png";
import Filter from "../../components/Filter/Filter";
import {
  asideFilter_invisible,
  asideFilter_visible,
  asideFilterStyles,
} from "../../styles";
import useLoadEffect from "../../hooks/Effects/useLoadEffect";

const Aside_FilterBar = () => {
  const { loadEffect } = useLoadEffect();
  const [showFilter, setShowFilter] = useState(false);

  const asideFilter_visibility = loadEffect
    ? asideFilter_visible
    : asideFilter_invisible;

  const handlerShowFilter = () => {
    setShowFilter(!showFilter);
  };

  return (
    <div className={`${asideFilterStyles} ${asideFilter_visibility}`}>
      <button
        className="bg-white rounded-full h-fit w-10 p-2 mt-4 hover:scale-105 hover:border-2 border-red-200 cursor-pointer"
        onClick={handlerShowFilter}
      >
        <img className="" src={filterIcon} alt="filter_icon" />
      </button>

      <div
        className={`w-full flex flex-col py-4 transition-all duration-500 ease-in-out transform ${
          showFilter ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <Filter />
      </div>
    </div>
  );
};

export default Aside_FilterBar;
