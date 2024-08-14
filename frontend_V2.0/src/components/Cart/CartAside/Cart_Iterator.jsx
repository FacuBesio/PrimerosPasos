import crossRed from "../../../assets/crossRed.png";
import useLoadEffect from "../../../hooks/Effects/useLoadEffect";
import {
  cartIterator_style,
  invisible,
  transition_1000,
  transition_500,
  transition_700,
  visible,
} from "../../../styles";
import Quantities_Button from "../../Buttons/Quantities_Button/Quantities_Button";

const Cart_Iterator = ({
  cart,
  setCart,
  handlerRemoveProducts,

}) => {

  const { loadEffect } = useLoadEffect();
  const content_visibility = loadEffect ? visible : invisible;

  return (
    <div className="flex flex-col w-full h-full gap-2">
      {cart.products.map((product) => (
        <div
          className={`${cartIterator_style} ${content_visibility} ${transition_500}`}
          key={product.id}
        >
          <img
            className="max-w-[120px] rounded-md "
            src={product.img}
            alt={product.name}
          />

          <div className="flex flex-col justify-center items-center p-1 gap-1">
            <h3 className="font-semibold text-black/50">{product.name}</h3>
            <h3 className="text-black/50">Stock: {product.stock}</h3>
            <h3 className="text-black/50">Precio: ${product.price}</h3>

            <Quantities_Button
              product={product}
              cart={cart}
              setCart={setCart}
            />
          </div>

          <button onClick={() => handlerRemoveProducts(product.id)}>
            <img
              className="absolute top-0 right-0 w-4 h-4 mt-2 mr-2 hover:scale-110"
              src={crossRed}
              alt="Delete Button"
            />
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cart_Iterator;
