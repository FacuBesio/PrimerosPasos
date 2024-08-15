import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link, NavLink } from "react-router-dom";
import { tableStyle } from "../../../styles";
// import UserDataForm from "../../components/UserDataForm/UserDataForm";
import { CloseCircleOutlined } from "@ant-design/icons";
// import updateProfile_InputValidator from "../../utils/cart/updateProfile_InputValidator";
// import disabledSubmitValidator from "../../utils/cart/disabledSubmitValidator";
import useCart from "../../../hooks/Cart/useCart";
import useTotal from "../../../hooks/Cart/useTotal";
import { cartMainStyle } from "../../../styles";
import Header_CartUserData from "./Header_CartUserData";

const CartUserData = () => {
  const { isAuthenticated } = useAuth0();
  const { cart, setCart, handlerRemoveProducts } = useCart();
  const { total } = useTotal(cart);
  const formattedTotal = total.toLocaleString("es-ES");

  const [errors, setErrors] = useState({});
  const [disabledUpdateButton, setDisabledUpdateButton] = useState(true);
  const [disabledContinueButton, setDisabledContinueButton] = useState(true);
  const [userProfile, setUserProfile] = useState({
    name: "",
    email: "",
    country: "",
    state: "",
    city: "",
    street_address: "",
    street_number: "",
    ZIP_Code: "",
    phone: "",
  });

  // useEffect(() => {
  //   updateProfile_InputValidator(
  //     userProfile,
  //     errors,
  //     setErrors,
  //     setDisabledUpdateButton
  //   );
  // }, [userProfile]);

  const handlerDisabledButton = (event) => {
    event.preventDefault();
    // disabledSubmitValidator(userProfile, errors, setErrors);
  };

  return (
    <div className={`${cartMainStyle}`}>
      <Header_CartUserData />

      <div className="rounded-md w-full">
        <h1 className="text-center py-4 font-semibold text-[#5a5b5a] px-4">
          Revisa tus datos personales, recordá que todos los campos deben estar
          completos para continuar...
        </h1>
      </div>

      <div className="flex items-start bg-white justify-center p-4 gap-2">
        {/* <UserDataForm
          errors={errors}
          setErrors={setErrors}
          userProfile={userProfile}
          setUserProfile={setUserProfile}
          disabledUpdateButton={disabledUpdateButton}
          setDisabledUpdateButton={setDisabledUpdateButton}
          setDisabledContinueButton={setDisabledContinueButton}
        /> */}

        <div className="flex flex-col gap-2">
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
                        className="border-b border-gray-200 relative font-semibold"
                      >
                        <td
                          className="flex items-center gap-5 py-3 px-5"
                          data-label="Producto"
                        >
                          <img
                            className="w-[80px] h-[80px] rounded-3xl border "
                            src={product.img}
                            alt={product.name}
                          />
                          <h3 className="text-[12px] md:text-sm  tracking-tighter max-w-[120px]">
                            {product.name}
                          </h3>
                        </td>
                        <td className="py-3 px-5" data-label="Precio">
                          <h3 className="text-sm">
                            ${product.price} x {product.cantidad}
                          </h3>
                        </td>
                        <td className="py-3 px-5" data-label="Subtotal">
                          <h3 className="text-sm">
                            ${product.price * product.cantidad}
                          </h3>
                        </td>
                        <td className="relative">
                          <button
                            // onClick={() =>
                            //   handlerRemoveProducts(
                            //     product,
                            //     cart,
                            //     setCart,
                            //     isAuthenticated,
                            //     user
                            //   )
                            // }
                            className="transition-transform duration-150 hover:scale-105"
                          >
                            <CloseCircleOutlined className="bg-white text-xl rounded-full" />
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
              <h2 className=" text-center text-[16x] font-bold py-2">
                Total : ${total}
              </h2>
            </div>
          </div>

          <div className="flex flex-col bg-gray-100 h-fit p-4 rounded-md gap-4 justify-center items-center text-[12px] md:text-[18px] font-bold ">
            {disabledContinueButton ? (
              <button
                onClick={handlerDisabledButton}
                className="px-8 py-3 text-[12px] md:text-[18px] bg-stone-300 bg-opacity-90 text-white font-bold rounded-md hover:bg-slate-400 focus:outline-none focus:ring-2 focus:ring-stone-200"
              >
                Completar datos para continuar
              </button>
            ) : (
              <NavLink
                to="/cart/delivery"
                className="px-8 py-3 text-[12px] md:text-[18px] bg-slate-400 bg-opacity-90 text-white font-bold rounded-md hover:bg-green-500"
              >
                Continuar
              </NavLink>
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
      </div>
    </div>
  );
};

export default CartUserData;
