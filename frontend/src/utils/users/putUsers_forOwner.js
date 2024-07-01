import axios from "../../config/axios";
import showUpdateNotification from "./showUpdateNotification";

const putUsers_forOwner = async (newUser, navigate, owner_id) => {
  let { id, enabled, role } = newUser;
  const UserBody = { owner_id, id, enabled, role};

  console.log("UserBody: ", UserBody);
  try {
    const response = await axios.put(`/admin/users`, UserBody);
       if (response.data.updated) {
      showUpdateNotification(
        `Se actualizó exitosamente al usuario ${response.data.user.name}`
      );
      navigate("/admin/manageUsers");
    }
  } catch (error) {
    console.error("Error al actualizar el usuario:", error);
  }

};

export default putUsers_forOwner;
