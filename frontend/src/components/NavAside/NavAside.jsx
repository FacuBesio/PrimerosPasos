import { Link } from "react-router-dom";

const NavAside = () => {
  return (
    <section className="left_section flex flex-col bg-red-200 w-fit p-6 gap-6">
      <Link to="/">Home</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/admin/manageProducts">Products</Link>
      <Link to="/admin/manageShopping">Purchases</Link>
      <Link to="/admin/manageUsers">Users</Link>
      <Link to="/admin/manageCategories">Categories</Link>
    </section>
  );
};

export default NavAside;
