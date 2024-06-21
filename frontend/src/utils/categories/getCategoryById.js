import axios from "../../config/axios";

const getCategoryById = async (id, setCategory) => {
  try {
    const response = await axios.get(`/categories/${id}`);
    const { category } = response.data;
    const { name, enabled } = category;
    setCategory({ id: category.id, name, enabled });
  } catch (error) {
    console.error("Error al obtener la categoría:", error);
  }
};

export default getCategoryById;
