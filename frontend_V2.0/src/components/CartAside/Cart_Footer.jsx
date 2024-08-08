import { Link } from "react-router-dom";
import { buttonsCartAside, invisible, transition_200, visible } from "../../styles";
import useLoadEffect from "../../hooks/Effects/useLoadEffect";

const Cart_Footer = ({handleBackdropClick}) => {
  const { loadEffect } = useLoadEffect();
  const visibility = loadEffect ? visible : invisible;
  return (
    <div className={`flex flex-col justify-end gap-2 ${transition_200} ${visibility}`}>
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
