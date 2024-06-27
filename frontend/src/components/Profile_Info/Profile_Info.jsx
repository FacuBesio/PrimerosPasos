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

const Profile_Info = () => {
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

  console.log("userProfile: ", userProfile);

  useEffect(() => {
    const userData = JSON.parse(window.localStorage.getItem("userData"));
    getUserById(userData.id, setUserProfile);
  }, []);

  const handlerSubmit = async (event) => {
    event.preventDefault();
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
        <div className="w-full flex flex-col gap-1 text-center justify-center items-center">
          <NameAndEmail_input userProfile={userProfile} />
          <CountryAndState_input userProfile={userProfile} />
          <City_input userProfile={userProfile} />
          <Street_input userProfile={userProfile} />
          <Phone_input userProfile={userProfile} />
        </div>

        <div className="formButton w-full flex justify-center items-center ">
        <Link to="/profile/personalInfo/update">
          <button
            type="submit"
            className="px-8 py-3 mt-2 bg-slate-500 text-white font-bold rounded-md hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            ACTUALIZAR DATOS
          </button>
          </Link>
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

export default Profile_Info;
