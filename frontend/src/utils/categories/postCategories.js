import axios from "../../config/axios";
import showCreateNotification from "./showCreateNotification";

const postCategories = async (newCategory, navigate) => {
  let { name } = newCategory;
  const categoryBody = { name };

  try {
    const response = await axios.post(`/categories`, categoryBody);
    if (response.data.created) {
        showCreateNotification(
        `Se creó exitosamente la categoría ${response.data.category.name}`
      );
      navigate("/admin/manageCategories");
    }
  } catch (error) {
    console.error("Error al crear la categoría:", error);
  }
};

export default postCategories;
