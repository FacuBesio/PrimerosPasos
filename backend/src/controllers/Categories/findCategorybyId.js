const { Category, Product, Subcategory } = require("../../db");

const findCategorybyId = async (id) => {
  const category = await Category.findByPk(id, {
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
    order: [['id', 'ASC']],
  });
  return category;
};

module.exports = findCategorybyId;