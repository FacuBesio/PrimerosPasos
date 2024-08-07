import { input_editable_style, input_label_style, input_notEditable_style } from "../../../../styles";

const Phone_input = ({ handlerChange, errors, userProfile, editable }) => {
  const inputStyle = editable
    ? input_editable_style
    : input_notEditable_style

  return (
    <div className="w-full px-4 py-1 flex gap-10">
      <div className={input_label_style}>
        <label htmlFor="phone" className="w-full text-white font-bold">
          Teléfono
        </label>
        <input
          type="text"
          id="phone"
          name="phone"
          className={inputStyle}
          value={userProfile?.phone ? userProfile.phone : ""}
          onChange={handlerChange}
          placeholder="+541122334455..."
          disabled={!editable}
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
    </div>
  );
};

export default Phone_input;
