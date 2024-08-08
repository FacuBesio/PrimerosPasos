import { Link } from "react-router-dom";
import { buttonsCartAside } from "../../styles";

const Cart_Footer = ({ handleBackdropClick }) => {
  return (
    <div className={`flex flex-col justify-end gap-2`}>
      <Link className={buttonsCartAside} to="/cart">
        Realizar compra
      </Link>
      <button className={buttonsCartAside} onClick={handleBackdropClick}>
        Volver al menú
      </button>
    </div>
  );
};

export default Cart_Footer;
