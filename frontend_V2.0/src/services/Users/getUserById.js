import axios from "../../config/axios";

const getUserById = async (id) => {
  try {
    const response = await axios.get(`/users/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error al obtener el usuario con id '${id}':`, error);
  }
};

export default getUserById;
