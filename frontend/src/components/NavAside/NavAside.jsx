import { NavLink } from "react-router-dom";
import home_icon from "../../assets/home_icon.png";

const NavAside = () => {
  return (
    <section className="left_section flex flex-col items-center w-1/12 font-bold bg-red-200">
      <div className="w-full h-28">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "px-4 py-6 bg-red-300 w-full text-white text-center"
              : "flex flex-col items-center justify-center px-4 py-7 hover:bg-red-300 w-full h-full text-center"
          }
        >
          <button>
            <img src={home_icon} alt="Home" className="w-12 h-12" />
          </button>
        </NavLink>
      </div>
      <div className="flex flex-col items-center text-white font-bold">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive
              ? "px-4 py-6 bg-red-300 w-full text-white text-center"
              : "px-4 py-6 hover:bg-red-300 w-full text-center"
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/admin/manageCategories"
          className={({ isActive }) =>
            isActive
              ? "px-4 py-6 bg-red-300 w-full text-white text-center"
              : "px-4 py-6 hover:bg-red-300 w-full text-center"
          }
        >
          Categorías
        </NavLink>

        <NavLink
          to="/admin/manageShopping"
          className={({ isActive }) =>
            isActive
              ? "bg-red-400 text-center"
              : "px-4 py-6 hover:bg-red-300 w-full text-center"
          }
        >
          Compras
        </NavLink>

        <NavLink
          to="/admin/manageProducts"
          className={({ isActive }) =>
            isActive
              ? "px-4 py-6 bg-red-300 w-full text-white text-center"
              : "px-4 py-6 hover:bg-red-300 w-full text-center"
          }
        >
          Productos
        </NavLink>

        <NavLink
          to="/admin/manageSubcategories"
          className={({ isActive }) =>
            isActive
              ? "px-4 py-6 bg-red-300 w-full text-white text-center"
              : "px-4 py-6 hover:bg-red-300 w-full text-center"
          }
        >
          Subcategorías
        </NavLink>

        <NavLink
          to="/admin/manageUsers"
          className={({ isActive }) =>
            isActive
              ? "px-4 py-6 bg-red-300 w-full text-white text-center"
              : "px-4 py-6 hover:bg-red-300 w-full text-center"
          }
        >
          Usuarios
        </NavLink>
      </div>
    </section>
  );
};

export default NavAside;
