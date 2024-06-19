import axios from "../../config/axios";

const postCategories = async (newCategory, navigate) => {
  let { name } = newCategory;
  const categoryBody = { name };

  try {
    const response = await axios.post(`/categories`, categoryBody);
    response.data.created && navigate("/admin/manageCategories");
  } catch (error) {
    console.error("Error al crear la categoría:", error);
  }
};

export default postCategories;
