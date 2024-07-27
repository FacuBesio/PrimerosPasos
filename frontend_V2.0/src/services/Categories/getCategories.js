import axios from "../../config/axios";

const getCategories = async () => {
  try {
    const response = await axios.get(`/categories`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener categorías:", error);
  }
};

export default getCategories;
