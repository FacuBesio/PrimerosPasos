import axios from "../../config/axios";
import loginUserInitializer from "./loginUserInitializer";

const getUserById = async (id, setUser) => {
  try {
    const response = await axios.get(`/users/${id}`);
    setUser(response.data.user);
  } catch (error) {
    console.error("Error al obtener Productos:", error);
  }
};

export default getUserById;
