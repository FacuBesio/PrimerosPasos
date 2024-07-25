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
  console.log("areProductsLoaded: ", areProductsLoaded);

  const product_visibility = areProductsLoaded
    ? visible
    : invisible;

  return (
    <div className={`${productsStyle} ${product_visibility}`}>
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
