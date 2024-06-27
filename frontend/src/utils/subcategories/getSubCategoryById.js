import axios from "../../config/axios";

const getSubCategoryById = async (id, setSubCategory) => {
  try {
    const response = await axios.get(`/subcategories/${id}`);
    const { subcategory } = response.data;
    const { category } = subcategory;
    setSubCategory({...subcategory, category: category.id});
  } catch (error) {
    console.error("Error al obtener la subcategoría:", error);
  }
};

export default getSubCategoryById;
