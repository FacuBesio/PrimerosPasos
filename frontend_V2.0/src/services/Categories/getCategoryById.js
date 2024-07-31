import axios from "../../config/axios";

const getCategoryById = async (id) => {
  try {
    const response = await axios.get(`/categories/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error al obtener la categoría con id '${id}':`, error);
  }
};

export default getCategoryById;
