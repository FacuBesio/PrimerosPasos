import axios from "../../config/axios";
import showUpdateNotification from "./showUpdateNotification";

const putCategories = async (newCategory, navigate) => {
  let { id, name, enabled } = newCategory;
  const CategoryBody = { id, name, enabled };

  try {
    const response = await axios.put(`/categories`, CategoryBody);
    if (response.data.updated) {
      showUpdateNotification(
        `Se actualizó exitosamente la categoría ${response.data.category.name}`
      );
      navigate("/admin/manageCategories");
    }
  } catch (error) {
    console.error("Error al actualizar la categoría:", error);
  }
};

export default putCategories;
