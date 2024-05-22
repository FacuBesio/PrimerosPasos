import axios from "../../../src/config/axios";

const getProducts = async (setAllProducts, page, searchBar, filter, sorter) => {
  const finder = `brand_or_name=${searchBar}`
   try {
    const response = await axios.get(`/products?page=${page}&${finder}&${filter}&${sorter}`);
    setAllProducts(response.data);
  } catch (error) {
    console.error("Error al obtener Productos:", error);
  }
};

export default getProducts;
