import axios from "../../../src/config/axios";
import querysGenerator from "./querysGenerator";

const getProducts = async (setAllProducts, page, searchBar, filter, sorter) => {
  const querys = querysGenerator(page, searchBar, filter, sorter);
  console.log("querys: ", querys);

  try {
    const response = await axios.get(`/products?${querys.result}`);
    setAllProducts(response.data);
  } catch (error) {
    console.error("Error al obtener Productos:", error);
  }
};

export default getProducts;
