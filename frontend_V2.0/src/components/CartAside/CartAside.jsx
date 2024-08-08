import { useContext } from "react";
import {
  cartAside_Container,
  cartAsideStyle,
  invisible,
  visible,
} from "../../styles";
import { CartContext } from "../../context";
import Cart_Iterator from "./Cart_Iterator";
import Cart_Header from "./Cart_Header";
import useCart from "../../hooks/Cart/useCart";
import useLoadEffect_100 from "../../hooks/Effects/useLoadEffect_100";
import Cart_Footer from "./Cart_Footer";

const CartAside = () => {
  const { setIsCartOpen } = useContext(CartContext);
  const { cart, handlerRemoveProducts } = useCart();
  const { loadEffect_100 } = useLoadEffect_100();


  const cartAside_visibility = loadEffect_100 ? visible : invisible;
  const cartAside_width = loadEffect_100 ? "w-[80%] sm:w-[70%] md:w-[50%] lg:w-[25%]" : "w-0";

  const handleBackdropClick = () => {
    setIsCartOpen(false);
  };

  return (
    <div
      className={`${cartAside_Container} ${cartAside_visibility}`}
      onClick={handleBackdropClick}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`${cartAsideStyle} ${cartAside_width}`}
      >
        <Cart_Header cart={cart} />

        <Cart_Iterator
          cart={cart}
          handlerRemoveProducts={handlerRemoveProducts}
        />

        <Cart_Footer handleBackdropClick={handleBackdropClick} />
      </div>
    </div>
  );
};

export default CartAside;
