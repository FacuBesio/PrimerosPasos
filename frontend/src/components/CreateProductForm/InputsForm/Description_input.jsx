const Description_input = ({ handlerChange, errors }) => {
  return (
    <div className="w-full px-4 pt-0 pb-1 flex flex-col gap-2 text-[12px] md:text-[18px]">
      <label htmlFor="description" className="w-full text-white font-bold">
        Descripción:
      </label>
      <textarea
        id="description"
        name="description"
        className="w-full h-32 px-4 py-2 text-[12px] md:text-[18px] bg-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
        placeholder="Detallá las características principales de tu producto..."
        onChange={handlerChange}
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
