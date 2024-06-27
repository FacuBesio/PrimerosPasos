import axios from "../../config/axios";

const getUserById = async (id, setUser) => {
  try {
    const response = await axios.get(`/users/${id}`);
    setUser && setUser(response.data.user);
  } catch (error) {
    console.error("Error al obtener Productos:", error);
  }
};

export default getUserById;
