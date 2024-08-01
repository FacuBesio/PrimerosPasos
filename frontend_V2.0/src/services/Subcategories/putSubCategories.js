import axios from "../../config/axios";

const putSubCategories = async (updateSubcategory) => {
  let { id, name, categoryId, enabled } = updateSubcategory;
  const SubcategoryBody = { id, name, categoryId, enabled };

  try {
    const response = await axios.put(`/subcategories`, SubcategoryBody);
    return response.data;
  } catch (error) {
    console.error("Error al actualizar la subcategoría:", error);
  }
};

export default putSubCategories;
