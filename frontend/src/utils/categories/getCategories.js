import axios from "../../config/axios";

const getCategories = async (setState) => {
  try {
    const response = await axios.get(`/categories`);
    const allCategories = response.data;
    setState((prevState) => ({ ...prevState, allCategories }));
  } catch (error) {
    console.error("Error al obtener Categorías:", error);
  }
};

export default getCategories;