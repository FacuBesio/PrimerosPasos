/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import handlerRemoveProducts from "../../utils/cart/cartAside/handlerRemoveProducts";
import crossRed from "../../assets/crossRed.png";
import { Link } from "react-router-dom";
import ButtonQuantities from "../ButtonQuantities/ButtonQuantities";
import CartIcon from "../../assets/asideCart.png";

const CartAside = ({ handleButtonCart }) => {
  const { isAuthenticated } = useAuth0();
  const user = JSON.parse(window.localStorage.getItem("userData"));
  const [cart, setCart] = useState(() => {
    return JSON.parse(window.localStorage.getItem("cart"));
  });

  useEffect(() => {
    window.localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Manejar el clic en el fondo difuminado
  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      handleButtonCart();
    }
  };

  return (
    <div className="z-[9999]">
      <div
        className="fixed left-0 top-0 h-screen w-[100%] bg-black bg-opacity-50 backdrop-blur-sm transition-all"
        onClick={handleBackdropClick} // Agregar el manejador de clic aquí
      >
        <div
          onClick={(e) => e.stopPropagation()} // Detener la propagación del evento de clic
          className="fixed py-2 items-center right-0 top-0 h-screen w-[80%] sm:w-[70%] md:w-[50%] lg:w-[20%] bg-white px-2 text-center flex flex-col gap-2 transition-all overflow-y-scroll"
        >
          <div className="flex flex-col items-center">
            <div className="relative w-10 h-10 flex items-center justify-center">
              <div className="absolute top-0 right-0 w-5 h-5 bg-pink-200 rounded-full flex items-center justify-center">
                <p>{cart.products.length > 0 ? cart.products.length : "0"}</p>
              </div>
              <img src={CartIcon} className="w-10" />
            </div>
            <h2 className="md:text-xl">Carrito de compras</h2>
          </div>
          {cart.products.map((product) => (
            <div
              className="flex justify-center border border-red-200 p-2 rounded-md m-2 w-full bg-[#D3C4E3]"
              key={product.id}
            >
              <img
                className="max-w-[120px] rounded-full border border-red-200"
                src={product.img}
                alt=""
              />
              <div className="flex flex-col justify-center items-center gap-1">
                <h3 className="text-sm tracking-tighter mb-2">
                  {product.name}
                </h3>
                <h3 className="text-sm">Stock: {product.stock}</h3>
                <h3 className="text-sm">Precio: ${product.price}</h3>

                <ButtonQuantities
                  product={product}
                  cart={cart}
                  setCart={setCart}
                />
              </div>
              <div className="flex">
                <button
                  className="flex w-full"
                  onClick={() =>
                    handlerRemoveProducts(
                      product,
                      cart,
                      setCart,
                      isAuthenticated,
                      user
                    )
                  }
                >
                  <img
                    className="items-start max-w-4 border border-red-200 rounded-md bg-white hover:scale-110"
                    src={crossRed}
                    alt=""
                  />
                </button>
              </div>
            </div>
          ))}
          <div className="flex flex-col justify-end gap-2">
            <Link
              className="items-center flex bg-gray-200 w-fit p-2 hover:scale-105 hover:bg-red-200 transition-all duration-200 rounded-xl border border-[#Dbb1bc] text-[#393334]"
              to="/cart"
            >
              Realizar compra
            </Link>
            <button
              className="items-center w-full flex bg-gray-200 p-2 hover:scale-105 hover:bg-red-200 transition-all duration-200 rounded-xl border border-[#Dbb1bc] text-[#393334]"
              onClick={handleButtonCart}
            >
              Volver al menú
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartAside;
