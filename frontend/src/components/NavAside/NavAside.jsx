import { Link } from "react-router-dom";

const NavAside = () => {
  return (
    <section className="left_section flex flex-col item-center font-bold bg-red-200 w-fit p-6 gap-6">
      <div className="flex flex-col item-center text-white px-4 py-6 gap-6">
        <Link to="/">Home</Link>
      </div>
      <div className="flex flex-col item-center text-white font-bold px-4 py-4 gap-6">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/admin/manageCategories">Categorías</Link>
        <Link to="/admin/manageShopping">Compras</Link>
        <Link to="/admin/manageProducts">Productos</Link>
        <Link to="/admin/manageSubcategories">Subcategorías</Link>
        <Link to="/admin/manageUsers">Usuarios</Link>
      </div>
    </section>
  );
};

export default NavAside;
