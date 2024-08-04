import { Link, useParams } from "react-router-dom";
import { back_button, invisible, transition_200, visible } from "../../../styles";
import useLoadEffect from "../../../hooks/Effects/useLoadEffect";
import UpdateSubcategory_Form from "../../Forms/subcategories/update/UpdateSubcategory_Form";

const UpdateSubcategory = () => {
  const { id } = useParams();
  const { loadEffect } = useLoadEffect();
  const form_visibility = loadEffect ? visible : invisible;

  return (
    <div
      className={`rounded-lg flex flex-col w-full items-center gap-4 ${transition_200} ${form_visibility}`}
    >
      <UpdateSubcategory_Form id={id} />

      <Link
        to="/admin/manageSubcategories"
        className={back_button}
      >
        VOLVER
      </Link>
    </div>
  );
};

export default UpdateSubcategory;
