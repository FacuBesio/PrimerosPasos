import axios from "../../config/axios";

const deleteUserById = async (id) => {
  try {
    const response = await axios.delete(`/users/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error al eliminar usuario:", error);
  }
};

export default deleteUserById;
