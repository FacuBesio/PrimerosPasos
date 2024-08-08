import addToCart from "../../../utils/cart/addToCart";
import { useAuth0 } from "@auth0/auth0-react";
import cartFill from "../../../assets/cartFill.png";

import { transition_200 } from "../../../styles";

const Button = ({ product }) => {
  const { isAuthenticated } = useAuth0();

  const cantidad = 1;
  const { id, brand, name, price, stock, img } = product;
  const productToAdd = { id, brand, name, price, stock, img, cantidad };

  const handleAddToCart = () => {
    addToCart(productToAdd, isAuthenticated);
  };

  return (
    <div>
      <button
        onClick={handleAddToCart}
        className={`absolute right-1 bg-white w-fit p-1 mt-3 mr-2 hover:scale-110 hover:bg-red-100 rounded-lg text-[#393334] ${transition_200}`}
      >
        <img className="w-8 h-8" src={cartFill} alt="" />
      </button>
    </div>
  );
};

export default Button;
