import axios from "../../../src/config/axios";

const productInitializer = async () => {
   try {
  await axios.get(`/products`);
  } catch (error) {
    console.error("Error al obtener Productos:", error);
  }
};

export default productInitializer;
