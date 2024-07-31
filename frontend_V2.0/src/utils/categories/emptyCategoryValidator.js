import getCategoryById from "../../services/Categories/getCategoryById";

const emptyCategoryValidator = async (id) => {
  const response = await getCategoryById(id);
  const { category } = response;
  const emptyCategory = category.products.length === 0;
  return emptyCategory;
};

export default emptyCategoryValidator;
