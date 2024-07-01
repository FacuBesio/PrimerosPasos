import { Footer, Marquee, Navbar, Title } from "../../components";
import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import crossRed from "../../assets/crossRed.png";
import { Link, NavLink } from "react-router-dom";
import ButtonQuantities from "../../components/ButtonQuantities/ButtonQuantities";
import handlerRemoveProducts from "../../utils/cart/cartAside/handlerRemoveProducts";
import { tableStyle } from "../../styles";

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
    <div className="flex flex-col min-h-screen">
      <Marquee />
      <Title />
      <Navbar />

     
 
        <div className="flex flex-col bg-white justify-center items-center gap-2 overflow-auto text-[12px] md:text-[18px]">
          <div className="bg-[#FAFAFA] py-8 flex flex-col lg:flex-row justify-center items-center gap-4 w-full">
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="bg-[#5a5b5a] text-white w-8 h-8 flex items-center justify-center rounded-full">
                1
              </div>
              <h1 className="text-md uppercase text-[#5a5b5a]">
                Productos Carrito
              </h1>
            </div>
            <div className="h-[1px] w-[150px] bg-[#ccc]" />
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="bg-[#ccc] text-[white] w-8 h-8 flex items-center justify-center rounded-full">
                2
              </div>
              {isAuthenticated ? (
                <Link to="/cart/userdata">
                  <h1 className="text-md uppercase text-[#ccc]">
                    Datos Personales
                  </h1>
                </Link>
              ) : (
                <h1 className="text-md uppercase text-[#ccc]">
                  Datos Personales
                </h1>
              )}
            </div>
            <div className="h-[1px] w-[150px] bg-[#ccc]" />
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="bg-[#ccc] text-[white] w-8 h-8 flex items-center justify-center rounded-full">
                3
              </div>
              <h1 className="text-md uppercase text-[#ccc]">Compra</h1>
            </div>
          </div>
          <h1 className="text-center  py-8 font-semibold text-[#5a5b5a] px-4">
            Confirma los productos de tu compra antes de continuar...
          </h1>
        </div>

        <div className="flex flex-col bg-white lg:flex-row h-1/2 justify-center p-4 gap-2 overflow-auto">
          <div className="flex flex-col bg-gray-100 p-2 px-4 rounded-md h-fit ">
            <div>
              <table className="responsive-table text-center w-full">
                <thead>
                  <tr className="h-16 uppercase">
                    <th className={tableStyle}>Producto</th>
                    <th className={tableStyle}>Precio</th>
                    <th className={tableStyle}>Cantidad</th>
                    <th className={tableStyle}>Subtotal</th>
                    <th className={tableStyle}></th>
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
                          <div className="flex items-center">
                            <img
                              className="max-w-[80px] max-h-[80px]  rounded-full border border-red-200"
                              src={product.img}
                              alt={product.name}
                            />
                            <h3 className=" tracking-tighter text-[12px] md:text-[18px] max-w-[120px]">
                              {product.name}
                            </h3>
                          </div>
                        </td>
                        <td
                          className="p-2 text-[12px] md:text-[18px]"
                          data-label="Precio"
                        >
                          <h3 className="">${product.price}</h3>
                        </td>
                        <td
                          className="p-2 h-full justify-center text-[12px] md:text-[18px]"
                          data-label="Cantidad"
                        >
                          <ButtonQuantities
                            product={product}
                            cart={cart}
                            setCart={setCart}
                          />
                        </td>
                        <td
                          className="p-2 text-[12px] md:text-[18px]"
                          data-label="Subtotal"
                        >
                          <h3 className="">
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
                              className="w-5 h-5 border border-red-200 rounded-md bg-white hover:scale-110"
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
              Envio: <span className="text-green-400">Gratis</span>
            </h3>
            {isAuthenticated ? (
              <NavLink
                to="/cart/userdata"
                className="px-8 py-3 text-[12px] md:text-[18px] bg-slate-400 bg-opacity-90 text-white font-bold rounded-md hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-400"
              >
                Comprar
              </NavLink>
            ) : (
              <button
                onClick={loginWithRedirect}
                className="px-8 py-3 text-[12px] md:text-[18px] bg-stone-300 bg-opacity-90 text-white font-bold rounded-md hover:bg-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400"
              >
                Iniciar Sesión para comprar
              </button>
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

export default CartMain;
