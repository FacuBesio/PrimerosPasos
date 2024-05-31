import axios from "../../../src/config/axios";
import loginUserInitializer from "./loginUserInitializer";

const postUsers = async (user) => {
  const { email, name } = user;
  try {
    const postUserResponse = await axios.post(`/users`, { email, name });
    if (postUserResponse.data.user.id) {
      const { id, enabled, role, name, email, orders } =
        postUserResponse.data.user;
      const img = user.picture;
      const userData = { id, enabled, role, name, email, img };
      window.localStorage.setItem("userData", JSON.stringify(userData));
      loginUserInitializer(id, orders)
    }
  } catch (error) {
    console.error("Error al obtener Productos:", error);
  }
};

export default postUsers;
