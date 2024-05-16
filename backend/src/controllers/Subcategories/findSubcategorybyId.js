const { Subcategory, Category, Product } = require("../../db");

const findSubcategorybyId = async (id) => {
  const subcategory = await Subcategory.findByPk(id, {
    include: [
      {
        model: Product,
        attributes: ["id", "name"],
        through: {
          attributes: [],
        },
      },
      {
        model: Category,
        attributes: ["id", "name"],
      },
    ],
    order: [["id", "ASC"]],
  });
  return subcategory;
};

module.exports = findSubcategorybyId;
