import { useContext, useEffect } from "react";
import AditionalInfo from "../components/AditionalInfo/AditionalInfo";
import Banner from "../components/Banner/Banner";
import PromotedProducts from "../components/PromotedProducts/PromotedProducts";
import { ShopContext } from "../context";
import useCategories from "../hooks/Categories/useCategories";
import useLoadEffect from "../hooks/Effects/useLoadEffect";
import useLoadEffect_0 from "../hooks/Effects/useLoadEffect_0";
import {
  homeStyle,
  home_content_invisible,
  home_content_visible,
  home_position_down,
  home_position_up,
} from "../styles";

const Home = () => {
  // const { areCategoriesLoaded } = useCategories();
  const { loadEffect } = useLoadEffect();
  const { loadEffect_0 } = useLoadEffect_0();
  const { wasShopActive, setWasShopActive } = useContext(ShopContext);

  console.log("wasShopActive: ", wasShopActive);

  useEffect(() => {
    wasShopActive && loadEffect && setWasShopActive(false);
  }, [loadEffect]);

  const home_visibility = loadEffect
    ? home_content_visible
    : home_content_invisible;

  let home_position = "";
  wasShopActive
    ? (home_position = loadEffect_0 ? home_position_up : home_position_down)
    : (home_position = `${home_position_up} + ${home_visibility}`);

  return (
    <section className={`${homeStyle} ${home_position}`}>
      <div className={home_visibility}>
        <Banner />
        <AditionalInfo />
        <PromotedProducts />
      </div>
    </section>
  );
};

export default Home;
