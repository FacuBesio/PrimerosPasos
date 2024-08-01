import axios from "../../config/axios";

const postSubcategories = async (newSubcategory) => {
  const { name, category } = newSubcategory;
  const SubcategoryBody = { name, categoryId : category };

  try {
    const response = await axios.post(`/subcategories`, SubcategoryBody);
    return response.data;
  } catch (error) {
    console.error("Error al crear la subcategoría:", error);
  }
};

export default postSubcategories;
