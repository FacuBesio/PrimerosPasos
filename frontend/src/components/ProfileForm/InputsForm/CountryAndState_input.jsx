const CountryAndState_input = ({
  handlerChange,
  errors,
  userProfile,
  editable,
}) => {
  const inputStyle = editable
    ? "w-full px-4 py-2 bg-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
    : "w-full px-4 py-2 bg-purple-100 font-bold rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400";

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
          className={inputStyle}
          value={userProfile?.country ? userProfile.country : ""}
          onChange={handlerChange}
          placeholder="Argentina..."
          disabled={!editable}
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
          className={inputStyle}
          value={userProfile?.state ? userProfile.state : ""}
          onChange={handlerChange}
          placeholder="Buenos Aires..."
          disabled={!editable}
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
