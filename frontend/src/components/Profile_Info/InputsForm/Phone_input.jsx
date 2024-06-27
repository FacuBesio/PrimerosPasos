const Phone_input = ({ userProfile }) => {
  return (
    <div className="w-full px-4 py-4 flex flex-col gap-2">
      <label htmlFor="phone" className="w-full text-white font-bold">
        Teléfono
      </label>
      <h2 className="w-full font-bold">{userProfile.phone || "* Completar"}</h2>
    </div>
  );
};

export default Phone_input;
