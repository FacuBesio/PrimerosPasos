import axios from "../../config/axios";

const postSubCategories = async (newSubCategory, navigate) => {
  let { name, category } = newSubCategory;
  const SubCategoryBody = { name, categoryId : category };

  try {
    const response = await axios.post(`/subcategories`, SubCategoryBody);
    response.data.created && navigate("/admin/manageSubcategories");
  } catch (error) {
    console.error("Error al crear la subcategoría:", error);
  }
};

export default postSubCategories;
