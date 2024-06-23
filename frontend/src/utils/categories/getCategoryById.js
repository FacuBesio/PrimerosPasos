import axios from "../../config/axios";

const getCategoryById = async (id, setCategory) => {
  try {
    const response = await axios.get(`/categories/${id}`);
    const { category } = response.data;
    const { name, enabled } = category;
    setCategory && setCategory({ id: category.id, name, enabled });
    return category;
  } catch (error) {
    console.error("Error al obtener la categoría:", error);
  }
};

export default getCategoryById;
