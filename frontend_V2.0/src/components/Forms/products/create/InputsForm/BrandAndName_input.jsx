const BrandAndName_input = ({ handlerChange, errors }) => {
  return (
    <div className="w-full mt-8 px-4 py-1 flex gap-10">
      <div className="w-1/2 flex flex-col gap-2 text-[12px] md:text-[18px]">
        <label htmlFor="brand" className="w-full text-white font-bold">
          Marca
        </label>
        <input
          type="text"
          id="brand"
          name="brand"
          className="w-full px-4 py-2 bg-gray-200 rounded-md shadow-sm text-[12px] md:text-[18px] focus:outline-none focus:ring-2 focus:ring-gray-400"
          placeholder="Marca o Diseñador/a..."
          onChange={handlerChange}
        />
        <div className="relative w-full" style={{ minHeight: "1rem" }}>
          <span
            className="absolute w-full text-red-300 font-bold text-[12px] md:text-[18px]"
            style={{ visibility: !errors.brand ? "hidden" : "visible" }}
          >
            {errors.brand_message}
          </span>
        </div>
      </div>

      <div className="w-1/2 flex flex-col gap-2 text-[12px] md:text-[18px]">
        <label htmlFor="name" className="w-full text-white font-bold">
          Nombre
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full px-4 py-2 bg-gray-200 text-[12px] md:text-[18px] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
          placeholder="Producto..."
          onChange={handlerChange}
        />
        <div className="relative w-full" style={{ minHeight: "1rem" }}>
          <span
            className="absolute w-full text-red-300 font-bold"
            style={{ visibility: !errors.name ? "hidden" : "visible" }}
          >
            {errors.name_message}
          </span>
        </div>
      </div>
    </div>
  );
};

export default BrandAndName_input;
