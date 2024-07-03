import axios from "../../../src/config/axios";
import showUpdateNotification from "../userProfile/showUpdateNotification";

const putUser = async (user) => {
  const userDataStorage = JSON.parse(window.localStorage.getItem("userData"));
  const {
    id,
    email,
    name,
    country,
    state,
    city,
    street_address,
    street_number,
    ZIP_Code,
    phone,
  } = user;

  try {
    const putUserUpdate = await axios.put(`/users`, {
      id,
      email,
      name,
      country,
      state,
      city,
      street_address,
      street_number,
      ZIP_Code,
      phone,
    });
    console.log("putUserUpdate: ", putUserUpdate);
    if (putUserUpdate.data.updated) {
      const { id, enabled, role, name, email } = putUserUpdate.data.user;
      const img = userDataStorage ? userDataStorage.img : null;
      const userData = { id, enabled, role, name, email, img };
      window.localStorage.setItem("userData", JSON.stringify(userData));
      showUpdateNotification(`Tus datos fueron actualizados exitosamente.`);
    } else {
      console.error("Response data structure unexpected:", putUserUpdate.data);
    }
  } catch (error) {
    console.error("Error al actualizar el usuario:", error);
  }
};

export default putUser;
