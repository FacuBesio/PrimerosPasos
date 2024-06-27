import getCategoryById from "./getCategoryById";

const emptyCategoryValidator = async (id) => {
  const category = await getCategoryById(id);
  const emptyCategory = category.products.length === 0;
  return emptyCategory;
};

export default emptyCategoryValidator;
