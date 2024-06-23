import axios from "../../config/axios";
import showDeleteNotification from "./showDeleteNotification";

const deleteProductById = async (id, name, setRemoveState) => {
  try {
    const response = await axios.delete(`/products/${id}`);
    console.log("response.data: ", response.data);
    setRemoveState(response.data);
    response.data.removed &&
      showDeleteNotification(
        `El producto '${name}' se ha eliminado correctamente.`
      );
  } catch (error) {
    console.error("Error al eliminar producto:", error);
  }
};

export default deleteProductById;
