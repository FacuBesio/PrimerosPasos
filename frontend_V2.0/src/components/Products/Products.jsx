import useProducts from "../../hooks/Products/useProducts";
import {
  productsStyle,
  invisible,
  visible,
} from "../../styles";
import Products_Iterator from "./Products_Iterator";
import Products_NoResult from "./Products_NoResult";

const Products = () => {
  const { allProducts, areProductsLoaded } = useProducts();
  console.log("allProducts: ", allProducts);

  const products_visibility = areProductsLoaded
    ? visible
    : invisible;

  return (
    <div className={`${productsStyle} ${products_visibility}`}>
      {areProductsLoaded && allProducts.totalResults > 0 && (
        <Products_Iterator allProducts={allProducts} />
      )}

      {areProductsLoaded && allProducts.totalResults === 0 && (
        <Products_NoResult />
      )}
    </div>
  );
};

export default Products;
