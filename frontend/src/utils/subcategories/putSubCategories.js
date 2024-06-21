import axios from "../../config/axios";

const putSubCategories = async (newSubCategory, navigate) => {
  let { id, name, category, enabled } = newSubCategory;
  const SubCategoryBody = { id, name, categoryId: category, enabled };

  try {
    const response = await axios.put(`/subcategories`, SubCategoryBody);
    response.data.updated && navigate("/admin/manageSubcategories");
  } catch (error) {
    console.error("Error al actualizar la subcategoría:", error);
  }
};

export default putSubCategories;
