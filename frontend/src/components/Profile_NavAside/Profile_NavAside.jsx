import { NavLink } from "react-router-dom";
import { Tooltip } from "antd";
import home_icon from "../../assets/home_icon.png";
import user_icon from "../../assets/user_icon.png";
import purchases_icon from "../../assets/purchases_icon.png";

const Profile_NavAside = () => {
  const selected =
    "w-10 h-10 scale-125 transition-transform duration-200 rounded-md p-1 bg-red-300 drop-shadow-md hover:drop-shadow-xl";
  const not_Selected =
    "w-10 h-10 hover:scale-125 transition-transform duration-200 rounded-md p-1 bg-white drop-shadow-md hover:drop-shadow-xl";

  return (
    <section className="w-16 bg-red-200 items-center pt-28">
      <div className="flex flex-col items-center pt-2 text-white gap-5">
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
