import { input_editable_style, input_label_style, input_notEditable_style } from "../../../../styles";

const CountryAndState_input = ({
  handlerChange,
  errors,
  userProfile,
  editable,
}) => {
  const inputStyle = editable
  ? input_editable_style
  : input_notEditable_style

  return (
    <div className="w-full px-4 pt-3 pb-1 flex gap-10">
      <div className={input_label_style}>
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
          placeholder="País de residencia"
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

      <div className={input_label_style}>
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
          placeholder="Provincia o Estado"
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
