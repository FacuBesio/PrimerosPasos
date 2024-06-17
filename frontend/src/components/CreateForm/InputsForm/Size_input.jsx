import { useEffect, useState } from "react";
import getSizes from "../../../utils/sizes/getSizes";

const Size_input = ({ handlerChange, newProduct }) => {
  const [allSizes, setAllSizes] = useState([]);

  useEffect(() => {
    getSizes(setAllSizes);
  }, []);

  return (
    <div className="w-full px-4 py-3 flex flex-col gap-2">
      <label htmlFor="size" className="w-full text-white font-bold">
        Talle
      </label>
      <select
        id="size"
        name="size"
        className="w-full px-4 py-2 bg-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400" // Aplica la clase capitalize aquí
        onChange={handlerChange}
        value={newProduct.size}
      >
        <option
          value=""
          className="bg-gray-200 rounded-md hover:bg-gray-400 bg-opacity-75"
          disabled
        >
          Seleccioná un talle...
        </option>
        <option
          value="addNewSize"
          className="bg-slate-300 font-medium rounded-md hover:bg-gray-400 bg-opacity-75"
        >
          Agregar un nuevo talle
        </option>
        {allSizes?.sizes?.map((color) => (
          <option key={color} value={color}>
            {color}
          </option>
        ))}
      </select>
      {newProduct.size === "addNewSize" && (
        <input
          type="text"
          id="newSize"
          name="newSize"
          className="w-full px-4 py-2 bg-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
          placeholder="Ingresa el color nuevo..."
          onChange={handlerChange}
        />
      )}
    </div>
  );
};

export default Size_input;
