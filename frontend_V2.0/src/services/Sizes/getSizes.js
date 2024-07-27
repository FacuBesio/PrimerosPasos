import axios from "../../config/axios";

const getSizes = async () => {
  try {
    const response = await axios.get(`/sizes`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener talles:", error);
  }
};

export default getSizes;
