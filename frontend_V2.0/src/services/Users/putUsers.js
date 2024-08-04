import axios from "../../config/axios";

const putUsers = async (updateUser, owner_id = 1) => {
  const { id, enabled, role } = updateUser;
  const UserBody = { owner_id, id, enabled, role};

  try {
    const response = await axios.put(`/admin/users`, UserBody);
    return response.data;
  } catch (error) {
    console.error("Error al actualizar el usuario:", error);
  }
};

export default putUsers;
