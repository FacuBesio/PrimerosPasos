import { useAuth0 } from "@auth0/auth0-react";
import { Link, NavLink } from "react-router-dom";
import { back_button, disabled_button, enabled_button } from "../../../styles";

const Buttons_UserData = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  const disabledContinueButton = true;
  return (
    <div className={`flex flex-col gap-2`}>
      {disabledContinueButton ? (
        <button
          // onClick={handlerDisabledButton}
          className={disabled_button}
        >
          Completar datos para continuar
        </button>
      ) : (
        <NavLink to="/cart/delivery" className={enabled_button}>
          Continuar
        </NavLink>
      )}

      <Link className={back_button} to={"/shop"}>
        Agregar más productos
      </Link>
    </div>
  );
};

export default Buttons_UserData;
