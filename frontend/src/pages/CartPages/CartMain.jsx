import { Footer, Marquee, Navbar, Title } from "../../components";
import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import crossRed from "../../assets/crossRed.png";
import { Link, NavLink } from "react-router-dom";
import ButtonQuantities from "../../components/ButtonQuantities/ButtonQuantities";
import handlerRemoveProducts from "../../utils/cart/cartAside/handlerRemoveProducts";

const CartMain = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  const user = JSON.parse(window.localStorage.getItem("userData"));
  const [cart, setCart] = useState(() => {
    return JSON.parse(window.localStorage.getItem("cart"));
  });
  const [total, setTotal] = useState(0);

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
  }, [cart]);

  return (
    <div className="">
      {" "}
      <Marquee />
      <Title />
      <Navbar />
      <div className="flex flex-col bg-white  justify-center h-screen gap-2 overflow-auto">
        <div className="pt-[35px] w-full">
          <div className="bg-[#FAFAFA] h-24 flex justify-center items-center gap-4 w-full">
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="bg-black text-white w-6 h-6 flex items-center justify-center rounded-full">
                1
              </div>
              <h1 className="text-xl uppercase">Productos Carrito</h1>
            </div>
            <div className="h-[1px] w-[150px] bg-[#ccc]" />
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="bg-[#ccc] text-[white] w-6 h-6 flex items-center justify-center rounded-full">
                2
              </div>
              {isAuthenticated ? (
                <Link to="/cart/userdata">
                  <h1 className="text-xl uppercase text-[#ccc]">
                    Datos Personales
                  </h1>
                </Link>
              ) : (
                <h1 className="text-xl uppercase text-[#ccc]">
                  Datos Personales
                </h1>
              )}
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
            Confirma los productos de tu compra antes de continuar...
          </h1>
        </div>
        <div className="flex flex-row bg-white justify-center h-screen  p-2  gap-2 overflow-auto">
          <div className=" flex flex-col  bg-gray-100  p-2 px-4 rounded-md h-fit border border-red-200 ">
            <div>
              <table className="text-center w-full relative">
                <thead>
                  <tr className="h-16 uppercase">
                    <th className="px-4 py-2">Producto</th>
                    <th className="px-4 py-2">Precio</th>
                    <th className="px-4 py-2">Cantidad</th>
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
                          <h3 className="text-sm">${product.price} </h3>
                        </td>
                        <td className="p-2">
                          <ButtonQuantities
                            product={product}
                            cart={cart}
                            setCart={setCart}
                          />
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
            {isAuthenticated ? (
              <NavLink
                to="/cart/userdata"
                className="border-0 border p-2 rounded-md hover:bg-lime-300 bg-red-200"
              >
                Comprar
              </NavLink>
            ) : (
              <button
                onClick={loginWithRedirect}
                className="bg-stone-300 border p-2 rounded-md hover:bg-[#DBB1BC]"
              >
                Iniciar Sesión para comprar
              </button>
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

export default CartMain;
