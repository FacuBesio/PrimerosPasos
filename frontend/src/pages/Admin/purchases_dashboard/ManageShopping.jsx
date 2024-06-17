import { useContext, useEffect, useState } from "react";
import { Footer, Title } from "../../../components";
import { mainPages } from "../../../styles";
import { Link } from "react-router-dom";
import { PagesContext } from "../../../context";
import Paginated from "../../../components/Paginated/Paginated";
import garbage from "../../../assets/garbage.png";
import getAllPurchases from "../../../utils/purchase/getAllPurchases";

const ManageShopping = () => {
  const { page, setPage } = useContext(PagesContext);
  const [allPurchases, setAllPurchases] = useState([]);

  console.log(allPurchases);

  useEffect(() => {
    getAllPurchases(setAllPurchases);
  }, []);

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
        <section className="right_section w-full flex flex-col items-center gap-4">
          <Title />
          <div></div>
          <table className="w-full border-collapse">
            <thead className=" ">
              <tr>
                <th className="p-2 border">Estado del pago</th>
                <th className="p-2 border">Fecha de compra</th>
                <th className="p-2 border">Compra ID</th>
                <th className="p-2 border">Order ID</th>
                <th className="p-2 border">User ID</th>
                <th className="p-2 border">Imagen de la compra</th>
                <th className="p-2 border">Total de la compra</th>
              
              </tr>
            </thead>
            <tbody>
              {Array.isArray(allPurchases) && allPurchases.length > 0 ? (
                allPurchases.map((user) => (
                  <tr key={user.id}>
                    <td className="p-4 border">
                      <img
                        src={user.img}
                        alt={checkValue(user.name)}
                        className="w-16 h-16 object-cover"
                      />
                    </td>
                    <td className="p-4 border">{checkValue(user.name)}</td>
                    <td className="p-4 border">{checkValue(user.country)}</td>
                    <td className="p-4 border">{checkValue(user.state)}</td>
                    <td className="p-4 border">{checkValue(user.city)}</td>
                    <td className="p-4 border">{checkValue(user.phone)}</td>
                    <td className="p-4 border">{checkValue(user.purchases)}</td>
                    <td className="p-4 border">
                      <button>{checkValue(user.role)}</button>
                    </td>
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
                    No se encuentran compras disponibles.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
          <Paginated
            page={page}
            setPage={setPage}
          />
        </section>
      </div>
      <Footer />
    </main>
  );
};

export default ManageShopping;
