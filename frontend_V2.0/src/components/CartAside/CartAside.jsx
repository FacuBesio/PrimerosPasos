import { useContext } from "react";
import {
  cartAside_Container,
  cartAsideStyle,
  invisible,
  transition_200,
  transition_300,
  visible,
} from "../../styles";
import { CartContext } from "../../context";
import Cart_Iterator from "./Cart_Iterator";
import Cart_Header from "./Cart_Header";
import useCart from "../../hooks/Cart/useCart";
import useLoadEffect_0 from "../../hooks/Effects/useLoadEffect_0";
import useLoadEffect_100 from "../../hooks/Effects/useLoadEffect_100";
import Cart_Footer from "./Cart_Footer";
import useLoadEffect from "../../hooks/Effects/useLoadEffect";

const CartAside = () => {
  const { setIsCartOpen } = useContext(CartContext);
  const { cart, handlerRemoveProducts } = useCart();
  const { loadEffect, setLoadEffect } = useLoadEffect();
  const { loadEffect_0, setLoadEffect_0 } = useLoadEffect_0();
  const { loadEffect_100, setLoadEffect_100 } = useLoadEffect_100();

  const cartAside_visibility = loadEffect_100 ? visible : invisible;
  const content_visibility = loadEffect ? visible : invisible;
  const cartAside_width = loadEffect_0
    ? "w-[80%] sm:w-[70%] md:w-[50%] lg:w-[25%]"
    : "w-0";

  const handleBackdropClick = () => {
    setLoadEffect(false);
    setLoadEffect_0(false);
    setTimeout(() => {
      setLoadEffect_100(false);
    }, 300);
    setTimeout(() => {
      setIsCartOpen(false);
    }, 500);
  };

  return (
    <div
      className={`${cartAside_Container}  ${cartAside_visibility}`}
      onClick={handleBackdropClick}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`${cartAsideStyle} ${cartAside_width}`}
      >
        <div
          className={`flex flex-col items-center justify-between w-full h-full ${transition_200} ${content_visibility}`}
        >
          <Cart_Header cart={cart} />

          <Cart_Iterator
            cart={cart}
            handlerRemoveProducts={handlerRemoveProducts}
          />

          <Cart_Footer handleBackdropClick={handleBackdropClick} />
        </div>
      </div>
    </div>
  );
};

export default CartAside;
