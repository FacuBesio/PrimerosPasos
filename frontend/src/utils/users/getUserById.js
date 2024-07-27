import axios from "../../config/axios";
import completedInfoValidator from "../cart/completedInfoValidator";

const getUserById = async (id, setUser, setDisabledContinueButton) => {
  try {
    const response = await axios.get(`/users/${id}`);
    setUser && setUser(response.data.user);
    const user = response.data.user
    const isComplete = completedInfoValidator(user)
    setDisabledContinueButton && setDisabledContinueButton(!isComplete)
    console.log("user: ", user);
  } catch (error) {
    console.error("Error al obtener Productos:", error);
  }
};

export default getUserById;
