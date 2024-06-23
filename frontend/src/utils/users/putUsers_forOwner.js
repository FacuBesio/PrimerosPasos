import axios from "../../config/axios";

const putUsers_forOwner = async (newUser, navigate, owner_id) => {
  let { id, enabled, role } = newUser;
  const UserBody = { owner_id, id, enabled, role};

  console.log("UserBody: ", UserBody);
  try {
    const response = await axios.put(`/admin/users`, UserBody);
    console.log("response.data: ", response.data);
    response.data.updated && navigate("/admin/manageUsers");
  } catch (error) {
    console.error("Error al actualizar el usuario:", error);
  }

};

export default putUsers_forOwner;
