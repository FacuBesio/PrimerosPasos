const Name_input = ({ handlerChange, errors, newCategory}) => {
  return (
    <div className="w-full px-4 py-3 flex flex-col gap-2 text-[12px] md:text-[18px]">
      <label htmlFor="name" className="w-full text-white font-bold">
        Nombre
      </label>
      <input
        type="text"
        id="name"
        name="name"
        className="w-full px-4 py-2 bg-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
        value={newCategory?.name ? newCategory.name : ""}
        onChange={handlerChange}
        placeholder="Categoría..."
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
  );
};

export default Name_input;
