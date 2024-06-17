import axios from "../../config/axios";

const getColors = async (setAllColors) => {
  try {
    const response = await axios.get(`/colors`);
    setAllColors(response.data)
  } catch (error) {
    console.error("Error al obtener Colores:", error);
  }
};

export default getColors;