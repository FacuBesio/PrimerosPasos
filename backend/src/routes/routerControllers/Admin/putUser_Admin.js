const modifyUser = require("../../../controllers/Users/modifyUser");
const findUserbyId = require("../../../controllers/Users/findUserbyId");
const ownerValidator = require("../../../utils/validators/admin/ownerValidator");
const formattedUser = require("../../../utils/formatted/formattedUser");

const putUser_Admin = async (req, res) => {
  const { owner_id, id, role, enabled } = req.body;
  const userBody = { role, enabled };

  const isOwner = await ownerValidator(owner_id);
  if (!isOwner.result) {
    return res.status(200).json({
      updated: false,
      message: isOwner.message,
    });
  }

  try {
    const updatedUser = await modifyUser(id, userBody);
    updatedUser.hasOwnProperty("name")
      ? res
          .status(200)
          .json({ updated: true, user: formattedUser(updatedUser) })
      : res.status(200).json({
          updated: false,
          message: updatedUser.message,
        });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = putUser_Admin;
