import React, { useContext, useState, useRef, useEffect } from "react";
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
  const filterOpenRef = useRef(flagFilter); // Inicializar con el valor de flagFilter

  useEffect(() => {
    
    filterOpenRef.current = flagFilter;
  }, [flagFilter]);

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
        <div className="flex items-center   flex-col pl-2    ">
          <div
            onClick={handlerFilterActive}
            className={`${flagFilter == true ? "w-[146px] md:w-[220px]" : "w-8"} border border-gray opacity-70 transition-all duration-500 ease-in-out transform rounded-r-md fixed flex justify-center items-center  top-1/3 left-0 bg-red-200 h-[460px] md:h-[560px] z-50 `}
          >
            <img className={`${flagFilter == true ? "opacity-0" : "opacity-100"} transition-all duration-500 ease-in-out transform  absolute left-4 h-[44px] w-fit hover:scale-110 cursor-pointer border-red-200 border bg-white rounded-full `} src={filter} alt="filter" />
          </div>
         
          <div
            className={`fixed top-1/3 left-0 md:left-4 z-50 py-4 max-w-[190px] pl-4 md:pl-0   transition-all duration-500 ease-in-out transform  ${
              filterOpenRef.current ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
          >
            <h2 className="text-center text-[18px] text-gray-600">Filtros</h2>
            <Filter className="" />
            <Tags className=" " />
            <SortComponent  className=""/>
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
