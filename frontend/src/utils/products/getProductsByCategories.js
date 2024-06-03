import axios from "../../config/axios";
import querysGenerator from "./querysGenerator";

const getProductsByCategories = async (
  setAllProducts,
  setCategoryTag,
  page,
  searchBar,
  filter,
  sorter,
  id
) => {
  const querys = querysGenerator(page, searchBar, filter, sorter);
  let pageSize;

  if (window.innerWidth < 760) {
    pageSize = 4;
  } else {
    pageSize = 12;
  }

  try {
    const getCategoryByIdResponse = await axios.get(
      `/categories?filterCategoryByName=${id}`
    );
     const { categories } = getCategoryByIdResponse.data;
    setCategoryTag(categories[0].name);

    const getProductsResponse = await axios.get(
      `/products?filterCategories=${categories[0].id}&${querys.result}&pageSize=${pageSize}`
    );
    setAllProducts(getProductsResponse.data);
  } catch (error) {
    console.error("Error al obtener Productos:", error);
  }
};

export default getProductsByCategories;
