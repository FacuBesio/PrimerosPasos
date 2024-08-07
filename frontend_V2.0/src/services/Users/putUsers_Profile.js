import axios from "../../config/axios";

const putUser = async (user) => {
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
    const response = await axios.put(`/users`, {
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
    return response.data;
  } catch (error) {
    console.error("Error al actualizar el usuario:", error);
  }
};

export default putUser;
