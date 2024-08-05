import axios from "../../../src/config/axios";

const postUsers = async (user) => {
  const { email, name } = user;
  try {
    const response = await axios.post(`/users`, { email, name });
    return response.data;
  } catch (error) {
    console.error("Error al obtener Productos:", error);
  }
};

export default postUsers;
