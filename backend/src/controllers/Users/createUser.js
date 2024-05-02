const { User } = require("../../db");
const findUserbyId = require("../Users/findUserbyId");
const formattedUser = require("../../utils/formatted/formattedUser");
const orderGenerator = require("./users_utils/orderGenerator");

const createUser = async (email, name) => {
  const [user, created] = await User.findOrCreate({
    where: { email },
    defaults: { email, name },
  });

  created && (await orderGenerator(user));
  const userWithOrder = formattedUser(await findUserbyId(user.id));

  return { userWithOrder, created };
};

module.exports = createUser;
