import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import createInputValidator from "../../utils/userProfile/createInputValidator";
import disabledSubmitValidator from "../../utils/userProfile/disabledSubmitValidator";
import CountryAndState_input from "./InputsForm/CountryAndState_input";
import City_input from "./InputsForm/City_input";
import Street_input from "./InputsForm/Street_input";
import Phone_input from "./InputsForm/Phone_input";
import NameAndEmail_input from "./InputsForm/NameAndEmail_input";
import getUserById from "../../utils/users/getUserById";
import putUser from "../../utils/users/putUsers";


const ProfileForm = () => {
  const [disabledButton, setDisabledButton] = useState(true);
  const [errors, setErrors] = useState({});
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
  const [editable, setEditable] = useState(false);

  console.log("userProfile: ", userProfile);

  useEffect(() => {
    const userData = JSON.parse(window.localStorage.getItem("userData"));
    getUserById(userData.id, setUserProfile);
  }, [editable]);

  useEffect(() => {
    createInputValidator(userProfile, errors, setErrors, setDisabledButton);
  }, [userProfile]);

  const handlerChange = (event) => {
    const property = event.target.name;
    let value = event.target.value;
    setUserProfile({ ...userProfile, [property]: value });
  };

  const handlerSubmit = async (event) => {
    event.preventDefault();
    await putUser(userProfile);
    setEditable(false);
  };

  const handlerDisabledButton = (event) => {
    event.preventDefault();
    disabledSubmitValidator(userProfile, errors, setErrors);
  };

  const handleModify = (event) => {
    event.preventDefault();
    setEditable(!editable);
  };

  const handleCancel = (event) => {
    event.preventDefault();
    setEditable(false);
  };

  return (
    <div className="w-full rounded-lg flex flex-col items-center p-4 gap-5">
      <form
        className="w-1/2 bg-[#D3C4E3] rounded-lg px-4 p-8 flex flex-col items-center"
        onSubmit={handlerSubmit}
      >
        <h1 className="text-white font-bold text-xl rounded-md">
          DATOS PERSONALES
        </h1>
        <div className="w-full flex flex-col gap-1 items-center">
          <NameAndEmail_input
            handlerChange={handlerChange}
            errors={errors}
            userProfile={userProfile}
            editable={editable}
          />
          <CountryAndState_input
            handlerChange={handlerChange}
            errors={errors}
            userProfile={userProfile}
            editable={editable}
          />
          <City_input
            handlerChange={handlerChange}
            errors={errors}
            userProfile={userProfile}
            editable={editable}
          />
          <Street_input
            handlerChange={handlerChange}
            errors={errors}
            userProfile={userProfile}
            editable={editable}
          />
          <Phone_input
            handlerChange={handlerChange}
            errors={errors}
            userProfile={userProfile}
            editable={editable}
          />
        </div>

        <div className="formButton w-full flex justify-center items-center ">
          {!editable ? (
            <button
              onClick={handleModify}
              className="px-8 py-3 bg-slate-400 text-white font-bold rounded-md hover:bg-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-400"
            >
              ACTUALIZAR
            </button>
          ) : disabledButton ? (
            <div className="flex gap-2">
              <button
                id="buttonDisabled"
                onClick={handlerDisabledButton}
                className="px-8 py-3 bg-slate-400 text-white font-bold rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200"
              >
                CONFIRMAR
              </button>
              <button
                id="buttonDisabled"
                onClick={handleCancel}
                className="px-8 py-3 bg-red-300 text-white font-bold rounded-md hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-red-200"
              >
                CANCELAR
              </button>
            </div>
          ) : (
            <div className="flex gap-4">
              <button
                type="submit"
                id="buttonEnabled"
                className="px-8 py-3 bg-green-500 bg-opacity-90 text-white font-bold rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
              >
                CONFIRMAR
              </button>
              <button
                id="buttonDisabled"
                onClick={handleCancel}
                className="px-8 py-3 bg-slate-400 text-white font-bold rounded-md hover:bg-red-500/75 focus:outline-none focus:ring-2 focus:ring-red-200"
              >
                CANCELAR
              </button>
            </div>
          )}
        </div>
      </form>
      <Link
        to="/"
        className="px-6 py-3 bg-red-300 text-white font-bold rounded-md hover:bg-red-400
        hover:ring-red-400 focus:outline-none focus:ring-2 focus:ring-red-200"
      >
        VOLVER
      </Link>
    </div>
  );
};

export default ProfileForm;
