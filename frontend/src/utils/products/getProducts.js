import axios from "../../../src/config/axios";

const getProducts = async (setAllProducts, page, filter) => {
   try {
    const response = await axios.get(`/products?page=${page}&${filter}`);
    setAllProducts(response.data);
  } catch (error) {
    console.error("Error al obtener Productos:", error);
  }
};

export default getProducts;
