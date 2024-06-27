import axios from "../../config/axios";

const getUserById = async (id, setNewUser) => {
  try {
    const response = await axios.get(`/users/${id}`);
    setNewUser && setNewUser(response.data.user);
  } catch (error) {
    console.error("Error al obtener Productos:", error);
  }
};

export default getUserById;
