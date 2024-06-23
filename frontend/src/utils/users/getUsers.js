import axios from "../../config/axios";

const getUsers = async (setAllUsers) => {
  try {
    const response = await axios.get(`/users`);
    setAllUsers(response.data);
  } catch (error) {
    console.error("Error al obtener Usuarios:", error);
  }
};

export default getUsers;
