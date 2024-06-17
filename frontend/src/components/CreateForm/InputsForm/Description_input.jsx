const Description_input = ({ handlerChange }) => {
  return (
    <div className="w-full px-4 py-3 flex flex-col gap-2">
      <label htmlFor="description" className="w-full text-white font-bold">
        Descripción:
      </label>
      <textarea
        id="description"
        name="description"
        className="w-full px-4 py-2 bg-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
        placeholder="Detallá las características principales de tu producto..."
        onChange={handlerChange}
      ></textarea>
    </div>
  );
};

export default Description_input;
