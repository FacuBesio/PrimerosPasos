import { useState } from "react";
import filterIcon from "../../assets/filter.png";
import Filter from "../../components/Filter/Filter";

const Aside_FilterBar = () => {
  const [visibleFilter, setVisibleFiter] = useState(false);

  const handlerShowFilter = () => {
    setVisibleFiter(!visibleFilter);
  };

  return (
    <div className="flex items-center flex-col w-1/12 p-4 transition-all duration-500 ease-in-out ">
      <button
        className="bg-white rounded-full h-fit w-10 p-2 mt-2 hover:scale-105 hover:border-2 border-red-200 cursor-pointer"
        onClick={handlerShowFilter}
      >
        <img className="" src={filterIcon} alt="filter_icon" />
      </button>

      <div
        className={`w-full flex flex-col py-4 transition-all duration-500 ease-in-out transform ${
          visibleFilter ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <Filter />
        {/* <Tags />
        <SortComponent /> */}
      </div>
    </div>
  );
};

export default Aside_FilterBar;
