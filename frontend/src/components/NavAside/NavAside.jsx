import { NavLink } from "react-router-dom";

const NavAside = () => {
  return (
    <section className="left_section flex flex-col items-center w-1/12 font-bold bg-red-200 gap-3">
      <div className="w-full h-44">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "px-4 py-6 bg-red-300 w-full text-white text-center"
              : "flex flex-col items-center justify-center px-4 py-6 hover:bg-red-300 w-full h-full text-center"
          }
        >
          Home
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
