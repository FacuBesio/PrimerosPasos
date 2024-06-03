/* eslint-disable react/prop-types */
import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import putOrder from "../../utils/cart/putOrder";
import crossRed from "../../assets/crossRed.png";
import { Link } from "react-router-dom";
import addToCart from "../../utils/cart/addToCart";
import subtractToCart from "../../utils/cart/subtractToCart";

const CartAside = ({ handleButtonCart }) => {
  const { isAuthenticated } = useAuth0();
  const user = JSON.parse(window.localStorage.getItem("userData"));
  const cart = JSON.parse(window.localStorage.getItem("cart"));
  const [newProductsRefresh, setNewProductsRefresh] = useState(false);

  const incrementQuantity = (product) => {
    addToCart(product, isAuthenticated);
    setNewProductsRefresh(!newProductsRefresh);
  };

  const decrementQuantity = (product) => {
    subtractToCart(product, isAuthenticated);
    setNewProductsRefresh(!newProductsRefresh);
  };

  const handlerRemoveProducts = (product) => {
    const newProducts = cart.products.filter((e) => e.id !== product.id);
    const updatedCart = { ...cart, products: newProducts };
    const order_id = cart.id;
    isAuthenticated && user && putOrder(order_id, product);
    window.localStorage.setItem("cart", JSON.stringify(updatedCart));
    setNewProductsRefresh(!newProductsRefresh);
  };

  return (
    <div className="z-[9999] ">
      <div className="fixed left-0 top-0 h-screen w-[100%] bg-black bg-opacity-50 backdrop-blur-sm  transition-all">
        <div>
          <div className="fixed justify-around py-2 items-center  right-0 top-0 h-screen w-[80%] sm:w-[70%] md:w-[50%] lg:w-[20%] bg-white   px-2 text-center flex flex-col gap-2 transition-all overflow-y-scroll ">
            <h2 className=" md:text-xl">Carrito de compras</h2>

            {cart.products.map((product) => (
              <div
                className="flex  justify-center border border-red-200 p-2 rounded-md m-2 w-full bg-[#D3C4E3] "
                key={product.id}
              >
                <img
                  className="max-w-[120px] rounded-full border border-red-200 "
                  src={product.img}
                  alt=""
                />

                <div className="flex flex-col  justify-center items-center gap-1 ">
                  <h3 className="text-sm tracking-tighter mb-2 ">
                    {product.name}
                  </h3>
                  <h3 className="text-sm">Stock: {product.stock}</h3>
                  <h3 className="text-sm">Precio: ${product.price}</h3>
                  <div className="flex items-center">
                    <button
                      onClick={() => decrementQuantity(product)}
                      className="px-2 py-1 bg-red-200 rounded-md"
                    >
                      -
                    </button>
                    <h3 className="text-sm mx-2">
                      Cantidad: {product.cantidad}
                    </h3>
                    <button
                      onClick={() => incrementQuantity(product)}
                      className="px-2 py-1 bg-green-200 rounded-md"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="flex  ">
                  <button
                    className="flex w-full"
                    onClick={() => handlerRemoveProducts(product)}
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
            <div className="flex flex-col gap-2 ">
              <Link
                className="items-center flex bg-gray-200 w-fit p-2 hover:scale-105 hover:bg-red-200 transition-all duration-200 rounded-xl border border-[#Dbb1bc] text-[#393334]"
                to="/cart"
              >
                Realizar compra
              </Link>
              <button
                className="items-center w-full flex bg-gray-200  p-2 hover:scale-105 hover:bg-red-200 transition-all duration-200 rounded-xl border border-[#Dbb1bc] text-[#393334]"
                onClick={handleButtonCart}
              >
                Volver al menu
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartAside;
