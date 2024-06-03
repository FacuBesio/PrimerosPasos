import axios from "../../config/axios";

const getCategories = async (setAllCategories) => {
  try {
    const response = await axios.get(`/categories`);
    setAllCategories(response.data)
  } catch (error) {
    console.error("Error al obtener Categorías:", error);
  }
};

export default getCategories;