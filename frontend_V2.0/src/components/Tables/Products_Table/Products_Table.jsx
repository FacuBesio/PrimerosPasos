import Products_NoResult from "../../Products/Products_NoResult";
import Table_Head from "./Table_Head";
import Table_Products_Iterator from "./Table_Products_Iterator";
import useProducts from "../../../hooks/Products/useProducts";
import { invisible, transition_200, visible } from "../../../styles";
import useLoadEffect from "../../../hooks/Effects/useLoadEffect";
import Table_Products_NoResult from "./Table_Products_NoResult";

const Products_Table = () => {
  const { loadEffect } = useLoadEffect();
  const { allProducts, areProductsLoaded } = useProducts();
  const product_visibility = loadEffect ? visible : invisible;
  const productBody_visibility = areProductsLoaded ? visible : invisible;

  return (
    <div
      className={`overflow-x-auto w-full  ${transition_200} ${product_visibility}`}
    >
      <table className="w-full border border-collapse bg-white table-fixed">
        <thead>
          <Table_Head />
        </thead>
        <tbody className={`text-center ${transition_200} ${productBody_visibility} `}>
          {areProductsLoaded && allProducts.totalResults > 0 && (
            <Table_Products_Iterator allProducts={allProducts} />
          )}

          {areProductsLoaded && allProducts.totalResults === 0 && (
            <Table_Products_NoResult />
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Products_Table;
