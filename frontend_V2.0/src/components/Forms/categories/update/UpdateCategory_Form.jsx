import { useNavigate } from "react-router-dom";
import showUpdateNotification from "../../../../utils/categories/showUpdateNotification";
import Enabled_input from "./InputsForm/Enabled_input";
import Name_input from "./InputsForm/Name_input";
import { disabled_button, enabled_button } from "../../../../styles";
import useUpdateCategory from "../../../../hooks/Categories/useUpdateCategory";
import putCategories from "../../../../services/Categories/putCategories";

const UpdateCategory_Form = ({ id }) => {
  const navigate = useNavigate();
  const { updateCategory, setUpdateCategory, disabled, errors } =
    useUpdateCategory(id);

  const handlerChange = (event) => {
    const property = event.target.name;
    let value = event.target.value;
    setUpdateCategory({ ...updateCategory, [property]: value });
  };

  const handlerSubmit = async (event) => {
    event.preventDefault();
    const response = await putCategories(updateCategory);
    if (response.updated) {
      showUpdateNotification(
        `Se actualizó exitosamente la categoría ${response.category.name}`
      );
      navigate("/admin/manageCategories");
    }
  };

  return (
    <form
      className=" bg-gray-600 bg-opacity-75 p-4 rounded-lg flex flex-col items-center w-1/2"
      onSubmit={handlerSubmit}
    >
      <h1 className="text-white font-bold py-2 rounded-md text-[18px] md:text-[22px]">
        ACTUALIZAR CATEGORÍA
      </h1>
      <div className="w-full flex flex-col gap-3 items-center">
        <Enabled_input
          updateCategory={updateCategory}
          setUpdateCategory={setUpdateCategory}
        />
        <Name_input
          handlerChange={handlerChange}
          errors={errors}
          updateCategory={updateCategory}
        />
      </div>

      <div className="formButton w-full flex justify-center mb-2 items-center">
        {disabled ? (
          <button
            id="buttonDisabled"
            disabled={disabled}
            className={disabled_button}
          >
            ACTUALIZAR
          </button>
        ) : (
          <button type="submit" id="buttonEnabled" className={enabled_button}>
            ACTUALIZAR
          </button>
        )}
      </div>
    </form>
  );
};

export default UpdateCategory_Form;
