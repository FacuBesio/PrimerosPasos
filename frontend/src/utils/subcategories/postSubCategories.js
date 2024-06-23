import axios from "../../config/axios";
import showCreateNotification from "./showCreateNotification";

const postSubCategories = async (newSubCategory, navigate) => {
  let { name, category } = newSubCategory;
  const SubCategoryBody = { name, categoryId : category };

  try {
    const response = await axios.post(`/subcategories`, SubCategoryBody);
    if (response.data.created) {
      showCreateNotification(
      `Se creó exitosamente la subcategoría ${response.data.subcategory.name}`
    );
    navigate("/admin/manageSubcategories");
  }
  } catch (error) {
    console.error("Error al crear la subcategoría:", error);
  }
};

export default postSubCategories;
