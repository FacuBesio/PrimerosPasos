import Products_NoResult from "../../Products/Products_NoResult";
import Table_Head from "./Table_Head";
import Table_Products_Iterator from "./Table_Products_Iterator";
import useProducts from "../../../hooks/Products/useProducts";
import { invisible, transition_200, visible } from "../../../styles";

const Products_Table = () => {
  const { allProducts, areProductsLoaded } = useProducts();
  const product_visibility = areProductsLoaded ? visible : invisible;

  return (
    <div
      className={`overflow-x-auto w-full ${transition_200} ${product_visibility}`}
    >
      <table className="w-full border border-collapse bg-white">
        <thead>
          <Table_Head />
        </thead>
        <tbody className="text-center ">
          {areProductsLoaded && allProducts.totalResults > 0 && (
            <Table_Products_Iterator allProducts={allProducts} />
          )}

          {areProductsLoaded && allProducts.totalResults === 0 && (
            <Products_NoResult />
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Products_Table;
