import axios from "../../config/axios";

const getSizes = async (setAllSizes) => {
  try {
    const response = await axios.get(`/sizes`);
    setAllSizes(response.data)
  } catch (error) {
    console.error("Error al obtener Talles:", error);
  }
};

export default getSizes;