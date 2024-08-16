import { useEffect, useState } from "react";
import createInputValidator from "../../utils/profile/createInputValidator";
import getUserById from "../../services/Users/getUserById";
import { useLocation } from "react-router-dom";

const useUpdateProfile = () => {
  const location = useLocation();
  const [errors, setErrors] = useState({});
  const [disabled, setDisabled] = useState(true);
  const [editable, setEditable] = useState(false);
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

  let cartNavegationActive;
  if (location.pathname.includes("cart")) {
    cartNavegationActive = true;
  }
  useEffect(() => {
    const { errors_states, disabled_result } = createInputValidator(
      userProfile,
      errors,
      cartNavegationActive
    );
    setErrors(errors_states);
    setDisabled(disabled_result);
  }, [userProfile]);

  useEffect(() => {
    const userData = JSON.parse(window.localStorage.getItem("userData"));
    getUserById(userData.id).then((data) => setUserProfile(data.user));
  }, [editable]);

  return {
    userProfile,
    setUserProfile,
    editable,
    setEditable,
    disabled,
    setDisabled,
    errors,
    setErrors,
  };
};

export default useUpdateProfile;
