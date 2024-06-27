const { Category, Product } = require("../../db");

const findAllSizes = async () => {
  const products = await Product.findAll({
    include: {
      model: Category,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });

  const resultSet = new Set();
  products.forEach((product) => resultSet.add(product.size));
  const result = Array.from(resultSet).sort();

  return result;
};

module.exports = findAllSizes;
