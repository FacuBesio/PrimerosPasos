import axios from "../../../src/config/axios";



const getAllPurchases = async ( setAllPurchases ) => {
    try {
      const response = await axios.get(`/purchases`);
      setAllPurchases(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error al obtener Usuarios:", error);
    }
  };
  
  export default getAllPurchases;
  