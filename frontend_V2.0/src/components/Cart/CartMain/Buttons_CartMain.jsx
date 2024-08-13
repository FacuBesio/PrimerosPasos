import { useAuth0 } from "@auth0/auth0-react";
import { Link, NavLink } from "react-router-dom";
import { back_button, enabled_button } from "../../../styles";

const Buttons_CartMain = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  return (
    <div className={`flex flex-col gap-2`}>
      {isAuthenticated ? (
        <NavLink
          to="/cart/userdata"
          className={enabled_button}>
          Comprar
        </NavLink>
      ) : (
        <button
          onClick={loginWithRedirect}
          className="px-8 py-3 text-[12px] md:text-[18px] bg-stone-300 bg-opacity-90 text-white font-bold rounded-md hover:bg-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400"
        >
          Iniciar sesión para comprar
        </button>
      )}

      <Link className={back_button} to={"/shop"}>
        Agregar más productos
      </Link>
    </div>
  );
};

export default Buttons_CartMain;
