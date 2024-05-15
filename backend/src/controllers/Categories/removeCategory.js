const { Category } = require("../../db");
const findCategorybyId = require("./findCategorybyId");
const formattedCategory = require("../../utils/formatted/formattedCategory");


const removeCategory = async (id) => {
  let category = await findCategorybyId(id);
  if (!category) {
    return {
      message: `No existe una Categoría con id '${id}' para eliminar`,
    };
  }  
  
  category = formattedCategory(category);
  if (category.products.length > 0) {
    return {
      message: `La Categoría '${category.name}', todavía tiene productos asociados. Antes de eliminar la categoría, por favor actualiza los productos de la categoría '${category.name}' a nueva categoría. Para poder eliminar la categoría no debe tener ningún producto asociado.`,
    };
  }

  if (category.subcategories.length > 0) {
    return {
      message: `La Categoría '${category.name}', todavía tiene subcategorías asociadas. Antes de eliminar la categoría, por favor actualiza las subcategorías de la categoría '${category.name}' a nueva categoría. Para poder eliminar la categoría no debe tener ninguna subcategoría asociada.`,
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
