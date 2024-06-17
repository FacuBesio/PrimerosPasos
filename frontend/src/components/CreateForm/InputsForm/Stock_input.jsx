const Stock_input = ({ handlerChange }) => {
  return (
    <div className="w-full px-4 py-3 flex flex-col gap-2">
      <label htmlFor="stock" className="w-full text-white font-bold">
        Stock
      </label>
      <input
        type="number"
        id="stock"
        name="stock"
        className="w-full px-4 py-2 bg-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
        placeholder="Cantidad de unidades disponibles..."
        onChange={handlerChange}
      />
    </div>
  );
};

export default Stock_input;
