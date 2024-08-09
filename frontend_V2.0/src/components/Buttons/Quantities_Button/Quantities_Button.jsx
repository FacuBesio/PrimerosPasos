import { useAuth0 } from "@auth0/auth0-react";
// import addToCart from "../../utils/cart/addToCart";
// import subtractToCart from "../../utils/cart/subtractToCart";

const Quantities_Button = ({ product, cart, setCart}) => {
  const { isAuthenticated } = useAuth0();

  // const incrementQuantity = (product) => {
  //   const updatedProducts = addToCart(product, isAuthenticated);
  //   setCart({ ...cart, products: updatedProducts });
  // };

  // const decrementQuantity = (product) => {
  //   const updatedProducts = subtractToCart(product, isAuthenticated);
  //   setCart({ ...cart, products: updatedProducts });
  // };

  return (
    <div className="h-full">
      <div className="flex justify-end md:justify-center items-center  ">
        <button
          // onClick={() => decrementQuantity(product)}
          className="px-2 bg-red-200 bg-opacity-75 rounded-md"
        >
          -
        </button>
        <h3 className="text-sm mx-2">{product.cantidad}</h3>
        <button
          // onClick={() => incrementQuantity(product)}
          className="px-2 bg-slate-400/50 rounded-md"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Quantities_Button;