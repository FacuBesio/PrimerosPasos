import axios from "../../config/axios";
import showUpdateNotification from "./showUpdateNotification";

const putSubCategories = async (newSubCategory, navigate) => {
  let { id, name, category, enabled } = newSubCategory;
  const SubCategoryBody = { id, name, categoryId: category, enabled };

  try {
    const response = await axios.put(`/subcategories`, SubCategoryBody);
    if (response.data.updated) {
      showUpdateNotification(
        `Se actualizó exitosamente la subcategoría ${response.data.subcategory.name}`
      );
      navigate("/admin/manageSubcategories");
    }
  } catch (error) {
    console.error("Error al actualizar la subcategoría:", error);
  }
};

export default putSubCategories;
