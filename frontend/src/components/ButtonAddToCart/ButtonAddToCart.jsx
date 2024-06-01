/* eslint-disable react/prop-types */
import addToCart from "../../utils/cart/addToCart";
import { useAuth0 } from "@auth0/auth0-react";
import cartFill from "../../assets/cartFill.png"

const Button = ({ product }) => {
  const { isAuthenticated } = useAuth0();



  const cantidad = 1;
  const { id, brand, name, price, stock, img } = product;
  const productToAdd = { id, brand, name, price, stock, img, cantidad };

  const handleAddToCart = () => {
    addToCart(productToAdd, isAuthenticated)
  };

  return (
    <button
      onClick={handleAddToCart}
      className="absolute top-[-25px] right-1 bg-gray-200 w-fit p-1 mt-6 hover:scale-105 hover:bg-red-200 transition-all duration-200 rounded-xl border border-[#Dbb1bc] text-[#393334]"
    >
      <img className="w-6 h-6" src={cartFill} alt="" />
     
    </button>
  );
};

export default Button;
