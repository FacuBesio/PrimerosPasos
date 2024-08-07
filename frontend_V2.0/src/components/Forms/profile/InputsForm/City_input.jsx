import { input_editable_style, input_label_style, input_notEditable_style } from "../../../../styles";

const City_input = ({ handlerChange, errors, userProfile, editable }) => {
  const inputStyle = editable
  ? input_editable_style
  : input_notEditable_style

  return (
    <div className="w-full px-4 py-1 flex gap-10">
      <div className={input_label_style}>
        <label htmlFor="city" className="w-full text-white font-bold">
          Localidad / Ciudad
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

      <div className={input_label_style}>
        <label htmlFor="ZIP_Code" className="w-full text-white font-bold">
          C.P. / ZIP
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
