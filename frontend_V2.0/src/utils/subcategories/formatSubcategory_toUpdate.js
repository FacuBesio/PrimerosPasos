const formatSubcategory_toUpdate = (subcategory) => {
  const { id, enabled, name, category } = subcategory;

  const categoryId = category.id;

  const current_subcategory = {
    id,
    enabled,
    name, 
    categoryId,
  };
  return { current_subcategory };
};

export default formatSubcategory_toUpdate;
