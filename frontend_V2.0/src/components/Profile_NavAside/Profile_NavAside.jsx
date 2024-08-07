import { NavLink } from "react-router-dom";
import { Tooltip } from "antd";
import home_icon from "../../assets/home_icon.png";
import user_icon from "../../assets/user_icon.png";
import purchases_icon from "../../assets/purchases_icon.png";
import useLoadEffect from "../../hooks/Effects/useLoadEffect";
import {
  invisible,
  not_Selected,
  selected,
  transition_200,
  visible,
} from "../../styles";

const Profile_NavAside = () => {
  const { loadEffect } = useLoadEffect();
  const navAside_visibility = loadEffect ? visible : invisible;

  return (
    <section
      className={`w-16 bg-red-200 min-h-screen items-center pt-4 ${transition_200} ${navAside_visibility}`}
    >
      <div className="flex flex-col items-center text-white gap-5">
        <Tooltip title="Inicio" placement="right">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? selected : not_Selected)}
          >
            <button>
              <img src={home_icon} alt="Home" />
            </button>
          </NavLink>
        </Tooltip>

        <Tooltip title="Perfil Usuario" placement="right">
          <NavLink
            to="/profile/personalInfo"
            className={({ isActive }) => (isActive ? selected : not_Selected)}
          >
            <img src={user_icon} alt="Perfil Usuario" />
          </NavLink>
        </Tooltip>

        <Tooltip title="Mis Compras" placement="right">
          <NavLink
            to="/profile/personalPurchases"
            className={({ isActive }) => (isActive ? selected : not_Selected)}
          >
            <img src={purchases_icon} alt="Mis Compras" />
          </NavLink>
        </Tooltip>
      </div>
    </section>
  );
};

export default Profile_NavAside;
