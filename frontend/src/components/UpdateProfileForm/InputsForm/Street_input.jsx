const Street_input = ({ handlerChange, errors, userProfile }) => {
  return (
    <div  className="w-full px-4 py-1 flex gap-10">
    <div className="w-1/2 flex flex-col gap-2">
      <label htmlFor="street_address" className="w-full text-white font-bold">
        Calle
      </label>
      <input
        type="text"
        id="street_address"
        name="street_address"
        className="w-full px-4 py-2 bg-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
        value={userProfile?.street_address ? userProfile.street_address : ""}
        onChange={handlerChange}
        placeholder="Avenida del Libertador..."
      />
      <div className="relative w-full" style={{ minHeight: "1rem" }}>
        <span
          className="absolute w-full text-red-300 font-bold"
          style={{ visibility: !errors.street_address ? "hidden" : "visible" }}
        >
          {errors.street_address_message}
        </span>
      </div>
    </div>

    <div className="w-1/2 flex flex-col gap-2">
      <label htmlFor="street_number" className="w-full text-white font-bold">
        Número
      </label>
      <input
        type="text"
        id="street_number"
        name="street_number"
        className="w-full px-4 py-2 bg-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
        value={userProfile?.street_number ? userProfile.street_number : ""}
        onChange={handlerChange}
        placeholder="2800..."
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
