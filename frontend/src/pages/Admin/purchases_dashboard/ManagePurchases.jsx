/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { Footer, Title } from "../../../components";
import { Link } from "react-router-dom";
import { CategoriesContext } from "../../../context";
import NavAside from "../../../components/NavAside/NavAside";
import { CheckCircleOutlined, ExclamationCircleOutlined } from "@ant-design/icons";
import getPurchases from "../../../utils/purchases/getPurchases";

const ManagePurchases = () => {
  const [allPurchases, setAllPurchases] = useState();

  console.log("allPurchases: ", allPurchases);

  useEffect(() => {
    getPurchases(setAllPurchases);
  }, []);

  const purchasesAvailable = allPurchases?.purchases?.length > 0;

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow flex w-full bg-gradient-to-b from-[#F8F8F8] to-[#e7d6d6] overflow-hidden">
        <NavAside />
        <section className="right_section w-full px-10 flex flex-col items-center gap-4">
          <Title />
          <div className="flex w-full px-4 py-5 md:gap-4 items-center justify-between overflow-x-auto">
            <Link to={"/admin/manageCategories/create"}>
              <label
                htmlFor="image"
                className="px-6 py-3 bg-slate-400 text-white font-bold rounded-md hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-green-400 cursor-pointer"
              >
                Compras
              </label>
            </Link>
          </div>
          <table className="w-full border border-collapse bg-white">
            <thead>
              <tr>
                <th className="p-4 border">Id</th>
                <th className="p-4 border">Fecha</th>
                <th className="p-4 border">Hora</th>
                <th className="p-4 border">Usuario</th>
                <th className="p-4 border">Email</th>
                <th className="p-4 border">N° Orden</th>
                <th className="p-4 border">N° Pago</th>
                <th className="p-4 border">Tipo</th>
                <th className="p-4 border">Estado</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {purchasesAvailable ? (
                allPurchases.purchases?.map((purchase) => (
                  <tr key={purchase.id}>
                    <td className="p-4 border text-center">{purchase.id}</td>
                    <td className="p-4 border text-center">{purchase.created_date}</td>
                    <td className="p-4 border text-center">{purchase.created_time}</td>
                    <td className="p-4 border">{purchase.User.name}</td>
                    <td className="p-4 border text-center">
                      {purchase.User.email}
                    </td>
                    <td className="p-4 border">{purchase.merchant_order_id}</td>
                    <td className="p-4 border">{purchase.payment_id}</td>
                    <td className="p-4 border">{purchase.payment_type}</td>
                    <td className="p-4 border">
                      {purchase.payment_status === "succeded" ? (
                        <span className="text-green-500 text-2xl">
                          <CheckCircleOutlined />
                        </span>
                      ) : (
                        <span className="text-orange-400 text-2xl">
                          <ExclamationCircleOutlined />
                        </span>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="9" className="text-center p-4">
                    Todavía no se ha realizado ninguna compra.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ManagePurchases;
