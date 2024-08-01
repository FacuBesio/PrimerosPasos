import { useNavigate } from "react-router-dom";
import showUpdateNotification from "../../../../utils/subcategories/showUpdateNotification";
import Enabled_input from "./InputsForm/Enabled_input";
import Name_input from "./InputsForm/Name_input";
import Categories_input from "./InputsForm/Categories_input";
import { disabled_button, enabled_button } from "../../../../styles";
import useUpdateSubcategory from "../../../../hooks/Subcategories/useUpdateSubcategory";
import putSubCategories from "../../../../services/Subcategories/putSubCategories";

const UpdateSubcategory_Form = ({ id }) => {
  const navigate = useNavigate();
  const { updateSubcategory, setUpdateSubcategory, disabled, errors } =
    useUpdateSubcategory(id);
    console.log("updateSubcategory: ", updateSubcategory);

  const handlerChange = (event) => {
    const property = event.target.name;
    let value = event.target.value;
    setUpdateSubcategory({ ...updateSubcategory, [property]: value });
  };

  const handlerSubmit = async (event) => {
    event.preventDefault();
    const response = await putSubCategories(updateSubcategory);
    console.log("response: ", response);
    if (response.updated) {
      showUpdateNotification(
        `Se actualizó exitosamente la subcategoría ${response.subcategory.name}`
      );
      navigate("/admin/manageSubcategories");
    }
  };

  return (
    <form
      className=" bg-gray-600 bg-opacity-75 p-4 rounded-lg flex flex-col items-center w-1/2"
      onSubmit={handlerSubmit}
    >
       <h1 className="text-white font-bold py-2 rounded-md text-[18px] md:text-[22px]">
          ACTUALIZAR SUBCATEGORÍA
        </h1>
        <div className="w-full flex flex-col gap-5 items-center">
          <Enabled_input
            updateSubcategory={updateSubcategory}
            setUpdateSubcategory={setUpdateSubcategory}
          />
          <Name_input
            handlerChange={handlerChange}
            errors={errors}
            updateSubcategory={updateSubcategory}
          />
          <Categories_input
            handlerChange={handlerChange}
            updateSubcategory={updateSubcategory}
            errors={errors}
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

export default UpdateSubcategory_Form;
