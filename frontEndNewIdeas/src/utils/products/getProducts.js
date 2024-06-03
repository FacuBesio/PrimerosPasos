import axios from "../../../src/config/axios";
import querysGenerator from "./querysGenerator";

const getProducts = async (setAllProducts, page, searchBar, filter, sorter) => {
  const querys = querysGenerator(page, searchBar, filter, sorter);
  let pageSize;

  if (window.innerWidth < 760) {
    pageSize = 4;
  } else {
    pageSize = 12;
  }

  try {
    const response = await axios.get(
      `/products?${querys.result}&pageSize=${pageSize}`
    );
    setAllProducts(response.data);
  } catch (error) {
    console.error("Error al obtener Productos:", error);
  }
};

export default getProducts;
