import { Link, useParams } from "react-router-dom";
import { back_button, invisible, transition_200, visible } from "../../../styles";
import useLoadEffect from "../../../hooks/Effects/useLoadEffect";
import UpdateCategory_Form from "../../Forms/categories/update/UpdateCategory_Form";

const UpdateCategory = () => {
  const { id } = useParams();
  const { loadEffect } = useLoadEffect();
  const form_visibility = loadEffect ? visible : invisible;

  return (
    <div
      className={`rounded-lg flex flex-col w-full items-center gap-4 ${transition_200} ${form_visibility}`}
    >
      <UpdateCategory_Form id={id} />

      <Link
        to="/admin/manageCategories"
        className={back_button}
      >
        VOLVER
      </Link>
    </div>
  );
};

export default UpdateCategory;
