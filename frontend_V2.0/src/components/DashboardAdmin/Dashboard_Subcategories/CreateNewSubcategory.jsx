import { Link } from "react-router-dom";
import useLoadEffect from "../../../hooks/Effects/useLoadEffect";
import { back_button, invisible, transition_200, visible } from "../../../styles";
import CreateSubcategory_Form from "../../Forms/subcategories/create/CreateSubcategory_Form";


const CreateNewSubcategory = () => {
  const { loadEffect } = useLoadEffect();
  const form_visibility = loadEffect ? visible : invisible;

  return (
    <div
      className={`rounded-lg flex flex-col w-full items-center gap-4 ${transition_200} ${form_visibility}`}
    >
      <CreateSubcategory_Form />
     
      <Link
        to="/admin/manageSubcategories"
        className={back_button}
      >
        VOLVER
      </Link>
    </div>
  );
};

export default CreateNewSubcategory;
