const { Router } = require("express");
const router = Router();
const routerAdmin = require("./admin");
const routerBrands = require("./brands");
const routerCategories = require("./categories");
const routerColors = require("./colors");
const routerImages = require("./images");
const routerOrders = require("./orders");
const routerProducts = require("./products");
const routerPurchases = require("./purchases");
const routerUsers = require("./users");
const routerPaymentSession = require("./paymentSession")
const routerSizes = require("./sizes")
const routerSubcategories = require("./subcategories")
const routerMail = require("./mail")

//? RUTAS
router.use("/admin", routerAdmin);
router.use("/brands", routerBrands);
router.use("/categories", routerCategories);
router.use("/colors", routerColors);
router.use("/images", routerImages);
router.use("/mail", routerMail)
router.use("/orders", routerOrders);
router.use("/payment-session", routerPaymentSession)
router.use("/products", routerProducts);
router.use("/purchases", routerPurchases);
router.use("/users", routerUsers);
router.use("/sizes", routerSizes)
router.use("/subcategories", routerSubcategories)

module.exports = router;
