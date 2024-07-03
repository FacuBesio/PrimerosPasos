import React, { useContext, useState, useRef } from "react";
import Paginated from "../Paginated/Paginated.jsx";
import SortComponent from "../SortComponent/SortComponent.jsx";
import Filter from "../Filter/Filter.jsx";
import Loader from "../Loader/Loader.jsx";
import { FlagCartEffectContext, PagesContext, ProductsContext } from "../../context/index.js";
import Tags from "../Tags/Tags.jsx";
import Products_Iterator from "../Products_Iterator/Products_Iterator.jsx";
import filter from "../../assets/filter.png";

const ProductComponent = ({ loaderStates }) => {
  const { allProducts } = useContext(ProductsContext);
  const { page, setPage } = useContext(PagesContext);
  const { loading, delayLoading } = loaderStates;
  const { flagFilter, setFlagFilter } = useContext(FlagCartEffectContext);
  const filterOpenRef = useRef(false); 

  if (loading || delayLoading) {
    return <Loader delayLoading={delayLoading} />;
  }

  const handlerFilterActive = () => {
    filterOpenRef.current = !filterOpenRef.current;
    setFlagFilter(!flagFilter);
  };

  return (
    <section className="w-full ">
      <section className="flex  ">
        <div className="flex items-center  flex-col pl-2   ">
          <div
            onClick={handlerFilterActive}
            className="bg-white    rounded-full h-fit w-10 p-2 mt-4 hover:scale-105 hover:border-2 border-red-200 cursor-pointer"
          >
            <img className="" src={filter} alt="filter" />
          </div>
          <div
            className={`flex-col  py-4 max-w-[96px] transition-all duration-500 ease-in-out transform ${
              filterOpenRef.current ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
          >
            <Filter />
            <Tags />
            <SortComponent />
          </div>
        </div>
        <Products_Iterator />
      </section>
      <Paginated
        page={page}
        setPage={setPage}
        totalPages={allProducts?.totalPages}
      />
    </section>
  );
};

export default React.memo(ProductComponent);
