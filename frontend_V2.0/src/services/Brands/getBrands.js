import axios from "../../config/axios";

const getBrands = async () => {
  try {
    const response = await axios.get(`/brands`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener marcas:", error);
  }
};

export default getBrands;
