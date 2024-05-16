const { Category } = require("../../db");
const findCategorybyId = require("./findCategorybyId");
const categoryValidator = require("../../utils/validators/categories/categoryValidator");

const removeCategory = async (id) => {
  let category = await findCategorybyId(id);

  const categoryResult = await categoryValidator(id, category);
  if (categoryResult.error) {
    return { message: categoryResult.message };
  }

  try {
    const categoryDestroyed = await Category.destroy({
      where: { id: id },
    });
    return categoryDestroyed;
  } catch (error) {
    console.error(`Error al eliminar Categoría ${id}: ${error.message}`);
  }
};

module.exports = removeCategory;
