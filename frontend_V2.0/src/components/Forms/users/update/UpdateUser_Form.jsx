import { useNavigate } from "react-router-dom";
import showUpdateNotification from "../../../../utils/users/showUpdateNotification";
import { enabled_button } from "../../../../styles";
import Enabled_input from "./InputsForm/Enabled_input";
import Role_input from "./InputsForm/Role_input";
import User_info from "./InputsForm/User_info";
import useUpdateUser from "../../../../hooks/Users/useUpdateUser";
import putUsers from "../../../../services/Users/putUsers";

const UpdateUser_Form = ({ id }) => {

  const { updateUser, setUpdateUser } = useUpdateUser(id);

  const handlerChange = (event) => {
    const property = event.target.name;
    let value = event.target.value;
    setUpdateUser({ ...updateUser, [property]: value });
  };

  const handlerSubmit = async (event) => {
    event.preventDefault();
    const response = await putUsers(updateUser);
    if (response.updated) {
      showUpdateNotification(
        `Se actualizó exitosamente el usuario/a ${response.user.name}`
      );
      navigate("/admin/manageUsers");
    }
  };

  return (
    <form
      className=" bg-gray-600 bg-opacity-75 p-4 rounded-lg flex flex-col items-center w-1/2"
      onSubmit={handlerSubmit}
    >
      <h1 className="text-white font-bold  py-2 rounded-md text-[18px] md:text-[22px]">
        ACTUALIZAR USUARIO/A
      </h1>
      <div className="w-full flex flex-col gap-3 items-center">
        <Enabled_input updateUser={updateUser} setUpdateUser={setUpdateUser} />
        <Role_input handlerChange={handlerChange} updateUser={updateUser} />
        <User_info updateUser={updateUser} />
      </div>

      <div className="formButton w-full flex justify-center mb-2 items-center">
        <button type="submit" className={enabled_button}>
          ACTUALIZAR
        </button>
      </div>
    </form>
  );
};

export default UpdateUser_Form;
