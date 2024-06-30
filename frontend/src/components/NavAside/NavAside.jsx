import { NavLink } from "react-router-dom";
import { Tooltip } from "antd";
import home_icon from "../../assets/home_icon.png";
import categories from "../../assets/categories.png";
import subcategories from "../../assets/subcategories.png";
import compras from "../../assets/compras.png";
import dashboard from "../../assets/dashboard.png";
import users from "../../assets/users.png";
import products from "../../assets/products.png";

const NavAside = () => {
 
  const selected =
    "w-10 h-10 scale-125 transition-transform duration-200 rounded-md p-1 bg-red-300 drop-shadow-md hover:drop-shadow-xl";
  const not_Selected =
    "w-10 h-10 hover:scale-125 transition-transform duration-200 rounded-md p-1 bg-white drop-shadow-md hover:drop-shadow-xl";
 
    return (
    <section className="fixed w-16 bg-red-200 h-full items-center pt-28">
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

        <Tooltip title="Products" placement="right">
          <NavLink
            to="/admin/manageProducts"
            className={({ isActive }) => (isActive ? selected : not_Selected)}
          >
            <img src={dashboard} alt="Dashboard" />
          </NavLink>
        </Tooltip>

        <Tooltip title="Users" placement="right">
          <NavLink
            to="/admin/manageUsers"
            className={({ isActive }) => (isActive ? selected : not_Selected)}
          >
            <img src={users} alt="Users" />
          </NavLink>
        </Tooltip>

        <Tooltip title="Compras" placement="right">
          <NavLink
            to="/admin/managePurchases"
            className={({ isActive }) => (isActive ? selected : not_Selected)}
          >
            <img src={compras} alt="Compras" />
          </NavLink>
        </Tooltip>

        {/* <Tooltip title="Products" placement="right">
          <NavLink
            to="/admin/manageProducts"
            className={({ isActive }) => (isActive ? selected : not_Selected)}
          >
            <img src={products} alt="Products" />
          </NavLink>
        </Tooltip> */}

        <Tooltip title="Categories" placement="right">
          <NavLink
            to="/admin/manageCategories"
            className={({ isActive }) => (isActive ? selected : not_Selected)}
          >
            <img src={categories} alt="Categories" />
          </NavLink>
        </Tooltip>
        <Tooltip title="Subcategories" placement="right">
          <NavLink
            to="/admin/manageSubcategories"
            className={({ isActive }) => (isActive ? selected : not_Selected)}
          >
            <img src={subcategories} alt="Subcategories" />
          </NavLink>
        </Tooltip>
      </div>
    </section>
  );
};

export default NavAside;
