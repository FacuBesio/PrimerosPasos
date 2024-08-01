import { useNavigate } from "react-router-dom";
import disabledSubmitValidator from "../../../../utils/subcategories/disabledSubmitValidator";
import { disabled_button, enabled_button } from "../../../../styles";
import showCreateNotification from "../../../../utils/subcategories/showCreateNotification";
import Name_input from "./InputsForm/Name_input";
import Categories_input from "./InputsForm/Categories_input";
import postSubcategories from "../../../../services/Subcategories/postSubcategories";
import useNewSubcategory from "../../../../hooks/Subcategories/useNewSubcategory";

const CreateSubcategory_Form = () => {
  const navigate = useNavigate();
  const { newSubcategory, setNewSubcategory, disabled, errors, setErrors } =
    useNewSubcategory();

  const handlerChange = (event) => {
    const property = event.target.name;
    let value = event.target.value;
    setNewSubcategory({ ...newSubcategory, [property]: value });
  };

  const handlerSubmit = async (event) => {
    event.preventDefault();
    const response = await postSubcategories(newSubcategory);
     if (response.created) {
      showCreateNotification(
        `Se creó exitosamente la subcategoría ${response.subcategory.name}`
      );
      navigate("/admin/manageSubcategories");
    }
  };

  const handlerDisabledButton = (event) => {
    event.preventDefault();
    disabledSubmitValidator(newSubcategory, errors, setErrors);
  };

  return (
    <form
      className=" bg-gray-600 bg-opacity-75 p-4 rounded-lg flex flex-col items-center w-1/2"
      onSubmit={handlerSubmit}
    >
      <h1 className="text-white font-bold py-2 rounded-md text-[18px] md:text-[22px]">
        CREAR SUBCATEGORÍA
      </h1>
      <div className="w-full flex flex-col gap-5 items-center">
        <Name_input handlerChange={handlerChange} errors={errors} />
        <Categories_input
          handlerChange={handlerChange}
          newSubcategory={newSubcategory}
          errors={errors}
        />
      </div>

      <div className="formButton w-full flex justify-center mb-2 items-center">
        {disabled ? (
          <button
            id="buttonDisabled"
            onClick={handlerDisabledButton}
            className={disabled_button}
          >
            CREAR
          </button>
        ) : (
          <button type="submit" id="buttonEnabled" className={enabled_button}>
            CREAR
          </button>
        )}
      </div>
    </form>
  );
};

export default CreateSubcategory_Form;
