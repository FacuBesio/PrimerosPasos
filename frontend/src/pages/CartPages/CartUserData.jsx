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
import { tableStyle } from "../../styles";
import putUser from "../../utils/users/putUsers";
import ProfileForm from "../../components/ProfileForm/ProfileForm";
import UserDataForm from "../../components/UserDataForm/UserDataForm";

const CartUserData = () => {
  initMercadoPago(MP_ACCESS_TOKEN_PUBLIC, { locale: "es-AR" });

  const { isAuthenticated } = useAuth0();
  const [cart, setCart] = useState(() =>
    JSON.parse(window.localStorage.getItem("cart"))
  );
  const [total, setTotal] = useState(0);
  const [user, setUser] = useState();

  const [preferenceId, setPreferenceId] = useState();

  const [updateUser, setUpdateUser] = useState({});
  const [editable, setEditable] = useState(false);

  const formLabel = handlerFormLabel(updateUser);

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
    getUserById(userLocalStorage.id, (userData) => {
      setUser(userData);
      setUpdateUser(userData);
    });
  }, [cart]);

  const handleBuy = async (products) => {
    const id = await createPreference(products);
    id && setPreferenceId(id);
  };

  const handleModifyUser = async (e) => {
    e.preventDefault();
    await putUser(updateUser);
    setEditable(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdateUser({
      ...updateUser,
      [name]: value,
    });
  };

  const handleModify = (event) => {
    event.preventDefault();
    setEditable(!editable);
  };

  return (
    <div className="text-[12px] md:text-[18px] min-h-screen">
      <Marquee />
      <Title />
      <Navbar />
      <div className="flex flex-col bg-white justify-center gap-2 pb-2">
        <div className="bg-[#FAFAFA] py-8 flex flex-col lg:flex-row justify-center items-center gap-4 w-full">
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="bg-[#5a5b5a] text-white w-8 h-8 flex items-center justify-center rounded-full">
              1
            </div>
            <Link to={"/cart"}>
              <h1 className="text-md uppercase">Productos Carrito</h1>
            </Link>
          </div>
          <div className="h-[1px] w-[150px] bg-black" />
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="bg-[#5a5b5a] text-[white] w-8 h-8 flex items-center justify-center rounded-full">
              2
            </div>
            <h1 className="text-md uppercase">Datos Personales</h1>
          </div>
          <div className="h-[1px] w-[150px] bg-[#ccc]" />
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="bg-[#ccc] text-[white] w-8 h-8 flex items-center justify-center rounded-full">
              3
            </div>
            <h1 className="text-md uppercase text-[#ccc]">Compra</h1>
          </div>
        </div>
        <h1 className="text-center  px-4 font-semibold mt-4">
          Estas a un paso! Revisa tus datos personales y completa los datos de
          envío
        </h1>
      </div>

      <div className="flex items-start lg:flex-row bg-white justify-center p-4 gap-2">
        <UserDataForm />
        <div className="flex flex-col bg-gray-100 p-2 px-4 rounded-md h-fit border ">
          <div>
            <table className="responsive-table text-center w-full relative">
              <thead>
                <tr className="h-16 uppercase">
                  <th className={tableStyle}>Producto</th>
                  <th className={tableStyle}>Precio</th>
                  <th className={tableStyle}>Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {cart.products.length > 0 ? (
                  cart.products.map((product) => (
                    <tr
                      key={product.id}
                      className="border-b border-gray-200 relative"
                    >
                      <td
                        className="flex items-center gap-2 p-2"
                        data-label="Producto"
                      >
                        <div className="flex items-center overflow-hidden">
                          <img
                            className="max-w-[80px] max-h-[80px] rounded-full border border-red-200"
                            src={product.img}
                            alt={product.name}
                          />
                          <h3 className="text-[12px] md:text-sm  tracking-tighter  max-w-[120px]">
                            {product.name}
                          </h3>
                        </div>
                      </td>
                      <td className="p-2" data-label="Precio">
                        <h3 className="text-sm">
                          ${product.price} x {product.cantidad}
                        </h3>
                      </td>
                      <td className="p-2" data-label="Subtotal">
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
        <div className="flex flex-col bg-gray-100 h-fit p-4 rounded-md gap-4 justify-center items-center text-[12px] md:text-[18px] font-bold ">
          <h2>Total : ${total}</h2>
          <h3>
            Envio: <span className="text-green-400">gratis</span>
          </h3>
          <Link
            className="px-8 py-3 text-[12px] md:text-[18px] bg-slate-400 bg-opacity-90 text-white font-bold rounded-md hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-400"
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
            className="px-6 py-3 mb-2 text-[12px] md:text-[18px] bg-red-200 text-white font-bold rounded-md hover:bg-red-300
        hover:ring-red-300 focus:outline-none focus:ring-2 focus:ring-red-200"
            to={"/shop"}
          >
            Agregar más productos
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CartUserData;
