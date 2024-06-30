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
  return (
    <section className="fixed w-16 bg-red-200 h-full items-center pt-28">
      <div className="flex flex-col items-center text-white gap-4">
        <Tooltip title="Inicio" placement="right">
          <NavLink to="/">
            <button>
              <img
                src={home_icon}
                alt="Home"
                className="w-10 h-10 hover:scale-110 rounded-md p-1 bg-white drop-shadow-md hover:drop-shadow-xl "
              />
            </button>
          </NavLink>
        </Tooltip>

        <Tooltip title="Dashboard" placement="right">
          <NavLink to="/admin/manageProducts">
            <img
              src={dashboard}
              alt="Dashboard"
              className="w-10 h-10 hover:scale-110 rounded-md p-1 bg-white drop-shadow-md hover:drop-shadow-xl"
            />
          </NavLink>
        </Tooltip>
        <Tooltip title="Users" placement="right">
          <NavLink to="/admin/manageUsers">
            <img src={users} alt="Users" className="w-10 h-10 hover:scale-110 rounded-md p-1 bg-white drop-shadow-md hover:drop-shadow-xl" />
          </NavLink>
        </Tooltip>

        <Tooltip title="Compras" placement="right">
          <NavLink to="/admin/managePurchases">
            <img
              src={compras}
              alt="Compras"
              className="w-10 h-10 hover:scale-110 rounded-md p-1 bg-white drop-shadow-md hover:drop-shadow-xl"
            />
          </NavLink>
        </Tooltip>

        <Tooltip title="Products" placement="right">
          <NavLink to="/admin/manageProducts">
            <img
              src={products}
              alt="Products"
              className="w-10 h-10 hover:scale-110 rounded-md p-1 bg-white drop-shadow-md hover:drop-shadow-xl"
            />
          </NavLink>
        </Tooltip>

        <Tooltip title="Categories" placement="right">
          <NavLink to="/admin/manageCategories">
            <img
              src={categories}
              alt="Categories"
              className="w-10 h-10 hover:scale-110 rounded-md p-1 bg-white drop-shadow-md hover:drop-shadow-xl"
            />
          </NavLink>
        </Tooltip>
        <Tooltip title="Subcategories" placement="right">
          <NavLink to="/admin/manageSubcategories">
            <img
              src={subcategories}
              alt="Subcategories"
              className="w-10 h-10 hover:scale-110 rounded-md p-1 bg-white drop-shadow-md hover:drop-shadow-xl"
            />
          </NavLink>
        </Tooltip>
      </div>
    </section>
  );
};

export default NavAside;
