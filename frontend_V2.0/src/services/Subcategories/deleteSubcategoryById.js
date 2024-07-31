import axios from "../../config/axios";

const deleteSubcategoryById = async (id) => {
  try {
    const response = await axios.delete(`/subcategories/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error al eliminar subcategoría:", error);
  }
};

export default deleteSubcategoryById;
