import axios from "../../config/axios";

const getUsers = async () => {
  try {
    const response = await axios.get(`/users`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener los usuarios:", error);
  }
};

export default getUsers;
