import axios from "../../config/axios";

const getSubcategories = async () => {
  try {
    const response = await axios.get(`/subcategories`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener subcategorías:", error);
  }
};

export default getSubcategories;
