const findAllSizes = require("../../../controllers/Sizes/findAllSizes");


const getSizes = async (req, res) => {
  try {
    const sizes = await findAllSizes();
    if(sizes.length === 0){
      return res.status(200).json({ sizes: null, message: 'No hay talles para mostrar. Actualmente no hay ningún producto registrado en la base de datos, la tabla de productos esta vacía.'});
    }
    return res.status(200).json({sizes : sizes});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getSizes;
