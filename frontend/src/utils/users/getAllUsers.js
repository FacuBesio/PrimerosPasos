import axios from "../../../src/config/axios";


const getAllUsers = async ( setAllUsers ) => {
    try {
      const response = await axios.get(`/users`);
      setAllUsers(response.data.orders);
      console.log(response.data);
    } catch (error) {
      console.error("Error al obtener Usuarios:", error);
    }
  };
  
  export default getAllUsers;
  