import axios from "../../config/axios";

const uploadImageCloudinary = async (file) => {
  try {
    const formData = new FormData();
    formData.append("img", file);
    const response = await axios.post("/images/upload", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data.url;
  } catch (error) {
    console.error("Error al cargar la imagen en Cloudinary:", error);
    throw error;
  }
};

export default uploadImageCloudinary;

