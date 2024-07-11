import axios from "../../config/axios";

const getProductsByCategories = async (categoryQuery) => {
  try {
    const getCategoryById = await axios.get(
      `/categories?filterCategoryByName=${categoryQuery}`
    );
    const { categories } = getCategoryById.data;
    const category = `filterCategories=${categories[0].id}`;
    
    const response = await axios.get(`/products?${category}`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener productos:", error);
  }
};

export default getProductsByCategories;
