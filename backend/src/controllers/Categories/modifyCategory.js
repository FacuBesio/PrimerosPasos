const { Category } = require("../../db");

const modifyCategory = async (id, name) => {
  try {
    let updatedCategory = await Category.update(
      { name },
      {
        where: {
          id: id,
        },
      }
    );
    if (updatedCategory[0] === 0) {
      return { message: `Categoría ${id} no encontrada` };
    }
    updatedCategory = await Category.findByPk(id);
    return updatedCategory.dataValues;
  } catch (error) {
    return {
      message: `Error al actualizar la Categoría ${id}: ${error.message}`,
    };
  }
};

module.exports = modifyCategory;
