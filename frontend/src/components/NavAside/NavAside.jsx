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
              ? "px-4 py-6 bg-red-300 w-full text-white text-center  transition-transform duration-300 transition-transform duration-300 scale-105 rounded-md"
              : "flex flex-col items-center justify-center px-4 py-7 hover:bg-red-300 w-full h-full text-center transition-transform duration-300 hover:scale-105 rounded-md"
          }
        >
          <button>
            <img src={home_icon} alt="Home" className="w-12 h-12" />
          </button>
        </NavLink>
      </div>
      <div className="flex flex-col items-center text-white font-bold">
        <NavLink
          to="/admin/manageProducts"
          className={({ isActive }) =>
            isActive
              ? "px-4 py-6 bg-red-300 w-full text-white text-center transition-transform duration-300 scale-105 rounded-md"
              : "px-4 py-6 hover:bg-red-300 w-full text-center transition-transform duration-300 hover:scale-105 rounded-md"
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/admin/manageCategories"
          className={({ isActive }) =>
            isActive
              ? "px-4 py-6 bg-red-300 w-full text-white text-center  transition-transform duration-300 scale-105 rounded-md"
              : "px-4 py-6 hover:bg-red-300 w-full text-center transition-transform duration-300 hover:scale-105 rounded-md"
          }
        >
          Categorías
        </NavLink>

        <NavLink
          to="/admin/managePurchases"
          className={({ isActive }) =>
            isActive
              ? "px-4 py-6 bg-red-300 w-full text-white text-center  transition-transform duration-300 scale-105 rounded-md"
              : "px-4 py-6 hover:bg-red-300 w-full text-center transition-transform duration-300 hover:scale-105 rounded-md"
          }
        >
          Compras
        </NavLink>

        <NavLink
          to="/admin/manageProducts"
          className={({ isActive }) =>
            isActive
              ? "px-4 py-6 bg-red-300 w-full text-white text-center  transition-transform duration-300 scale-105 rounded-md"
              : "px-4 py-6 hover:bg-red-300 w-full text-center transition-transform duration-300 hover:scale-105 rounded-md"
          }
        >
          Productos
        </NavLink>

        <NavLink
          to="/admin/manageSubcategories"
          className={({ isActive }) =>
            isActive
              ? "px-4 py-6 bg-red-300 w-full text-white text-center  transition-transform duration-300 scale-105 rounded-md"
              : "px-4 py-6 hover:bg-red-300 w-full text-center transition-transform duration-300 hover:scale-105 rounded-md"
          }
        >
          Subcategorías
        </NavLink>

        <NavLink
          to="/admin/manageUsers"
          className={({ isActive }) =>
            isActive
              ? "px-4 py-6 bg-red-300 w-full text-white text-center  transition-transform duration-300 scale-105 rounded-md"
              : "px-4 py-6 hover:bg-red-300 w-full text-center transition-transform duration-300 hover:scale-105 rounded-md"
          }
        >
          Usuarios
        </NavLink>
      </div>
    </section>
  );
};

export default NavAside;
