import {
  cartAside_Container,
  cartAsideStyle,
  transition_100,
  transition_150,
  transition_200,
  transition_500,
} from "../../../styles";
import Cart_Iterator from "./Cart_Iterator";
import Cart_Header from "./Cart_Header";
import useCart from "../../../hooks/Cart/useCart";
import Cart_Footer from "./Cart_Footer";
import useCartEffects from "../../../hooks/Cart/useCartEffects";

const CartAside = () => {
  const { cart, setCart, handlerRemoveProducts } = useCart();
  const {
    blur_efffect,
    cartAside_width,
    content_visibility,
    handleBackdropClick
  } = useCartEffects();

  console.log("cart: ", cart);

  return (
    <div
      className={`${cartAside_Container} ${transition_100} ${blur_efffect}`}
      onClick={handleBackdropClick}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`${cartAsideStyle} ${cartAside_width} ${transition_500}`}
      >
        <div
          className={`flex flex-col items-center justify-between gap-4 w-full h-full ${transition_150} ${content_visibility}`}
        >
          <div className="flex flex-col items-center justify-start p-2 gap-4 w-full h-fit">
            <Cart_Header cart={cart} />

            <Cart_Iterator
              cart={cart}
              setCart={setCart}
              handlerRemoveProducts={handlerRemoveProducts}
              content_visibility={content_visibility}
            />
          </div>

          <Cart_Footer handleBackdropClick={handleBackdropClick} />
        </div>
      </div>
    </div>
  );
};

export default CartAside;
