const findAllBrands = require("../../../controllers/Brands/findAllBrands");


const getBrands = async (req, res) => {
  try {
    const brands = await findAllBrands();
    if(brands.length === 0){
      return res.status(200).json({ brands: null, message: 'No hay marcas para mostrar. Actualmente no hay ningún producto registrado en la base de datos, la tabla de productos esta vacía.'});
    }
    return res.status(200).json({brands : brands});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getBrands;
