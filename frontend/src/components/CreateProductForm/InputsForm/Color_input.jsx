import { useEffect, useState } from "react";
import getColors from "../../../utils/colors/getColors";

const Color_input = ({ handlerChange, newProduct, errors }) => {
  const [allColors, setAllColors] = useState([]);

  useEffect(() => {
    getColors(setAllColors);
  }, []);

  return (
    <div className="w-full px-4  flex flex-col gap-2 text-[12px] md:text-[18px]">
      <label htmlFor="color" className="w-full text-white font-bold">
        Color
      </label>
      <select
        id="color"
        name="color"
        className="w-full px-4 py-2 text-[12px] md:text-[18px] bg-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400" // Aplica la clase capitalize aquí
        onChange={handlerChange}
        value={newProduct.color} // Establece el valor del select usando el estado
      >
        <option
          value=""
          className="bg-gray-200 rounded-md hover:bg-gray-400 bg-opacity-75"
          disabled
        >
          Seleccioná un color...
        </option>
        <option
          value="addNewColor"
          className="bg-slate-300 font-medium rounded-md hover:bg-gray-400 bg-opacity-75"
        >
          Agregar un nuevo color
        </option>
        {allColors?.colors?.map((color) => (
          <option key={color} value={color} className="capitalize">
            {color}
          </option>
        ))}
      </select>
      {newProduct.color === "addNewColor" && (
        <input
          type="text"
          id="newColor"
          name="newColor"
          className="w-full px-4 py-2 bg-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
          placeholder="Ingresa el color nuevo..."
          onChange={handlerChange}
        />
      )}
      <div className="relative w-full" style={{ minHeight: "1rem" }}>
        <span
          className="absolute w-full text-red-300 font-bold"
          style={{ visibility: !errors.color ? "hidden" : "visible" }}
        >
          {errors.color_message}
        </span>
      </div>
    </div>
  );
};

export default Color_input;
