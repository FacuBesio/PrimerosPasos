const createUser = require("../../../controllers/Users/createUser");
const transporter = require("../../../config/mailer");
const welcomeMail = require("../../../utils/mails/users/welcomeMail");

const postUser = async (req, res) => {
  const { email, name } = req.body;

  if (!email || email === "") {
    return res.status(200).json({
      created: false,
      error: `Para crear un usuario es necesario indicar un email.`,
    });
  }
  
  try {
    let status = 200;
    const { userWithOrder, created } = await createUser(email, name);
    if (created) {
      status = 201;
      const message = welcomeMail(email);
      await transporter.sendMail(message);
    }
    res.status(status).json({ created: created, user: userWithOrder });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = postUser;
