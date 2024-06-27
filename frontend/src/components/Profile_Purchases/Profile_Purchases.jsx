/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import {
  CheckCircleOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import getPurchases from "../../utils/purchases/getPurchases";


const Profile_Purchases = () => {
  const [allPurchases, setAllPurchases] = useState();

  console.log("allPurchases: ", allPurchases);

  useEffect(() => {
    getPurchases(setAllPurchases);
  }, []);

  const purchasesAvailable = allPurchases?.purchases?.length > 0;

  return (
    <section className="right_section w-full px-10 flex flex-col items-center gap-4">
      <h1 className="text-2xl font-bold py-8"> MIS COMPRAS </h1>
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
                <td className="p-4 border text-center">
                  {purchase.created_date}
                </td>
                <td className="p-4 border text-center">
                  {purchase.created_time}
                </td>
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
  );
};

export default Profile_Purchases;
