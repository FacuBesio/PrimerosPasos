const server = require("./src/server");
const { dataBase, Product, User  } = require("./src/db.js");
const createBulkProducts = require("./src/controllers/Products/createBulkProducts.js");
const createUser_Owner = require("./src/controllers/Admin/createUser_Owner.js");
const PORT = 5000;

dataBase
  .sync({ force: true })
  .then(async () => {
    const productsCount = await Product.count();
    if (productsCount === 0) {
      console.log(
        "La tabla de productos está vacía, cargando productos desde archivo .json..."
      );
      await createBulkProducts();
    }

    const usersCount = await User.count();
    if (usersCount === 0) {
      console.log(
        "La tabla de usuarios está vacía, cargando usuario owner desde archivo .json..."
      );
      await createUser_Owner();;
    }

    server.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch((error) => console.error(error));
