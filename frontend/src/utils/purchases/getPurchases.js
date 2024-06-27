import axios from "../../config/axios";

const getPurchases = async ( setAllPurchases ) => {
    try {
      const response = await axios.get(`/purchases`);
      setAllPurchases(response.data);
    } catch (error) {
      console.error("Error al obtener Usuarios:", error);
    }
  };
  
  export default getPurchases;
  