import React, { useState } from "react";

const Image_input = ({ handlerChange, errors }) => {
  const [fileName, setFileName] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    } else {
      setFileName("");
    }
    handlerChange(event);
  };

  return (
    <div className="w-full px-4 py-3 flex flex-col gap-2">
      <label htmlFor="image" className="w-full text-white font-bold">
        Imagen
      </label>
      <div className="flex items-center gap-2">
        <input
          type="file"
          id="image"
          name="img"
          onChange={handleFileChange}
          accept="image/*"
          className="hidden"
        />
        <label
          htmlFor="image"
          className="px-6 py-3 bg-slate-400 text-white font-bold rounded-md hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-green-400 cursor-pointer"
        >
          Subir Imagen
        </label>
        <span className="file-name px-2 text-white">
          {fileName || "Ningún archivo seleccionado"}
        </span>
      </div>
        <div className="relative w-full" style={{ minHeight: "1rem" }}>
          <span
            className="absolute w-full text-red-300 font-bold"
            style={{ visibility: !errors.img ? "hidden" : "visible" }}
          >
            {errors.img_message}
          </span>
        </div>
    </div>
  );
};

export default Image_input;
