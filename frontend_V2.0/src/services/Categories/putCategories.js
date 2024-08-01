import axios from "../../config/axios";

const putCategories = async (updateCategory) => {
  let { id, name, enabled } = updateCategory;
  const CategoryBody = { id, name, enabled };

  try {
    const response = await axios.put(`/categories`, CategoryBody);
    return response.data;
  } catch (error) {
    console.error("Error al actualizar la categoría:", error);
  }
};

export default putCategories;
