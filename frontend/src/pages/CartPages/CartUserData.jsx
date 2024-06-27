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
import putUser from "../../utils/users/putUsers"

const CartUserData = () => {

  initMercadoPago(MP_ACCESS_TOKEN_PUBLIC, { locale: "es-AR" });

  const { isAuthenticated } = useAuth0();
  const [cart, setCart] = useState(() => JSON.parse(window.localStorage.getItem("cart")));
  const [total, setTotal] = useState(0);
  const [user, setUser] = useState();
  
  const [preferenceId, setPreferenceId] = useState();

  const [updateUser, setUpdateUser] = useState({});
  const [editable, setEditable] = useState(false);

  const formLabel = handlerFormLabel(updateUser);

  useEffect(() => {
    window.localStorage.setItem("cart", JSON.stringify(cart));
    const calculateTotal = () => {
      let newTotal = cart.products.reduce((acc, product) => acc + product.price * product.cantidad, 0);
      setTotal(newTotal);
    };
    calculateTotal();

    const userLocalStorage = JSON.parse(window.localStorage.getItem("userData"));
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

  const handleModify = (e) => {
    e.preventDefault();
    setEditable(!editable);
  };

  return (
    <div className="text-[12px] md:text-[18px]">
      <Marquee />
      <Title />
      <Navbar />
      <div className="flex flex-col bg-white justify-center gap-2 pb-2">
        <div className="bg-[#FAFAFA] py-8 flex flex-col lg:flex-row justify-center items-center gap-4 w-full">
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="bg-[#5a5b5a] text-white w-6 h-6 flex items-center justify-center rounded-full">
              1
            </div>
            <Link to={"/cart"}>
              <h1 className="text-md uppercase">Productos Carrito</h1>
            </Link>
          </div>
          <div className="h-[1px] w-[150px] bg-black" />
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="bg-[#5a5b5a] text-[white] w-6 h-6 flex items-center justify-center rounded-full">
              2
            </div>
            <h1 className="text-md uppercase">Datos Personales</h1>
          </div>
          <div className="h-[1px] w-[150px] bg-[#ccc]" />
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="bg-[#ccc] text-[white] w-6 h-6 flex items-center justify-center rounded-full">
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
      <div className="flex flex-col items-center lg:flex-row bg-white justify-center p-2 gap-2">
        <section className="border border-red-200 bg-gray-100 rounded-md w-full lg:w-auto items-center flex flex-col">
          <h1 className="text-center  text-[#333] p-2">
            Datos Personales
          </h1>
          <div className="">
            <form className="p-6 grid lg:grid-cols-2 gap-2 justify-items-center items-center w-fit">
              {formLabel?.map((e) => (
                <label key={e.name} className="flex flex-col">
                  <span className="text-[#5a5b5a] ">{e.spanName}</span>
                  <input
                    type={e.type}
                    name={e.name}
                    value={updateUser[e.name] || ''}
                    onChange={handleInputChange}
                    placeholder={e.placeholder}
                    disabled={!editable || e.name === "email"}
                    className="border-2 border-red-200  p-1 rounded-lg max-w-[180px]"
                  />
                </label>
              ))}
              <button onClick={handleModify} className="flex bg-red-300 w-fit items-center h-fit max-h-[24px] p-4 hover:scale-105 hover:bg-red-200 transition-all duration-200 rounded-xl border border-[#Dbb1bc] text-[#393334]">
                Modificar
              </button>
              <button onClick={handleModifyUser} className="flex bg-red-300 w-fit items-center h-fit max-h-[24px] p-4 hover:scale-105 hover:bg-red-200 transition-all duration-200 rounded-xl border border-[#Dbb1bc] text-[#393334]">
                Realizar cambios
              </button>
            </form>
          </div>
        </section>
        <div className="flex flex-col bg-gray-100 p-2 px-4 rounded-md h-fit border border-red-200">
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
                    <tr key={product.id} className="border-b border-gray-200 relative">
                      <td className="flex items-center gap-2 p-2" data-label="Producto">
                        <div className="flex items-center overflow-hidden">
                          <img className="max-w-[80px] max-h-[80px] rounded-full border border-red-200" src={product.img} alt={product.name} />
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
                        <button onClick={() => handlerRemoveProducts(product, cart, setCart, isAuthenticated, user)}>
                          <img className="w-6 h-6 border border-red-200 rounded-md bg-white hover:scale-110" src={crossRed} alt="Remove" />
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
        <div className="flex flex-col bg-gray-100 h-fit p-2 rounded-md gap-4 justify-center items-center border border-red-200">
          <h2>Total : ${total}</h2>
          <h3>
            Envio: <span className="text-green-400">gratis</span>
          </h3>
          <Link className="border p-2 rounded-md hover:bg-[#DBB1BC] bg-red-200" onClick={() => handleBuy(cart.products)} to={"/cart/userdata"}>
            Confirmar Comprar
          </Link>
          {preferenceId && (
            <Wallet initialization={{ preferenceId: preferenceId }} customization={{ texts: { valueProp: "smart_option" } }} />
          )}
          <Link className="border p-2 rounded-md hover:bg-[#DBB1BC] bg-red-200" to={"/shop"}>
            Agregar más productos
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CartUserData;
