const Description_input = ({ handlerChange, errors, newProduct }) => {
  return (
    <div className="w-full px-4 py-3 flex flex-col gap-2">
      <label htmlFor="description" className="w-full text-white font-bold">
        Descripción:
      </label>
      <textarea
        id="description"
        name="description"
        className="w-full px-4 py-2 bg-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
        value={newProduct?.description ? newProduct.description : ""}
        onChange={handlerChange}
        placeholder="Detallá las características principales de tu producto..."
      ></textarea>
      <div className="relative w-full" style={{ minHeight: "1rem" }}>
        <span
          className="absolute w-full text-red-300 font-bold"
          style={{ visibility: !errors.description ? "hidden" : "visible" }}
        >
          {errors.description_message}
        </span>
      </div>
    </div>
  );
};

export default Description_input;
