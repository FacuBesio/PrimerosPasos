/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import getCategories from "../../../utils/categories/getCategories";

const Categories_input = ({ handlerChange, newSubCategory, errors }) => {
  const [allCategories, setAllCategories] = useState([]);

  useEffect(() => {
    getCategories(setAllCategories);
  }, []);

  return (
    <div className="w-full px-4 py-3 flex flex-col gap-2 text-[12px] md:text-[18px]">
      <label htmlFor="category" className="w-full text-white font-bold">
        Categoría
      </label>
      <select
        id="category"
        name="category"
        className="w-full  px-4 py-2 bg-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
        onChange={handlerChange}
        value={newSubCategory.category}
      >
        <option
          value=""
          className="bg-gray-300 text-[18px] rounded-md hover:bg-gray-400 bg-opacity-75"
          disabled
        >
          Seleccioná una categoría...
        </option>
        {allCategories?.categories?.map((category) => {
          return (
            <option className="text-[18px]" key={category.id} value={category.id}>
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
