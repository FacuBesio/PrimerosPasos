import axios from "../../config/axios";
import categoryRecovery from "../../utils/products/categoryRecovery";
import querysValidaitor from "../../utils/products/querysValidaitor";

const getProducts = async (querysInput) => {
  let allQuerys = "";
  const isQueryActive = querysValidaitor(querysInput);
  isQueryActive.result && (allQuerys = isQueryActive.querys);

  try {
      const response = await axios.get(`/products?${allQuerys}`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener productos:", error);
  }
};

export default getProducts;
