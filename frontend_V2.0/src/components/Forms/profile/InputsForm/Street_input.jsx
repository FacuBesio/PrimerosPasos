import { input_editable_style, input_label_style, input_notEditable_style } from "../../../../styles";

const Street_input = ({ handlerChange, errors, userProfile, editable }) => {
  const inputStyle = editable
  ? input_editable_style
  : input_notEditable_style

  return (
    <div className="w-full px-4 py-1 flex gap-10">
      <div className={input_label_style}>
        <label htmlFor="street_address" className="w-full text-white font-bold">
          Calle
        </label>
        <input
          type="text"
          id="street_address"
          name="street_address"
          className={inputStyle}
          value={userProfile?.street_address ? userProfile.street_address : ""}
          onChange={handlerChange}
          placeholder="Calle de domicilio actual"
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

      <div className={input_label_style}>
        <label htmlFor="street_number" className="w-full text-white font-bold">
          Número
        </label>
        <input
          type="text"
          id="street_number"
          name="street_number"
          className={inputStyle}
          value={userProfile?.street_number ? userProfile.street_number : ""}
          onChange={handlerChange}
          placeholder="Altura o Numeración"
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
