/* eslint-disable react/prop-types */
import addToCart from "../../utils/cart/addToCart";
import { useAuth0 } from "@auth0/auth0-react";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const ButtonProductDetail = ({ product }) => {
  const { isAuthenticated } = useAuth0();


  const notify = () => toast.success('Agregaste un producto al carrito', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });


  const cantidad = 1;
  const { id, brand, name, price, stock, img } = product;
  const productToAdd = { id, brand, name, price, stock, img, cantidad };

  const handleAddToCartAndNotify = () => {
    addToCart(productToAdd, isAuthenticated);
    notify();
  };

  return (
    <div>
    <button
    onClick={handleAddToCartAndNotify}
      className=" bg-gray-200 w-fit p-1 mt-6 hover:scale-105 hover:bg-red-200 transition-all duration-200 rounded-xl border border-[#Dbb1bc] text-[#393334]"
    >
     Agregar al carrito
     
    </button>
      <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
    />
    </div>
  );
};

export default ButtonProductDetail;
