import useCategories from "../../../../../hooks/Categories/useCategories";
import { input_form_style, input_label_style } from "../../../../../styles";

const Categories_input = ({ handlerChange, newSubcategory, errors }) => {
  const { allCategories } = useCategories();
  return (
    <div className={input_label_style}>
      <label htmlFor="category" className="w-full text-white font-bold">
        Categoría
      </label>
      <select
        id="category"
        name="category"
        className={input_form_style}
        onChange={handlerChange}
        value={newSubcategory.category}
      >
        <option
          value=""
          className="bg-gray-300 rounded-md hover:bg-gray-400 bg-opacity-75"
          disabled
        >
          Seleccioná una categoría...
        </option>
        {allCategories?.categories?.map((category) => {
          return (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          );
        })}
      </select>
      <div className="relative w-full" style={{ minHeight: "1rem" }}>
        <span
          className="absolute w-full text-red-300 font-bold"
          style={{ visibility: !errors.category ? "hidden" : "visible" }}
        >
          {errors.category_message}
        </span>
      </div>
    </div>
  );
};

export default Categories_input;
