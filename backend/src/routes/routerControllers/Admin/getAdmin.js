const getAdmin = async (req, res) => {
  try {
    return res.send("PRIMEROS PASOS - TEST ADMIN '/admin'");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getAdmin;
