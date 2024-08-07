import axios from "../../config/axios";

const getPurchasesByUser = async (id) => {
  try {
    const response = await axios.get(`/purchases?filterUsers=${id}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error al obtener las compras:", error);
  }
};

export default getPurchasesByUser;
