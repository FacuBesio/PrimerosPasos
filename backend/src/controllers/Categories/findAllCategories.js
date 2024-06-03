const { Category, Product, Subcategory } = require("../../db");

const findAllCategories = async (filterCategoryByName) => {
  let whereClause = {};

  if (filterCategoryByName && filterCategoryByName !== "") {
    whereClause.name = filterCategoryByName;
  }

  const categories = await Category.findAll({
    where: whereClause,
    include: [
      {
        model: Product,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
      {
        model: Subcategory,
        attributes: ["id", "name"],
      },
    ],
    order: [["id", "ASC"]],
  });

  return categories;
};

module.exports = findAllCategories;
