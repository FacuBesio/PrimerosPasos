const getImages = async (req, res) => {
  try {
    return res.send("PRIMEROS PASOS - TEST IMAGES '/images'");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getImages;
