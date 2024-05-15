const { Category } = require("../../db");
const findCategorybyId = require("./findCategorybyId");
const errorsValidator = require("../../utils/validators/categories/errorsValidator");

const modifyCategory = async (id, enabled, name) => {
  try {
    let updatedCategory = await Category.update(
      { enabled, name },
      {
        where: {
          id: id,
        },
      }
    );
    if (updatedCategory[0] === 0) {
      return { message: `Categoría ${id} no encontrada` };
    }
    updatedCategory = await findCategorybyId(id);
    return updatedCategory.dataValues;
  } catch (error) {
    console.log("error: ", error.message);
    const errorMessage = errorsValidator({ name }, error);
    return { message: errorMessage };
  }
};

module.exports = modifyCategory;
