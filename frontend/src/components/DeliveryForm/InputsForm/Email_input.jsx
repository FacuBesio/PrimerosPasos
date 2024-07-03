const Email_input = ({ handlerChange, errors, user }) => {

  return (
    <div className="w-full px-4 py-3 flex flex-col gap-2">
      <label htmlFor="email" className="w-full text-white font-bold">
        Email
      </label>
      <input
        type="text"
        id="email"
        name="email"
        className="w-full px-4 py-2 bg-gray-200 rounded-md shadow-sm  focus:outline-none focus:ring-2 focus:ring-gray-400"
        value={user?.email ? user.email : ""}
        onChange={handlerChange}
        placeholder="email@mail.com..."
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
  );
};

export default Email_input;
