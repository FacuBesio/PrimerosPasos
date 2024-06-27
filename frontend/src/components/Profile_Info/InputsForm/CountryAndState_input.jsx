const CountryAndState_input = ({ userProfile }) => {
  return (
    <div className="w-full px-4 p-4 flex gap-10">
      <div className="w-1/2 flex flex-col gap-2">
        <label htmlFor="county" className="w-full text-white font-bold">
          País
        </label>
        <h2 className="w-full font-bold">
          {userProfile.country || "* Completar"}
        </h2>
      </div>

      <div className="w-1/2 flex flex-col gap-2">
        <label htmlFor="state" className="w-full text-white font-bold">
          Provincia / Estado
        </label>
        <h2 className="w-full font-bold">
          {userProfile.state || "* Completar"}
        </h2>
      </div>
    </div>
  );
};

export default CountryAndState_input;
