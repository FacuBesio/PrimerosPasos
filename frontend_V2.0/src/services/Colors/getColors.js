import axios from "../../config/axios";

const getColors = async () => {
  try {
    const response = await axios.get(`/colors`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener colores:", error);
  }
};

export default getColors;
