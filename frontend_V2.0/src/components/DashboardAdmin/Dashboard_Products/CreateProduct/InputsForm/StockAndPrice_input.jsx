const StockAndPrice_input = ({ handlerChange, errors }) => {
  return (
    <div className="w-full px-4 py-1 flex gap-10">
      <div className="w-1/2 flex flex-col gap-2 text-[12px] md:text-[18px]">
        <label htmlFor="stock" className="w-full text-white font-bold">
          Stock
        </label>
        <input
          type="number"
          id="stock"
          name="stock"
          className="w-full px-4 py-2 bg-gray-200 text-[12px] md:text-[18px] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
          placeholder="Cantidad de unidades disponibles..."
          onChange={handlerChange}
        />
        <div className="relative w-full" style={{ minHeight: "1rem" }}>
          <span
            className="absolute w-full text-red-300 font-bold"
            style={{ visibility: !errors.stock ? "hidden" : "visible" }}
          >
            {errors.stock_message}
          </span>
        </div>
      </div>

      <div className="w-1/2 flex flex-col gap-2 text-[12px] md:text-[18px]">
        <label htmlFor="price" className="w-full text-white font-bold">
          Precio
        </label>
        <input
          type="number"
          id="price"
          name="price"
          className="w-full px-4 py-2 bg-gray-200 text-[12px] md:text-[18px] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
          placeholder="$..."
          onChange={handlerChange}
        />
        <div className="relative w-full" style={{ minHeight: "1rem" }}>
          <span
            className="absolute w-full text-red-300 font-bold"
            style={{ visibility: !errors.price ? "hidden" : "visible" }}
          >
            {errors.price_message}
          </span>
        </div>
      </div>
    </div>
  );
};

export default StockAndPrice_input;
