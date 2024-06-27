const CountryAndState_input = ({ handlerChange, errors, userProfile }) => {
  return (
    <div className="w-full px-4 pt-3 pb-1 flex gap-10">
      <div className="w-1/2 flex flex-col gap-2">
        <label htmlFor="country" className="w-full text-white font-bold">
          País
        </label>
        <input
          type="text"
          id="country"
          name="country"
          className="w-full px-4 py-2 bg-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
          value={userProfile?.country ? userProfile.country : ""}
          onChange={handlerChange}
          placeholder="Argentina..."
        />
        <div className="relative w-full" style={{ minHeight: "1rem" }}>
          <span
            className="absolute w-full text-red-300 font-bold"
            style={{ visibility: !errors.country ? "hidden" : "visible" }}
          >
            {errors.country_message}
          </span>
        </div>
      </div>

      <div className="w-1/2 flex flex-col gap-2">
        <label htmlFor="state" className="w-full text-white font-bold">
          Provincia / Estado
        </label>
        <input
          type="text"
          id="state"
          name="state"
          className="w-full px-4 py-2 bg-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
          value={userProfile?.state ? userProfile.state : ""}
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
    </div>
  );
};

export default CountryAndState_input;
