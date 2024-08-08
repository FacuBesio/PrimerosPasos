import cartIcon from "../../../assets/cart.png";
import { transition_200 } from "../../../styles";

const Cart_button = ({handleButtonCart}) => {
  return (
    <button onClick={handleButtonCart}>
      <img
        src={cartIcon}
        className={`w-[30px] ml-2 hover:scale-95 ${transition_200}`}
        alt="Cart Icon"
      />
    </button>
  );
};

export default Cart_button;
