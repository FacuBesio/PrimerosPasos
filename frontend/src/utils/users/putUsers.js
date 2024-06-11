import axios from "../../../src/config/axios";

const putUser = async (user) => {
  const pictureStorage = JSON.parse(window.localStorage.getItem("userData"));
  const { id, email, name, country, state, city, street_address, street_number, ZIP_code, phone } = user;

  try {
    const putUserUpdate = await axios.put(`/users`, { id, email, name, country, state, city, street_address, street_number, ZIP_code, phone });
    if (putUserUpdate.data && putUserUpdate.data.user && putUserUpdate.data.user.id) {
      const { id, enabled, role, name, email } = putUserUpdate.data.user;
      const img = pictureStorage ? pictureStorage.img : null;
      const userData = { id, enabled, role, name, email, img };
      window.localStorage.setItem("userData", JSON.stringify(userData));
    } else {
      console.error("Response data structure unexpected:", putUserUpdate.data);
    }
  } catch (error) {
    console.error("Error al actualizar el usuario:", error);
  }
};

export default putUser;
