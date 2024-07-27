import axios from "../../config/axios";

const getProductById = async (id) => {
  try {
    const response = await axios.get(`/products/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error al obtener el producto con id '${id}':`, error);
  }
};

export default getProductById;
