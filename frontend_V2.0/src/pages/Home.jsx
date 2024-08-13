import { useContext, useEffect } from "react";
import AditionalInfo from "../components/AditionalInfo/AditionalInfo";
import Banner from "../components/Banner/Banner";
import PromotedProducts from "../components/PromotedProducts/PromotedProducts";
import { ShopContext } from "../context";
import useLoadEffect from "../hooks/Effects/useLoadEffect";
import useLoadEffect_0 from "../hooks/Effects/useLoadEffect_0";
import {
  homeStyle,
  invisible,
  position_down,
  position_up,
  visible,
} from "../styles";
import useResetStates from "../hooks/Generals/useResetStates";

const Home = () => {
  useResetStates();
  const { loadEffect } = useLoadEffect();
  const { loadEffect_0 } = useLoadEffect_0();
  const { wasShopActive, setWasShopActive } = useContext(ShopContext);

  const home_visibility = loadEffect ? visible : invisible;
  let home_position = "";
  wasShopActive
    ? (home_position = loadEffect_0 ? position_up : position_down)
    : (home_position = `${position_up} + ${home_visibility}`);

  useEffect(() => {
    wasShopActive && loadEffect && setWasShopActive(false);
  }, [loadEffect]);

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
