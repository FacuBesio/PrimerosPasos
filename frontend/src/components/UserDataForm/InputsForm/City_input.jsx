const City_input = ({ handlerChange, errors, userProfile, editable }) => {
  const inputStyle = editable
    ? "w-full px-4 py-2 bg-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400 placeholder-red-300"
    : "w-full px-4 py-2 bg-slate-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400 placeholder-red-300 ";

  return (
    <div className="w-full px-4 py-1 flex gap-10">
      <div className="w-1/2 flex flex-col gap-2">
        <label htmlFor="city" className="w-full font-bold">
          Localidad
        </label>
        <input
          type="text"
          id="city"
          name="city"
          className={inputStyle}
          value={userProfile?.city ? userProfile.city : ""}
          onChange={handlerChange}
          placeholder="Localidad o Ciudad"
          disabled={!editable}
        />
        <div className="relative w-full" style={{ minHeight: "1rem" }}>
          <span
            className="absolute w-full text-red-300 font-bold"
            style={{ visibility: !errors.city ? "hidden" : "visible" }}
          >
            {errors.city_message}
          </span>
        </div>
      </div>

      <div className="w-1/2 flex flex-col gap-2">
        <label htmlFor="ZIP_Code" className="w-full font-bold">
          C.P.
        </label>
        <input
          type="text"
          id="ZIP_Code"
          name="ZIP_Code"
          className={inputStyle}
          value={userProfile?.ZIP_Code ? userProfile.ZIP_Code : ""}
          onChange={handlerChange}
          placeholder="Código Postal o ZIP"
          disabled={!editable}
        />
        <div className="relative w-full" style={{ minHeight: "1rem" }}>
          <span
            className="absolute w-full text-red-300 font-bold"
            style={{ visibility: !errors.ZIP_Code ? "hidden" : "visible" }}
          >
            {errors.ZIP_Code_message}
          </span>
        </div>
      </div>
    </div>
  );
};

export default City_input;
