const Street_input = ({ handlerChange, errors, userProfile, editable }) => {

  const inputStyle = editable
    ? "w-full px-4 py-2 bg-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
    : "w-full px-4 py-2 bg-slate-200 font-bold rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400";

  return (
    <div className="w-full px-4 py-1 flex gap-10">
      <div className="w-1/2 flex flex-col gap-2">
        <label htmlFor="street_address" className="w-full font-bold">
          Calle
        </label>
        <input
          type="text"
          id="street_address"
          name="street_address"
          className={inputStyle}
          value={userProfile?.street_address ? userProfile.street_address : ""}
          onChange={handlerChange}
          placeholder="Avenida del Libertador..."
          disabled={!editable}
        />
        <div className="relative w-full" style={{ minHeight: "1rem" }}>
          <span
            className="absolute w-full text-red-300 font-bold"
            style={{
              visibility: !errors.street_address ? "hidden" : "visible",
            }}
          >
            {errors.street_address_message}
          </span>
        </div>
      </div>

      <div className="w-1/2 flex flex-col gap-2">
        <label htmlFor="street_number" className="w-full font-bold">
          Número
        </label>
        <input
          type="text"
          id="street_number"
          name="street_number"
          className={inputStyle}
          value={userProfile?.street_number ? userProfile.street_number : ""}
          onChange={handlerChange}
          placeholder="420..."
          disabled={!editable}
        />
        <div className="relative w-full" style={{ minHeight: "1rem" }}>
          <span
            className="absolute w-full text-red-300 font-bold"
            style={{ visibility: !errors.street_number ? "hidden" : "visible" }}
          >
            {errors.street_number_message}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Street_input;
