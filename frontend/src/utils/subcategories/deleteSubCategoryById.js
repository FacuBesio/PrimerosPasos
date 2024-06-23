import axios from "../../config/axios";
import showDeleteNotification from "./showDeleteNotification";

const deleteSubCategoryById = async (id, name, setRemoveState) => {
  try {
    const response = await axios.delete(`/subcategories/${id}`);
    console.log("response.data: ", response.data);
    setRemoveState(response.data);
    response.data.removed &&
      showDeleteNotification(
        `La subcategoría '${name}' se ha eliminado correctamente.`
      );
  } catch (error) {
    console.error("Error al eliminar la subcategoría:", error);
  }
};

export default deleteSubCategoryById;
