const findAllColors = require("../../../controllers/Colors/findAllColors");


const getColors = async (req, res) => {
  try {
    const colors = await findAllColors();
    if(colors.length === 0){
      return res.status(200).json({ colors: null, message: 'No hay colores para mostrar. Actualmente no hay ningún producto registrado en la base de datos, la tabla de productos esta vacía.'});
    }
    return res.status(200).json({colors : colors});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getColors;
