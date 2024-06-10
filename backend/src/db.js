const { LOCAL_DATABASE, DEPLOY_DATABASE } = require("./config/config");
const { Sequelize } = require("sequelize");
const CategoryModel = require("./models/Category");
const SubCategoryModel = require("./models/SubCategory");
const OrderModel = require("./models/Order");
const ProductModel = require("./models/Product");
const PurchaseModel = require("./models/Purchase");
const UserModel = require("./models/User");
const Order_ProductModel = require("./models/Order_Product");

//? CONNECTION
let dataBase;
if (DEPLOY_DATABASE) {
  dataBase = new Sequelize(DEPLOY_DATABASE, {
    logging: false,
    native: false,
    dialectOptions: {
      ssl: {
        require: true,
      },
    },
  });
} else {
  dataBase = new Sequelize(LOCAL_DATABASE, {
    logging: false,
    native: false,
  });
}

//* MODELS
CategoryModel(dataBase);
SubCategoryModel(dataBase);
OrderModel(dataBase);
ProductModel(dataBase);
PurchaseModel(dataBase);
UserModel(dataBase);
Order_ProductModel(dataBase);

// ASSOCIATIONS
const { Category, Subcategory, Order, Product, Purchase, User } =
  dataBase.models;

// Product - Category (n a n)
Category.belongsToMany(Product, { through: "Category_Product" });
Product.belongsToMany(Category, { through: "Category_Product" });

// Category - SubCategory (1 a n)
Category.hasMany(Subcategory, { foreignKey: "categoryId" });
Subcategory.belongsTo(Category, { foreignKey: "categoryId" });

// Product - Subcategory (n a n)
Subcategory.belongsToMany(Product, { through: "Subcategory_Product" });
Product.belongsToMany(Subcategory, { through: "Subcategory_Product" });

//Product - Order (n a n)
Order.belongsToMany(Product, {
  through: "Order_Product",
  foreignKey: "orderId",
  otherKey: "productId",
});
Product.belongsToMany(Order, {
  through: "Order_Product",
  foreignKey: "productId",
  otherKey: "orderId",
});

// Orders - User (n a 1)
Order.belongsTo(User);
User.hasMany(Order);

// Orders - Purchase (n a 1)
Order.belongsTo(Purchase);
Purchase.hasMany(Order);

// Purchase - User (n a 1)
Purchase.belongsTo(User);
User.hasMany(Purchase);

module.exports = {
  dataBase,
  ...dataBase.models,
};
