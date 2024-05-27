import React, { useContext, useEffect, useState, CSSProperties } from "react";
import Paginated from "../Paginated/Paginated";
import SortComponent from "../SortComponent/SortComponent.jsx";
import sorterValidator from "../../utils/sorter/sorterValidator.js";
import Filter from "../Filter/Filter.jsx";
import { AppContext } from "../../context/context.jsx";
import ClipLoader from "react-spinners/ClipLoader";
import Loader from "../Loader/Loader.jsx";

const ProductComponent = ({ appLocalStates, loaderStates }) => {
  const { state, setState } = useContext(AppContext);
  const { allProducts, categoryTag } = state;
  const { allBrands, page, setPage } = appLocalStates;
  const { loading, delayLoading } = loaderStates;
  const [sorterByPrice, setSorterByPrice] = useState("");
  const [sorterByRating, setSorterByRating] = useState("");
  const [brandsTag, setBrandsTag] = useState(null);
  const [pricesTag, setPricesTag] = useState([]);
  const allTagsSetters = { setBrandsTag, setPricesTag };

  const onChangeSorterPrice = (event) => {
    setSorterByPrice(event.target.value);
  };

  const onChangeSorterRating = (event) => {
    setSorterByRating(event.target.value);
  };

  const sortComponentProps = {
    sorterByPrice,
    onChangeSorterPrice,
    sorterByRating,
    onChangeSorterRating,
  };

  useEffect(() => {
    const sorterQuery = sorterValidator(sorterByPrice, sorterByRating);
    sorterQuery.sorterActive &&
      setState((prevState) => ({ ...prevState, sorter: sorterQuery.result }));
  }, [sorterByPrice, sorterByRating]);

  const productsAvailable = allProducts?.products?.length > 0;

  if (loading || delayLoading) {
    return <Loader delayLoading={delayLoading} />;
  }

  return (
    <section className="w-full ">
      <Filter allTagsSetters={allTagsSetters} allBrands={allBrands} />
      <div className="flex w-full justify-end py-2">
        {categoryTag && (
          <h2 className="border-2 bg-white border-red-200 w-fit p-1 text-sm rounded-md m-1 ">
            {categoryTag}
          </h2>
        )}

        {brandsTag && (
          <h2 className="border-2 bg-white border-red-200 w-fit p-1 text-sm rounded-md m-1 ">
            {brandsTag}
          </h2>
        )}

        {pricesTag.length === 2 && pricesTag[1] > 0 && (
          <h2 className="border-2 bg-white border-red-200 w-fit p-1 text-sm rounded-md m-1">
            {pricesTag.join(" - ")}
          </h2>
        )}

        <SortComponent sortComponentProps={sortComponentProps} />
      </div>
      {productsAvailable ? (
        <div className="right-side p-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {allProducts.products.map((product) => (
            <a
              href={`/productDetail/${product.id}`}
              key={product.id}
              className="bg-white rounded-lg flex flex-col items-center hover:shadow-2xl hover:shadow-[#d2afb8] ease-in duration-200"
            >
              <img
                className="object-contain rounded-lg h-full p-2"
                src={product.img}
                alt={product.name}
              />
              <div className="text-center">
                <h2 className="font-bold text-gray-400 text-[16px] md:text-[18px] lg:text-[22px] px-2">
                  {product.name}
                </h2>
                <h2 className="text-gray-800 text-[16px] md:text-[18px] lg:text-[20px] py-2">
                  ${product.price}
                </h2>
                <h2 className="text-gray-400 text-[16px] md:text-[18px] lg:text-[20px] pb-2">
                  Stock: {product.stock}
                </h2>
              </div>
            </a>
          ))}
        </div>
      ) : (
        <div className="text-center md:h-screen  py-4">
          <h2 className="text-gray-800 text-[18px] md:text-[20px] lg:text-[22px]">
            No se encuentran productos disponibles.
          </h2>
        </div>
      )}

      <Paginated
        page={page}
        setPage={setPage}
        totalPages={allProducts?.totalPages}
      />
    </section>
  );
};

export default ProductComponent;
