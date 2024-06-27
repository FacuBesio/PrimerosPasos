const Brand_input = ({ handlerChange, errors }) => {
  return (
    <div className="w-full px-4  flex flex-col gap-2">
      <label htmlFor="brand" className="w-full text-white font-bold text-[12px] md:text-[18px]">
        Marca
      </label>
      <input
        type="text"
        id="brand"
        name="brand"
        className="w-full px-4 py-2 bg-gray-200 rounded-md shadow-sm text-[12px] md:text-[18px]  focus:outline-none focus:ring-2 focus:ring-gray-400"
        placeholder="Marca o Diseñador/a del producto..."
        onChange={handlerChange}
      />
      <div className="relative w-full" style={{ minHeight: '1rem' }}>
        <span
          className="absolute w-full text-red-300 font-bold text-[12px] md:text-[18px]"
          style={{ visibility: !errors.brand ? "hidden" : "visible" }}
        >
          {errors.brand_message}
        </span>
      </div>
    </div>
  );
};

export default Brand_input;
