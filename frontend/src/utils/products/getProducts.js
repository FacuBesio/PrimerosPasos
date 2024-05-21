import axios from "../../../src/config/axios";

const getProducts = async (setAllProducts, page, filter, sorter) => {
  console.log("sorter: ", sorter);

   try {
    const response = await axios.get(`/products?page=${page}&${filter}&${sorter}`);
    setAllProducts(response.data);
  } catch (error) {
    console.error("Error al obtener Productos:", error);
  }
};

export default getProducts;
