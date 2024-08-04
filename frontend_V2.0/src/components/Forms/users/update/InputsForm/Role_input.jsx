
const Role_input = ({ handlerChange, updateUser }) => {

  return (
    <div className="w-full px-4 py-1 flex flex-col gap-2 text-[12px] md:text-[18px]">
      <label htmlFor="role" className="w-full text-white font-bold">
        Permisos
      </label>
      <select
        id="role"
        name="role"
        className="w-full px-4 py-2 bg-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400" // Aplica la clase capitalize aquí
        onChange={handlerChange}
        value={updateUser.role}
      >
        <option
          value=""
          className="bg-gray-200 rounded-md hover:bg-gray-400 bg-opacity-75"
          disabled
        >
          Seleccioná un rol...
        </option>
        <option
          value="admin"
          className="bg-slate-300 font-medium rounded-md hover:bg-gray-400 bg-opacity-75"
        >
          Administrador
        </option>
        <option
          value="owner"
          className="bg-slate-300 font-medium rounded-md hover:bg-gray-400 bg-opacity-75"
        >
          Dueño
        </option>
        <option
          value="user"
          className="bg-slate-300 font-medium rounded-md hover:bg-gray-400 bg-opacity-75"
        >
          Usuario
        </option>
      </select>
    </div>
  );
};

export default Role_input;
