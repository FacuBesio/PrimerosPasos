import axios from "../../config/axios";

const getBrands = async (setAllBrands) => {
  try {
    const response = await axios.get(`/brands`);
    setAllBrands(response.data);
  } catch (error) {
    console.error("Error al obtener Categorías:", error);
  }
};

export default getBrands;