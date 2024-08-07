import { input_editable_style, input_label_style, input_notEditable_style } from "../../../../styles";

const NameAndEmail_input = ({
  handlerChange,
  errors,
  userProfile,
  editable,
}) => {
  const inputStyle = editable
  ? input_editable_style
  : input_notEditable_style

  return (
    <div className="w-full mt-8 px-4 py-1 flex gap-10">
      <div className={input_label_style}>
        <label htmlFor="name" className="w-full text-white font-bold">
          Nombre
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className={inputStyle}
          value={userProfile?.name ? userProfile.name : ""}
          onChange={handlerChange}
          placeholder="nombre y apellido..."
          disabled={!editable}
        />
        <div className="relative w-full" style={{ minHeight: "1rem" }}>
          <span
            className="absolute w-full text-red-300 font-bold"
            style={{ visibility: !errors.name ? "hidden" : "visible" }}
          >
            {errors.name_message}
          </span>
        </div>
      </div>

      <div className={input_label_style}>
        <label htmlFor="email" className="w-full text-white font-bold">
          Email
        </label>
        <input
          type="text"
          id="email"
          name="email"
          className="w-full px-4 py-2 bg-slate-200 font-bold rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
          value={userProfile?.email ? userProfile.email : ""}
          onChange={handlerChange}
          placeholder="email@mail.com..."
          disabled={true}
        />
        <div className="relative w-full" style={{ minHeight: "1rem" }}>
          <span
            className="absolute w-full text-red-300 font-bold"
            style={{ visibility: !errors.email ? "hidden" : "visible" }}
          >
            {errors.email_message}
          </span>
        </div>
      </div>
    </div>
  );
};

export default NameAndEmail_input;
