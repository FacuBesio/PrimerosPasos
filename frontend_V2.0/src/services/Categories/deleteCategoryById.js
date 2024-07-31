import axios from "../../config/axios";

const deleteCategoryById = async (id) => {
  try {
    const response = await axios.delete(`/categories/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error al eliminar categoría:", error);
  }
};

export default deleteCategoryById;
