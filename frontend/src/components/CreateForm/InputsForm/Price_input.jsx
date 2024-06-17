const Price_input = ({ handlerChange }) => {
  return (
    <div className="w-full px-4 py-3 flex flex-col gap-2">
      <label htmlFor="price" className="w-full text-white font-bold">
        Precio
      </label>
      <input
        type="number"
        id="price"
        name="price"
        className="w-full px-4 py-2 bg-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
        placeholder="$..."
        onChange={handlerChange}
      />
    </div>
  );
};

export default Price_input;
