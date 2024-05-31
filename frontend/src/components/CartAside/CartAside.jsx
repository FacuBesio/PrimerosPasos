/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import putOrder from "../../utils/cart/putOrder";

const CartAside = ({ handleButtonCart }) => {
  const { isAuthenticated } = useAuth0();
  const user = JSON.parse(window.localStorage.getItem("userData"));
  const cart = JSON.parse(window.localStorage.getItem("cart"));
  const [newProductsRefresh, setNewProductsRefresh] = useState(false);

  const handlerRemoveProducts = (product) => {
    const newProducts = cart.products.filter((e) => e.id !== product.id);
    const updatedCart = { ...cart, products: newProducts };
    const order_id = cart.id
    isAuthenticated && user && putOrder(order_id, product);
    window.localStorage.setItem("cart", JSON.stringify(updatedCart));
    setNewProductsRefresh(!newProductsRefresh);
  };

  return (
    <div>
      <div className="fixed left-0 top-0 h-screen w-[100%] bg-black bg-opacity-50 backdrop-blur-sm  transition-all">
        <div>
          <div className="fixed justify-between py-6 items-center  right-0 top-0 h-screen w-[50%] md:w-[20%] bg-white   px-6 text-center flex flex-col gap-12 transition-all overflow-y-scroll ">
            <h2>Carrito de compras</h2>

            {cart.products.map((product) => (
              <div className="" key={product.id}>
                <h3 className="text-black">{product.name}</h3>
                <h3>{product.stock}</h3>
                <h3>{product.price}</h3>
                <h3>{product.cantidad}</h3>
                <img src={product.img} alt="" />
                <button onClick={() => handlerRemoveProducts(product)}>
                  eliminar
                  <img src="" alt="" />
                </button>
              </div>
            ))}

            <button
              className="items-center flex bg-gray-200 w-fit p-2 hover:scale-105 hover:bg-red-200 transition-all duration-200 rounded-xl border border-[#Dbb1bc] text-[#393334]"
              onClick={handleButtonCart}
            >
              Volver al menu
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartAside;