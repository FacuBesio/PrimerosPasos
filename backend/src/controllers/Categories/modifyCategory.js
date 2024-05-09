const { Category } = require("../../db");
const errorsValidator = require("../../utils/validators/categories/errorsValidator");

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
    console.log("error: ", error.message);
   const errorMessage = errorsValidator({name}, error);
    return { message: errorMessage };
  }
};

module.exports = modifyCategory;
