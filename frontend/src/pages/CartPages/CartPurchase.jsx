import { Footer, Marquee, Navbar, Title } from "../../components";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { NavLink } from "react-router-dom";
import getUserById from "../../utils/users/getUserById";
import { HiCheckCircle } from "react-icons/hi";
import Loader from "../../components/Loader/Loader";
import useQuery from "../../utils/cart/useQuery";
import postPurchase from "../../utils/purchase/postPurchase";

const CartPurchase = () => {
  const querys = useQuery(useLocation)
  const { isAuthenticated } = useAuth0();
  const cart = JSON.parse(window.localStorage.getItem("cart"));
  const [total, setTotal] = useState(0);
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const [delayLoading, setDelayLoading] = useState(true);

  isAuthenticated && user && postPurchase(querys, user)
  
  useEffect(() => {
    setLoading(false);
    const calculateTotal = () => {
      let newTotal = cart.products.reduce(
        (acc, product) => acc + product.price * product.cantidad,
        0
      );
      setTotal(newTotal);
    };
    calculateTotal();
    const userLocalStorage = JSON.parse(
      window.localStorage.getItem("userData")
    );
    getUserById(userLocalStorage.id, setUser);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDelayLoading(false);
    }, 250);
    return () => clearTimeout(timer);
  }, [loading]);

  if (loading || delayLoading) {
    return <Loader delayLoading={delayLoading} />;
  }
  return (
    <div className="">
      <Marquee />
      <Title />
      <Navbar />
      <div className="flex flex-col items-center justify-center bg-white  overflow-auto">
        <div className="py-4 flex flex-col items-center justify-center w-full">
          <div className="h-24 bg-[#FAFAFA] flex justify-center items-center gap-4 w-full">
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="bg-black text-white w-6 h-6 flex items-center justify-center rounded-full">
                1
              </div>
              <h1 className="text-xl uppercase">Productos Carrito</h1>
            </div>
            <div className="h-[1px] w-[150px] bg-black" />
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="bg-black text-[white] w-6 h-6 flex items-center justify-center rounded-full">
                2
              </div>
              <h1 className="text-xl uppercase">Datos Personales</h1>
            </div>
            <div className="h-[1px] w-[150px] bg-black" />
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="bg-black text-[white] w-6 h-6 flex items-center justify-center rounded-full">
                3
              </div>
              <h1 className="text-xl uppercase">Compra</h1>
            </div>
          </div>

          <div className="mt-4 flex flex-col items-center justify-center w-2/4 ">
            <div className="bg-green-200 border border-green-400 w-full p-4 rounded">
              <div className="flex items-center">
                <HiCheckCircle className="text-5xl text-green-500 mr-2" />
                <p className="text-green-500 font-bold text-4xl">
                  Pago Confirmado!
                </p>
              </div>
              <p className="mt-4 text-mg text-gray-700 font-bold leading">
                Se han enviado todos los detalles de tu compra a {user?.email}.
              </p>
            </div>
            <div className="bg-white shadow-md rounded px-8 pt-8 pb-8 mb-4">
              <div className="flex flex-row justify-between">
                <h2 className="text-2xl font-bold mb-4">Detalle de Compra</h2>
                <h3 className="text-2xl font-bold mb-4 text-gray-700">
                  Compra #{user?.orders}
                </h3>
              </div>
              <p className="pt-2">
                Tu pago ha sido procesado correctamente, te dejamos un detalle
                de la información que enviamos a tu email:
              </p>
              <div className="flex flex-col mt-4">
                <table className="w-full text-center">
                  <thead>
                    <tr className="h-16 uppercase">
                      <th className="px-4 py-2 text-[#5a5b5a] ">Producto</th>
                      <th className="px-4 py-2 text-[#5a5b5a]">Precio</th>
                      <th className="px-4 py-2 text-[#5a5b5a]">Cantidad</th>
                      <th className="px-4 py-2 text-[#5a5b5a]">Subtotal</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.products.map((product) => (
                      <tr key={product.id} className="border-t">
                        <td className="flex items-center gap-2 h-22 p-2">
                          <img
                            src={product.img}
                            className="max-w-[100px] rounded-xl border "
                          />
                          <div>
                            <p className="text-l font-medium pl-2">
                              {product.name}
                            </p>
                            <p className="text-sm font-medium">
                              {product.brand}
                            </p>
                          </div>
                        </td>
                        <td>${product.price}</td>
                        <td>
                          <p className="text-[16px] inline">
                            {product.cantidad}
                          </p>
                        </td>
                        <td>${product.price * product.cantidad}</td>
                      </tr>
                    ))}
                    <tr className="border-t">
                      <td
                        colSpan={3}
                        className="bg-slate-100 font-bold text-center"
                      >
                        TOTAL
                      </td>
                      <td className="bg-slate-100 font-medium text-lg">
                        ${total}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div>
                <h3 className="h-10 uppercase text-lg font-bold mt-8">
                  Envío:
                </h3>
                <div>
                  <p className="text-l font-bold">{user?.name}</p>
                </div>
                <div className="flex flex-col justify-between">
                  <p className="font-medium">
                    {user?.street_address} {user?.street_number}{" "}
                  </p>
                  <p className="font-medium">
                  {user?.city}, {user?.state}, {user?.country} 
                  </p>
                  <p className="font-medium">CP: {user?.ZIP_Code}</p>
                  <p className="font-medium">Tel.: {user?.phone}</p>
                </div>
              </div>
              <div className="flex flex-col justify-center pb-8">
                <h3 className="h-10 uppercase text-lg font-bold mt-8">
                  Estado de Compra:{" "}
                  <span className="h-10 capitalize text-lg text-green-500 font-bold mt-8">
                    Pago confirmado
                  </span>
                </h3>
                <p>
                  Gracias por elegir Primeros Pasos. Ante cualquier duda o
                  consulta, no dudes en contactarte. Ya estamos preparando tu
                  pedido!
                </p>
              </div>
              <div className="flex mb-4">
                <div className="flex-1 mr-2">
                  <p className="text-black-500 font-bold">Pago confirmado</p>
                  <div className="bg-green-500 h-2" />
                </div>
                <div className="flex-1 mr-2">
                  <p className="text-black-500 font-bold">Envío: En camino</p>
                  <div className="bg-yellow-200 h-2" />
                </div>
                <div className="flex-1">
                  <p className="text-black-500 font-bold">
                    Confirmación Cliente
                  </p>
                  <div className="bg-slate-400 h-2" />
                </div>
              </div>
            </div>

            <div className="flex gap-4 items-center justify-center w-full px-4">
              <NavLink
                to="/profile/personalInfo"
                className="h-16 uppercase font-medium border p-2 rounded-md hover:bg-[#DBB1BC] bg-red-200 flex-1  flex items-center justify-center"
              >
                Ir a mis Compras
              </NavLink>

              <NavLink
                to="/shop"
                className="h-16 uppercase font-medium border p-2 rounded-md hover:bg-[#DBB1BC] bg-red-200 flex-1 flex items-center justify-center"
              >
                Continuar Comprando
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CartPurchase;
