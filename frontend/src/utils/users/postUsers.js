import axios from "../../../src/config/axios";

const postUsers = async (user) => {
  const { email, name } = user;
  try {
    const response = await axios.post(`/users`, { email, name });
    if (response.data.user.id) {
      const { id, enabled, role, name, email } = response.data.user;
      const img = user.picture;
      const userData = { id, enabled, role, name, email, img };
      window.localStorage.setItem("userData", JSON.stringify(userData));
      return userData;
    }
  } catch (error) {
    console.error("Error al obtener Productos:", error);
  }
};

export default postUsers;
