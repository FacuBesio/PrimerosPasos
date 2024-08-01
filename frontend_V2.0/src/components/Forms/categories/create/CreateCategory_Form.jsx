import { useNavigate } from "react-router-dom";
import disabledSubmitValidator from "../../../../utils/categories/disabledSubmitValidator";
import { disabled_button, enabled_button } from "../../../../styles";
import showCreateNotification from "../../../../utils/categories/showCreateNotification";
import Name_input from "./InputsForm/Name_input";
import useNewCategory from "../../../../hooks/Categories/useNewCategory";
import postCategories from "../../../../services/Categories/postCategories";

const CreateCategory_Form = () => {
  const navigate = useNavigate();
  const { newCategory, setNewCategory, disabled, errors, setErrors } =
    useNewCategory();

  const handlerChange = (event) => {
    const property = event.target.name;
    let value = event.target.value;
    setNewCategory({ ...newCategory, [property]: value });
  };

  const handlerSubmit = async (event) => {
    event.preventDefault();
    const response = await postCategories(newCategory);
    if (response.created) {
      showCreateNotification(
        `Se creó exitosamente la categoría ${response.category.name}`
      );
      navigate("/admin/manageCategories");
    }
  };

  const handlerDisabledButton = (event) => {
    event.preventDefault();
    disabledSubmitValidator(newCategory, errors, setErrors);
  };

  return (
    <form
      className=" bg-gray-600 bg-opacity-75 p-4 rounded-lg flex flex-col items-center w-1/2"
      onSubmit={handlerSubmit}
    >
      <h1 className="text-white font-bold py-2 rounded-md text-[18px] md:text-[22px]">
        CREAR CATEGORÍA
      </h1>

      <div className="w-full flex flex-col gap-3 items-center">
        <Name_input handlerChange={handlerChange} errors={errors} />
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

export default CreateCategory_Form;
