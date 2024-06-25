import React, { useContext } from "react";
import Paginated from "../Paginated/Paginated.jsx";
import SortComponent from "../SortComponent/SortComponent.jsx";
import Filter from "../Filter/Filter.jsx";
import Loader from "../Loader/Loader.jsx";
import { PagesContext, ProductsContext } from "../../context/index.js";
import Tags from "../Tags/Tags.jsx";
import Products_Iterator from "../Products_Iterator/Products_Iterator.jsx";

const ProductComponent = ({ loaderStates }) => {
  const { allProducts } = useContext(ProductsContext);
  const { page, setPage } = useContext(PagesContext);
  const { loading, delayLoading } = loaderStates;

  if (loading || delayLoading) {
    return <Loader delayLoading={delayLoading} />;
  }

  return (
    <section className="w-full">
      <div className="flex w-full p-4 md:gap-4 items-center justify-between overflow-x-auto">
        <Filter />
        <Tags />
        <SortComponent />
      </div>
      <Products_Iterator />
      <Paginated
        page={page}
        setPage={setPage}
        totalPages={allProducts?.totalPages}
      />
    </section>
  );
};

export default React.memo(ProductComponent);
