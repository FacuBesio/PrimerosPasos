import axios from "../../config/axios";

const deleteProductById = async (id) => {
  try {
    const response = await axios.delete(`/products/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error al eliminar producto:", error);
  }
};

export default deleteProductById;
