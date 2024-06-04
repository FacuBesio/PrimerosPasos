import axios from "../../config/axios";

const getProductById = async (id, setProduct, setLoading) => {
  try {
    const response = await axios.get(`/products/${id}`);
    setProduct(response.data);
    setLoading(false);
  } catch (error) {
    console.error("Error al obtener producto:", error);
  }
};

export default getProductById;
