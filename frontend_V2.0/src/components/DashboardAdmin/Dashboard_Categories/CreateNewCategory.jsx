import { Link } from "react-router-dom";
import useLoadEffect from "../../../hooks/Effects/useLoadEffect";
import { back_button, invisible, transition_200, visible } from "../../../styles";
import CreateCategory_Form from "../../Forms/categories/create/CreateCategory_Form";


const CreateNewCategory = () => {
  const { loadEffect } = useLoadEffect();
  const form_visibility = loadEffect ? visible : invisible;

  return (
    <div
      className={`rounded-lg flex flex-col w-full items-center gap-4 ${transition_200} ${form_visibility}`}
    >
      <CreateCategory_Form />
     
      <Link
        to="/admin/manageCategories"
        className={back_button}
      >
        VOLVER
      </Link>
    </div>
  );
};

export default CreateNewCategory;
