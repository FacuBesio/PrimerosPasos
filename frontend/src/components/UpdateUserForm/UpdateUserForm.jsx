import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Role_input from "./InputsForm/Role_input";
import disabledSubmitValidator from "../../utils/users/disabledSubmitValidator";
import Enabled_input from "./InputsForm/Enabled_input";
import createInputValidator from "../../utils/users/createInputValidator";
import putUsers_forOwner from "../../utils/users/putUsers_forOwner";
import getUserById from "../../utils/users/getUserById";
import User_info from "./InputsForm/User_info";
import CanNot_UpdateNotification from "../../utils/users/CanNot_UpdateNotification";

const UpdateUserForm = ({ id }) => {
  const navigate = useNavigate();
  const [disabledButton, setDisabledButton] = useState(true);
  const [errors, setErrors] = useState({});
  const [newUser, setNewUser] = useState({
    name: "",
  });

  if (newUser.id === 1) {
    CanNot_UpdateNotification(
      newUser.name,
      `Los datos del owner no pueden ser modificados por este medio.`
    );
  navigate("/admin/manageUsers");
}

  const owner_id = 1;

  useEffect(() => {
    getUserById(id, setNewUser);
  }, []);

  useEffect(() => {
    createInputValidator(newUser, errors, setErrors, setDisabledButton);
  }, [newUser]);

  const handlerChange = (event) => {
    const property = event.target.name;
    let value = event.target.value;
    setNewUser({ ...newUser, [property]: value });
  };

  const handlerSubmit = async (event) => {
    event.preventDefault();
    putUsers_forOwner(newUser, navigate, owner_id);
  };

  const handlerDisabledButton = (event) => {
    event.preventDefault();
    disabledSubmitValidator(newUser, errors, setErrors);
  };

  return (
    <div className="w-full rounded-lg flex flex-col items-center p-4 gap-5">
      <form
        className="w-1/2 bg-gray-600 bg-opacity-75 rounded-lg px-4 p-8 flex flex-col items-center"
        onSubmit={handlerSubmit}
      >
        <h1 className="text-white font-bold  pt-2 rounded-md">
          ACTUALIZAR PERMISOS Y ALCANCE DE USUARIO
        </h1>
        <div className="w-full flex flex-col gap-1 items-center">
          <Enabled_input newUser={newUser} setNewUser={setNewUser} />
          <Role_input
            handlerChange={handlerChange}
            errors={errors}
            newUser={newUser}
          />
          <User_info newUser={newUser} />
        </div>

        <div className="formButton w-full flex justify-center items-center ">
          {disabledButton ? (
            <button
              id="buttonDisabled"
              onClick={handlerDisabledButton}
              className="px-8 py-3 bg-slate-400 text-white font-bold rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200"
            >
              ACTUALIZAR
            </button>
          ) : (
            <button
              type="submit"
              id="buttonEnabled"
              disabled={disabledButton}
              className="px-8 py-3 bg-green-500 bg-opacity-90 text-white font-bold rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              ACTUALIZAR
            </button>
          )}
        </div>
      </form>
      <Link
        to="/admin/manageUsers"
        className="px-6 py-3 bg-red-300 text-white font-bold rounded-md hover:bg-red-400
        hover:ring-red-400 focus:outline-none focus:ring-2 focus:ring-red-200"
      >
        VOLVER
      </Link>
    </div>
  );
};

export default UpdateUserForm;
