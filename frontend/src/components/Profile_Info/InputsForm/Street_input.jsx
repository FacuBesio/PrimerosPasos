const Street_input = ({ userProfile }) => {
  return (
    <div className="w-full px-4 py-4 flex gap-10">
      <div className="w-1/2 flex flex-col gap-2">
        <label htmlFor="street_address" className="w-full text-white font-bold">
          Calle
        </label>
        <h2 className="w-full font-bold">
          {userProfile.street_address || "* Completar"}
        </h2>
      </div>

      <div className="w-1/2 flex flex-col gap-2">
        <label htmlFor="street_number" className="w-full text-white font-bold">
          Número
        </label>
        <h2 className="w-full font-bold">
          {userProfile.street_number || "* Completar"}
        </h2>
      </div>
    </div>
  );
};

export default Street_input;
