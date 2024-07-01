const State_input = ({ handlerChange, errors, user }) => {
  return (
    <div className="w-full px-4 py-3 flex flex-col gap-2">
      <label htmlFor="state" className="w-full text-white font-bold">
        Provincia / Estado
      </label>
      <input
        type="text"
        id="state"
        name="state"
        className="w-full px-4 py-2 bg-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
        value={user?.state ? user.state : ""}
        onChange={handlerChange}
        placeholder="Buenos Aires..."
      />
      <div className="relative w-full" style={{ minHeight: "1rem" }}>
        <span
          className="absolute w-full text-red-300 font-bold"
          style={{ visibility: !errors.state ? "hidden" : "visible" }}
        >
          {errors.state_message}
        </span>
      </div>
    </div>
  );
};

export default State_input;
