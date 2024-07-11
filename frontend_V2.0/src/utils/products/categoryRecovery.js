import axios from "../../config/axios";

async function categoryRecovery(categoryQuery) {
  let category = "";
  if (categoryQuery) {
    try {
      const getCategoryByName = await axios.get(
        `/categories?filterCategoryByName=${categoryQuery}`
      );
      const { categories } = getCategoryByName.data;
      category = `filterCategories=${categories[0].id}&`;
      return category;
    } catch (error) {
      console.error("Error al obtener categoría:", error);
    }
  }
}

export default categoryRecovery;
