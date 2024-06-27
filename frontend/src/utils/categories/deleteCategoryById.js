import axios from "../../config/axios";
import showDeleteNotification from "./showDeleteNotification";

const deleteCategoryById = async (id, name, setRemoveState) => {
  try {
    const response = await axios.delete(`/categories/${id}`);
    console.log("response.data: ", response.data);
    setRemoveState(response.data);
    response.data.removed &&
      showDeleteNotification(
        `La categoría '${name}' se ha eliminado correctamente.`
      );
  } catch (error) {
    console.error("Error al eliminar la categoría:", error);
  }
};

export default deleteCategoryById;
