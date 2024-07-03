/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useState, useEffect, useCallback } from "react";
import { Title } from "../../../components";
import { Link } from "react-router-dom";
import { PagesContext, SearchContext } from "../../../context";
import NavAside from "../../../components/NavAside/NavAside";
import {
  CheckCircleOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import getPurchases from "../../../utils/purchases/getPurchases";
import searchIcon from '../../../assets/VectorSearch.png'

const ManagePurchases = () => {
  const [allPurchases, setAllPurchases] = useState();
  const { searchBar, setSearchBar, setSearchBarTag } =
  useContext(SearchContext);
  const { page, setPage } = useContext(PagesContext);

  const onChangeSearchBar = useCallback(
    (event) => {
      setSearchBar(event.target.value);
      setSearchBarTag(event.target.value);
      setPage(1);
    },
    [setSearchBar, setSearchBarTag, setPage]
  );
  
  useEffect(() => {
    getPurchases(setAllPurchases);
  }, []);

  const purchasesAvailable = allPurchases?.purchases?.length > 0;

  return (
    <div className="flex flex-col min-h-screen text-[12px] md:text-[16px] lg:text-[18px]">
      <main className="flex-grow flex w-full bg-gradient-to-b from-[#F8F8F8] to-[#e7d6d6]  overflow-hidden">
        <NavAside />
        <section className="right_section w-full pl-20 px-4 flex flex-col items-center gap-4">
          <Title />
          <div className="flex w-full md:gap-4 items-center ">
          <Link className="bg-slate-400 hover:bg-slate-500 rounded-md p-3 text-center">
              <label
                htmlFor="purchases"
                className="text-white font-bold bg-slate-400 hover:bg-slate-500 rounded-md p-3 text-centertext-[12px] md:text-[18px]"
              >
                Compras
              </label>
            </Link>

            <form className="flex gap-2">
              <input
                placeholder="Buscar"
                className="px-1 rounded-md border border-red-100 max-w-[160px] "
                type="text"
                value={searchBar}
                onChange={onChangeSearchBar}
              />
              <button>
                <img
                  className="w-[22px] md:w-[30px] hover:scale-110"
                  src={searchIcon}
                  alt="Search Icon"
                />
              </button>
            </form>
          </div>
          <div className="overflow-x-auto w-full">
            <table className="w-full border border-collapse bg-white">
              <thead>
                <tr>
                  <th className="p-1 md:p-4 border">Id</th>
                  <th className="p-1 md:p-4 border">Fecha</th>
                  <th className="p-1 md:p-4 border">Hora</th>
                  <th className="p-1 md:p-4 border">Usuario</th>
                  <th className="p-1 md:p-4 border">Email</th>
                  <th className="p-1 md:p-4 border">N° Orden</th>
                  <th className="p-1 md:p-4 border">N° Pago</th>
                  <th className="p-1 md:p-4 border">Tipo</th>
                  <th className="p-1 md:p-4 border">Estado</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {purchasesAvailable ? (
                  allPurchases.purchases?.map((purchase) => (
                    <tr key={purchase.id}>
                      <td className="p-1 md:p-4 border text-center">
                        {purchase.id}
                      </td>
                      <td className="p-1 md:p-4 border text-center">
                        {purchase.created_date}
                      </td>
                      <td className="p-1 md:p-4 border text-center">
                        {purchase.created_time}
                      </td>
                      <td className="p-1 md:p-4 border">
                        {purchase.User.name}
                      </td>
                      <td className="p-1 md:p-4 border text-center">
                        {purchase.User.email}
                      </td>
                      <td className="p-1 md:p-4 border">
                        {purchase.merchant_order_id}
                      </td>
                      <td className="p-1 md:p-4 border">
                        {purchase.payment_id}
                      </td>
                      <td className="p-1 md:p-4 border">
                        {purchase.payment_type}
                      </td>
                      <td className="p-1 md:p-4 border">
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
          </div>
        </section>
      </main>
    </div>
  );
};

export default ManagePurchases;
