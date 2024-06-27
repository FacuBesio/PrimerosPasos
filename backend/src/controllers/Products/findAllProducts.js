const { Product, Category, Subcategory } = require("../../db");
const filterByCategories = require("./product_utils/filterByCategories");
const findByQuery = require("./product_utils/findByQuery");
const SortByQuery = require("./product_utils/SortByQuery");
const findAll_returnValidator = require("../../utils/validators/products/findAll_returnValidator");

const findAllProducts = async (paginated, queryInputs) => {
  let whereClause = {};
  let includeCategoriesClause = {};
  let orderClause = [["id", "DESC"]];
  const { page, pageSize } = paginated;
  const offset = (page - 1) * pageSize;

  if (queryInputs) {
    whereClause = findByQuery(queryInputs);
    includeCategoriesClause = filterByCategories(queryInputs);
    orderClause = SortByQuery(queryInputs);
    orderClause.length === 0 && (orderClause = [["id", "ASC"]]);
  }

  const products = await Product.findAndCountAll({
    where: whereClause,
    include: [
      {
        model: Category,
        attributes: ["id", "name"],
        where: includeCategoriesClause,
        through: {
          attributes: [],
        },
      },
      {
        model: Subcategory,
        attributes: ["id", "name"],
        through: {
          attributes: [],
        },
      },
    ],
    order: orderClause,
    limit: pageSize,
    offset: offset, // Especifica cuántos resultados omitir
  });

  const { count, rows } = products;
  const totalPages = Math.ceil(count / pageSize);
  const { message } = findAll_returnValidator(rows, page, totalPages);

  return {
    totalResults: count,
    totalPages: totalPages,
    currentPage: page,
    pageSize: pageSize,
    productsDB: rows,
    message: message,
  };
};

module.exports = findAllProducts;
