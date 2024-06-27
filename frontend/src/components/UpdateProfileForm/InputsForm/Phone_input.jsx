const Phone_input = ({ handlerChange, errors, userProfile }) => {
  return (
    <div className="w-full px-4 py-1 flex flex-col gap-2">
      <label htmlFor="phone" className="w-full text-white font-bold">
        Teléfono
      </label>
      <input
        type="text"
        id="phone"
        name="phone"
        className="w-full px-4 py-2 bg-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
        value={userProfile?.phone ? userProfile.phone : ""}
        onChange={handlerChange}
        placeholder="+541122334455..."
      />
      <div className="relative w-full" style={{ minHeight: "1rem" }}>
        <span
          className="absolute w-full text-red-300 font-bold"
          style={{ visibility: !errors.phone ? "hidden" : "visible" }}
        >
          {errors.phone_message}
        </span>
      </div>
    </div>
  );
};

export default Phone_input;
