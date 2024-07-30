import axios from "../../config/axios";

const deleteProductById = async (id) => {
  try {
    const response = await axios.delete(`/products/${id}`);
    return response.data;
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
