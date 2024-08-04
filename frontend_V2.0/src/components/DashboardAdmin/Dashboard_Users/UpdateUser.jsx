import { Link, useParams } from "react-router-dom";
import { back_button, invisible, transition_200, visible } from "../../../styles";
import useLoadEffect from "../../../hooks/Effects/useLoadEffect";
import UpdateUser_Form from "../../Forms/users/update/UpdateUser_Form";

const UpdateUser = () => {
  const { id } = useParams();
  const { loadEffect } = useLoadEffect();
  const form_visibility = loadEffect ? visible : invisible;

  return (
    <div
      className={`rounded-lg flex flex-col w-full items-center gap-4 ${transition_200} ${form_visibility}`}
    >
      <UpdateUser_Form id={id} />

      <Link
        to="/admin/manageUsers"
        className={back_button}
      >
        VOLVER
      </Link>
    </div>
  );
};

export default UpdateUser;
