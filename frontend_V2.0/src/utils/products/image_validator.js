import uploadImageCloudinary from "../cloudinary/uploadImageCloudinary";

const image_validator = async (product_image) => {
  let imgUrl;
  if (typeof product_image === "string") {
    imgUrl = product_image;
  } else if (product_image instanceof File) {
    imgUrl = await uploadImageCloudinary(product_image);
  } else {
    console.error("El tipo de imagen no es válido");
  }

  return imgUrl;
};

export default image_validator;
