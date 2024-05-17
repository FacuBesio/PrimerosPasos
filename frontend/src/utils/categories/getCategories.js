import axios from "../../config/axios";

const getCategories = async (setCategories) => {
  try {
    const response = await axios.get(`/categories`);
    setCategories(response.data);
  } catch (error) {
    console.error("Error al obtener Categorías:", error);
  }
};

export default getCategories;