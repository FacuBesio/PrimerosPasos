import axios from "../../config/axios";

const getPurchases = async () => {
  try {
    const response = await axios.get(`/purchases`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener las compras:", error);
  }
};

export default getPurchases;
