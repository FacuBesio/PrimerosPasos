const { Category } = require("../../db");
const findCategorybyId = require("./findCategorybyId");


const removeCategory = async (id) => {
  const category = await findCategorybyId(id);
  if (!category) {
    return {
      message: `No existe una Categoría con el id '${id}' para eliminar`,
    };
  } 

  try {
    categoryDestroyed = await Category.destroy({
      where: { id: id },
    });
    return categoryDestroyed;
  } catch (error) {
    console.error(`Error al eliminar Categoría ${id}: ${error.message}`);
  }
};

module.exports = removeCategory;
