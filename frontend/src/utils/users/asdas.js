import axios from "axios";


const postUsers = async (email) => {

  try {
    const postUserResponse = await axios.post(`/users`, { email });
 console.log(postUserResponse.data);
  } catch (error) {
    console.error("Error al obtener Productos:", error);
  }
};