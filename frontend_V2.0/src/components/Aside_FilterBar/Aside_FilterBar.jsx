import { useState } from "react";
import filterIcon from "../../assets/filter.png";
import Filter from "../../components/Filter/Filter";
import {
  asideFilterStyles,
  invisible,
  transition_300,
  transition_500,
  visible,
} from "../../styles";
import useLoadEffect from "../../hooks/Effects/useLoadEffect";

const Aside_FilterBar = () => {
  const { loadEffect } = useLoadEffect();
  const [showFilter, setShowFilter] = useState(false);

  const asideFilter_visibility = loadEffect ? visible : invisible;

  const handlerShowFilter = () => {
    setShowFilter(!showFilter);
  };

  const asideFilter_width = showFilter ? "w-1/6" : "w-10";
  const button_ml = showFilter ? "ml-0" : "ml-10";

  return (
    <div
      className={`${asideFilterStyles} ${asideFilter_width} ${asideFilter_visibility}`}
    >
      <button
        className={`bg-white rounded-full h-fit w-10 p-2 mt-4 hover:scale-105 hover:border-2 border-red-200 cursor-pointer ${transition_500} ${button_ml}`}
        onClick={handlerShowFilter}
      >
        <img className="" src={filterIcon} alt="filter_icon" />
      </button>

      <div
        className={`mt-2 w-full ${transition_300} ${
          showFilter ? "opacity-100 visible" : "opacity-50 invisible"
        }`}
      >
        <Filter />
      </div>
    </div>
  );
};

export default Aside_FilterBar;
