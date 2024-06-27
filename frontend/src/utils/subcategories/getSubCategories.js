import axios from "../../config/axios";

const getSubCategories = async (setAllSubCategories) => {
  try {
    const response = await axios.get(`/subcategories`);
    setAllSubCategories(response.data)
  } catch (error) {
    console.error("Error al obtener Categorías:", error);
  }
};

export default getSubCategories;