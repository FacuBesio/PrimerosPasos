import { Link } from "react-router-dom";
import { back_button, cartAside_purchaseButton } from "../../styles";

const Cart_Footer = ({ handleBackdropClick }) => {
  return (
    <div className={`flex flex-col pb-4 gap-2`}>
      <Link className={cartAside_purchaseButton} to="/cart">
        Realizar compra
      </Link>
      <button className={back_button} onClick={handleBackdropClick}>
        Volver
      </button>
    </div>
  );
};

export default Cart_Footer;
