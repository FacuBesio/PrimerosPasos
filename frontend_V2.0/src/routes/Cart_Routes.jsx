import { Route, Routes } from "react-router-dom";
import Shop from "../pages/Shop";
import CartMain from "../components/Cart/CartMain/CartMain";
import {
  invisible,
  position_down,
  position_up,
  transition_200,
  visible,
} from "../styles";
import useLoadEffect from "../hooks/Effects/useLoadEffect";
import useLoadEffect_0 from "../hooks/Effects/useLoadEffect_0";
import { useContext, useEffect } from "react";
import { ShopContext } from "../context";
import CartUserData from "../components/Cart/CartUserData/CartUserData";

const Cart_Routes = () => {
  const { loadEffect } = useLoadEffect();
  const { loadEffect_0 } = useLoadEffect_0();
  const { wasShopActive, setWasShopActive } = useContext(ShopContext);

  const cart_visibility = loadEffect ? visible : invisible;

  let cart_position = "";
  wasShopActive
    ? (cart_position = loadEffect_0 ? position_up : position_down)
    : (cart_position = `${position_up} + ${cart_visibility}`);

  useEffect(() => {
    wasShopActive && loadEffect && setWasShopActive(false);
  }, [loadEffect]);

  return (
    <div
      className={`flex justify-center items-start p-8 border-t-4 border-white ${transition_200} ${cart_position} min-h-screen`}
    >
      <Routes>
        <Route path="/" element={<CartMain />} />
        <Route path="/userdata" element={<CartUserData />} />
        {/* <Route path="/delivery" element={<CartDelivery />} />
      <Route path="/purchase" element={<CartPurchase />} /> */}
      </Routes>
    </div>
  );
};

export default Cart_Routes;
