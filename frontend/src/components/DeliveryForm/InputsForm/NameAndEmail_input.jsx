const NameAndEmail_input = ({
  handlerChange,
  errors,
  userProfile,
  editable,
}) => {
  const inputStyle = editable
    ? "w-full px-4 py-2 bg-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
    : "w-full px-4 py-2 bg-purple-100 font-bold rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400";

  return (
    <div className="w-full mt-8 px-4 py-1 flex gap-10">
      <div className="w-1/2 flex flex-col gap-2">
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
            className="absolute w-full text-red-400/80 font-bold"
            style={{ visibility: !errors.name ? "hidden" : "visible" }}
          >
            {errors.name_message}
          </span>
        </div>
      </div>

      <div className="w-1/2 flex flex-col gap-2">
        <label htmlFor="email" className="w-full text-white font-bold">
          Email
        </label>
        <input
          type="text"
          id="email"
          name="email"
          className="w-full px-4 py-2 bg-purple-100 font-bold rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
          value={userProfile?.email ? userProfile.email : ""}
          onChange={handlerChange}
          placeholder="email@mail.com..."
          disabled={true}
        />
        <div className="relative w-full" style={{ minHeight: "1rem" }}>
          <span
            className="absolute w-full text-red-400/80 font-bold"
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
