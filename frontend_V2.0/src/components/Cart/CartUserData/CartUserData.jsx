import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link, NavLink } from "react-router-dom";
import { invisible, tableStyle, visible } from "../../../styles";
// import UserDataForm from "../../components/UserDataForm/UserDataForm";
import { CloseCircleOutlined } from "@ant-design/icons";
// import updateProfile_InputValidator from "../../utils/cart/updateProfile_InputValidator";
// import disabledSubmitValidator from "../../utils/cart/disabledSubmitValidator";
import useCart from "../../../hooks/Cart/useCart";
import useTotal from "../../../hooks/Cart/useTotal";
import { cartMainStyle } from "../../../styles";
import Header_CartUserData from "./Header_CartUserData";
import useLoadEffect from "../../../hooks/Effects/useLoadEffect";
import ProfileForm from "../../Forms/profile/ProfileForm";
import Buttons_UserData from "../../Buttons/Cart_Buttons/Buttons_UserData";

const CartUserData = () => {
  const { isAuthenticated } = useAuth0();
  const { cart, setCart, handlerRemoveProducts } = useCart();
  const { total } = useTotal(cart);
  const formattedTotal = total.toLocaleString("es-ES");
  const { loadEffect } = useLoadEffect();
  const visibility = loadEffect ? visible : invisible;

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
        <h1 className="text-center py-2 font-bold text-xl text-black/50 px-4 ">
          Revisa tus datos personales, recordá que todos los campos deben estar
          completos para continuar...
        </h1>
      </div>

      <div className="flex flex-col justify-center items-center p-4 gap-4 overflow-auto w-full">
        <div className="flex flex-col gap-2 rounded-md h-fit ">
          <ProfileForm />

          <div className="flex flex-col bg-gray-100 h-fit p-4 rounded-md gap-4 justify-center items-center text-[12px] md:text-[18px] font-bold ">
            <Buttons_UserData />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartUserData;
