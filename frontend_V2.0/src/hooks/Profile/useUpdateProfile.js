import { useEffect, useState } from "react";
import createInputValidator from "../../utils/profile/createInputValidator";
import getUserById from "../../services/Users/getUserById";

const useUpdateProfile = () => {
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

  useEffect(() => {
    const { errors_states, disabled_result } = createInputValidator(
      userProfile,
      errors
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
