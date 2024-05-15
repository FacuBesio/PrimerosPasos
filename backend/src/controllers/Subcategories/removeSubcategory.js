const { Subcategory } = require("../../db");
const findSubcategorybyId = require("./findSubcategorybyId");


const removeSubcategory = async (id) => {
  const subcategory = await findSubcategorybyId(id);
  if (!subcategory) {
    return {
      message: `No existe una Subcategoría con id '${id}' para eliminar`,
    };
  } 

  try {
    subcategoryDestroyed = await Subcategory.destroy({
      where: { id: id },
    });
    return subcategoryDestroyed;
  } catch (error) {
    console.error(`Error al eliminar Subcategoría ${id}: ${error.message}`);
  }
};

module.exports = removeSubcategory;
