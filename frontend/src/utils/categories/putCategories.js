import axios from "../../config/axios";

const putCategories = async (newCategory, navigate) => {
  let { id, name, enabled } = newCategory;
  const CategoryBody = { id, name, enabled };

  try {
    const response = await axios.put(`/categories`, CategoryBody);
    response.data.updated && navigate("/admin/manageCategories");
  } catch (error) {
    console.error("Error al actualizar la categoría:", error);
  }
};

export default putCategories;
