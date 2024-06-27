const Brand_input = ({ handlerChange, errors, newProduct }) => {

  return (
    <div className="w-full px-4 py-3 flex flex-col gap-2">
      <label htmlFor="brand" className="w-full text-white font-bold">
        Marca
      </label>
      <input
        type="text"
        id="brand"
        name="brand"
        className="w-full px-4 py-2 bg-gray-200 rounded-md shadow-sm  focus:outline-none focus:ring-2 focus:ring-gray-400"
        value={newProduct?.brand ? newProduct.brand : ""}
        onChange={handlerChange}
        placeholder="Marca o Diseñador/a del producto..."
      />
      <div className="relative w-full" style={{ minHeight: "1rem" }}>
        <span
          className="absolute w-full text-red-300 font-bold"
          style={{ visibility: !errors.brand ? "hidden" : "visible" }}
        >
          {errors.brand_message}
        </span>
      </div>
    </div>
  );
};

export default Brand_input;
