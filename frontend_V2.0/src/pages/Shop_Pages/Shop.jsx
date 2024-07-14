import { useParams } from "react-router-dom";
import Products from "../../components/Products/Products";
import Aside_FilterBar from "../../components/Aside_FilterBar/Aside_FilterBar";
import { shop_invisible, shop_visible, shopStyle } from "../../styles";
import useProducts from "../../hooks/Products/useProducts";
import useLoadEffect from "../../hooks/Effects/useLoadEffect";

const Shop = () => {
  // const { name } = useParams();
  const { loadEffect } = useLoadEffect();

  const shop_visibility = loadEffect
  ? shop_visible
  : shop_invisible;

  return (
    <section className={`${shopStyle}`}>
      <Aside_FilterBar />
      <Products />
    </section>
  );
};

export default Shop;
