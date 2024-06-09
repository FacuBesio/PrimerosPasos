import { Footer, Marquee, Navbar, Title } from "../../components";
import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import crossRed from "../../assets/crossRed.png";
import { Link } from "react-router-dom";
import getUserById from "../../utils/users/getUserById";
import handlerFormLabel from "../../utils/cart/formLabelsPersonalInfo";
import handlerRemoveProducts from "../../utils/cart/cartAside/handlerRemoveProducts";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import createPreference from "../../utils/mercadoPago/createPreference";
import { MP_ACCESS_TOKEN_PUBLIC } from "../../config/config";

const CartUserData = () => {
  initMercadoPago(MP_ACCESS_TOKEN_PUBLIC, { locale: "es-AR" });
  const { isAuthenticated } = useAuth0();
  const [cart, setCart] = useState(() => {
    return JSON.parse(window.localStorage.getItem("cart"));
  });
  const [total, setTotal] = useState(0);
  const [user, setUser] = useState();
  const [preferenceId, setPreferenceId] = useState();

  const formLabel = handlerFormLabel(user)

  useEffect(() => {
    window.localStorage.setItem("cart", JSON.stringify(cart));
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
  }, [cart]);

  const handleBuy = async (products) => {
 const id = await createPreference(products);
 id && setPreferenceId(id)
  }

  return (
    <div className="">
      {" "}
      <Marquee />
      <Title />
      <Navbar />
      <div className="flex flex-col bg-white  justify-center h-screen gap-2 overflow-auto">
        <div className="py-4 w-full">
          <div className="h-24 bg-[#FAFAFA] flex justify-center items-center gap-4 w-full">
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="bg-black text-white w-6 h-6 flex items-center justify-center rounded-full">
                1
              </div>
              <Link to={"/cart"}>
                <h1 className="text-xl uppercase">Productos Carrito</h1>
              </Link>
            </div>
            <div className="h-[1px] w-[150px] bg-black" />
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="bg-black text-[white] w-6 h-6 flex items-center justify-center rounded-full">
                2
              </div>
              <h1 className="text-xl uppercase">Datos Personales</h1>
            </div>
            <div className="h-[1px] w-[150px] bg-[#ccc]" />
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="bg-[#ccc] text-[white] w-6 h-6 flex items-center justify-center rounded-full">
                3
              </div>
              <h1 className="text-xl uppercase text-[#ccc]">Compra</h1>
            </div>
          </div>
          <h1 className="text-center text-3xl text-black-800 font-semibold mt-4">
            Estas a un paso! Revisa tus datos personales y completa los datos de
            envío
          </h1>
        </div>
        <div className="flex flex-row bg-white justify-center h-screen  p-2  gap-2 overflow-auto">
          <section className="border border-red-200  bg-gray-100 rounded-md">
            <h1 className="text-center text-xl text-[#333] p-2">
              Datos Personales
            </h1>
            <div className="">
              <form
                className=" p-6 grid  md:grid-cols-2 gap-2 justify-items-center items-center w-fit "
                action=""
              >
                {formLabel?.map((e) => (
                  <label key={e.name} className="flex flex-col">
                    <span className="text-[#5a5b5a] ">{e.spanName}</span>
                    <input
                      type={e.type}
                      name={e.name}
                      value={e.value}
                      onChange=""
                      placeholder={e.placeholder}
                      className="border-2 border-red-200 bg-tertiary p-1 rounded-lg max-w-[220px]  "
                    />
                  </label>
                ))}
                <button className="flex bg-red-300  w-fit items-center h-fit max-h-[24px] p-4 hover:scale-105 hover:bg-red-200 transition-all duration-200 rounded-xl border border-[#Dbb1bc] text-[#393334]">
                  Realizar cambios
                </button>
              </form>
            </div>
          </section>

          <div className=" flex flex-col  bg-gray-100  p-2 px-4 rounded-md h-fit border border-red-200 ">
            <div>
              <table className="text-center w-full relative">
                <thead>
                  <tr className="h-16 uppercase">
                    <th className="px-4 py-2">Producto</th>
                    <th className="px-4 py-2">Precio</th>
                    <th className="px-4 py-2">Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.products.length > 0 ? (
                    cart.products.map((product) => (
                      <tr
                        key={product.id}
                        className="border-b border-gray-200 relative"
                      >
                        <td className="flex items-center gap-2 p-2">
                          <img
                            className="max-w-[80px] max-h-[80px] rounded-full border border-red-200"
                            src={product.img}
                            alt={product.name}
                          />
                          <h3 className="text-sm tracking-tighter max-w-[120px] ">
                            {product.name}
                          </h3>
                        </td>
                        <td className="p-2">
                          <h3 className="text-sm">
                            ${product.price} x {product.cantidad}{" "}
                          </h3>
                        </td>
                        <td className="p-2">
                          <h3 className="text-sm">
                            ${product.price * product.cantidad}
                          </h3>
                        </td>
                        <td className="p-2 relative">
                          <button
                            onClick={() =>
                              handlerRemoveProducts(
                                product,
                                cart,
                                setCart,
                                isAuthenticated,
                                user
                              )
                            }
                          >
                            <img
                              className="w-6 h-6 border border-red-200 rounded-md bg-white hover:scale-110"
                              src={crossRed}
                              alt="Remove"
                            />
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="5" className="text-center mt-4 text-black">
                        No hay productos seleccionados en el carrito
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          <div className=" flex flex-col bg-gray-100 h-fit p-2 rounded-md gap-4 justify-center items-center border border-red-200 ">
            <h2>Total : ${total}</h2>
            <h3>
              Envio: <span className="text-green-400">gratis</span>
            </h3>
            <Link
              className="border p-2 rounded-md hover:bg-[#DBB1BC] bg-red-200"
              onClick={() => handleBuy(cart.products)}
              to={"/cart/userdata"}
            >
              Confirmar Comprar
            </Link>
            {preferenceId && (
              <Wallet
                initialization={{ preferenceId: preferenceId }}
                customization={{ texts: { valueProp: "smart_option" } }}
              />
            )}

            <Link
              className="border p-2 rounded-md hover:bg-[#DBB1BC] bg-red-200"
              to={"/shop"}
            >
              Agregar más productos
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CartUserData;
