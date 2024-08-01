import { input_label_style, input_form_style } from "../../../../../styles";

const Name_input = ({ handlerChange, errors, updateSubcategory }) => {
  return (
    <div className={input_label_style}>
      <label htmlFor="name" className="w-full text-white font-bold">
        Nombre
      </label>
      <input
        type="text"
        id="name"
        name="name"
        className={input_form_style}
        value={updateSubcategory?.name ? updateSubcategory.name : ""}
        onChange={handlerChange}
        placeholder="Subcategoría..."
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
  );
};

export default Name_input;
