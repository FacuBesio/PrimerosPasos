const Image_input = ({handlerChange}) => {
  return (
    <div className="w-full px-4 py-3 flex flex-col gap-2">
    <label htmlFor="image" className="w-full text-white font-bold">
      Imagen
    </label>
    <input
      type="file"
      name="img"
      onChange={handlerChange}
      accept="image/*"
      className="input-field mb-3 "
    />
  </div>
  );
};

export default Image_input;
