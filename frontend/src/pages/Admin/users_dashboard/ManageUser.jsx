import { useContext, useEffect, useState } from "react";
import { Footer, Title } from "../../../components";
import { mainPages } from "../../../styles";
import { Link } from "react-router-dom";
import {
  FilterContext,
  PagesContext,
  ProductsContext,
  SearchContext,
  SortContext,
} from "../../../context";
import Paginated from "../../../components/Paginated/Paginated";
import garbage from "../../../assets/garbage.png";
import getAllUsers from "../../../utils/users/getAllUsers";

const ManageUsers = () => {
  const { page, setPage } = useContext(PagesContext);
  const { allProducts, setAllProducts } = useContext(ProductsContext);

  const [allUsers, setAllUsers] = useState([]);

console.log(allUsers);

  useEffect(() => {
    getAllUsers(setAllUsers);
   
  }, []);

  const usersAvailable = allUsers.length > 0;
  const checkValue = (value) => {
    if (Array.isArray(value) && value.length === 0) {
      return '0';
    }
    return value || 'incompleto';
  };


  return (
    <main className={mainPages}>
      <div className="flex h-screen">
        <section className="left_section flex flex-col bg-red-200 w-fit p-6 gap-6">
          <Link to="/">Home</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/admin/manageProducts">Products</Link>
          <Link to="/admin/manageShopping">Purchases</Link>
          <Link to="/admin/manageUsers">Users</Link>
          <Link to="/admin/manageCategories">Categories</Link>
        </section>
        <section className="right_section flex flex-col items-center gap-4">
          <Title />
          <div className="flex  gap-2">
          <h2>Sorter</h2>
          <h2>Buscar por nombre</h2>
          </div>
          <table className="w-full border-collapse ">
            <thead>
              <tr>
                <th className="p-2 border">Imagen Usuario</th>
                <th className="p-2 border">Nombre del Usuario</th>
                <th className="p-2 border">Pais</th>
                <th className="p-2 border">Provincia</th>
                <th className="p-2 border">Ciudad</th>
                <th className="p-2 border">Telefono</th>
                <th className="p-2 border">Compras</th>
                <th className="p-2 border">Rol</th>
                <th className="p-2 border">Deshabilitar</th>
              </tr>
            </thead>
            <tbody>
              {usersAvailable ? (
                allUsers.map((user) => (
                  <tr key={user.id}>
                    <td className="p-4 border">
                      <img
                        src={user.img}
                        alt={user.name}
                        className="w-16 h-16 object-cover"
                      />
                    </td>
                    <td className="p-4 border">{checkValue(user.name)}</td>
                    <td className="p-4 border">{checkValue(user.country)}</td>
                    <td className="p-4 border">{checkValue(user.state)}</td>
                    <td className="p-4 border">{checkValue(user.city)}</td>
                    <td className="p-4 border">{checkValue(user.phone)}</td>
                    <td className="p-4 border">{checkValue(user.purchases)}</td>
                    <td className="p-4 border">{user.role}</td>
                    <td className="p-4 border">
                      <button>
                        <img src={garbage} alt="Eliminar" />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="9" className="text-center p-4">
                    No se encuentran usuarios disponibles.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
          <Paginated
            page={page}
            totalPages={allProducts?.totalPages}
            setPage={setPage}
          />
        </section>
      </div>
      <Footer />
    </main>
  );
};

export default ManageUsers;
