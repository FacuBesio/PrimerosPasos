import axios from "../../../src/config/axios";
import getFilterByCategory from "./prueba4";

const getProducts = async (setAllProducts, page, filter) => {
  try {
    let testArray = [filter];

    let palabraUnida = testArray.join("&filterCategories=");

    let string = "filterCategories=";

    if (testArray.length > 0) {
      string = string + palabraUnida;
    } else {
      string = "";
    }
    console.log(string);

    // getFilterByCategory(setAllProducts, filter);

    const response = await axios.get(`/products?page=${page}&${string}`);
    setAllProducts(response.data);
  } catch (error) {
    console.error("Error al obtener Productos:", error);
  }
};

export default getProducts;
