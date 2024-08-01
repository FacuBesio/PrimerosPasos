import axios from "../../config/axios";

const postCategories = async (newCategory) => {
  const { name } = newCategory;
  const categoryBody = { name };

  try {
    const response = await axios.post(`/categories`, categoryBody);
    return response.data;
  } catch (error) {
    console.error("Error al crear la categoría:", error);
  }
};

export default postCategories;
