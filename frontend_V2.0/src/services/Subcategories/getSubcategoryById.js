import axios from "../../config/axios";

const getSubcategoryById = async (id) => {
  try {
    const response = await axios.get(`/subcategories/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error al obtener la subcategoría con id '${id}':`, error);
  }
};

export default getSubcategoryById;
