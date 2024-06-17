require("dotenv").config();
const fs = require("fs");
const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const postImages = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(200).json({ error: "No se proporcionó ninguna imagen" });
    }
    // Guardar el buffer de la imagen en un archivo temporal
    const filePath = `temp_image_${Date.now()}`;
    fs.writeFileSync(filePath, req.file.buffer);
    // Cargar la imagen en Cloudinary desde el archivo temporal
    const result = await cloudinary.uploader.upload(filePath, {
      folder: 'uploadedImages',
    });
    // Eliminar el archivo temporal después de cargar la imagen en Cloudinary
    fs.unlinkSync(filePath);

    // console.log("Imagen cargada exitosamente:", result);
    return res.status(200).json({ url: result.secure_url });
  } catch (error) {
    console.error("Error al cargar la imagen:", error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = postImages;
