const City_input = ({ userProfile }) => {
  return (
    <div className="w-full px-4 py-4 flex gap-10">
      <div className="w-1/2 flex flex-col gap-2">
        <label htmlFor="city" className="w-full text-white font-bold">
          Localidad / Ciudad
        </label>
        <h2 className="w-full font-bold">
          {userProfile.city || "* Completar"}
        </h2>
      </div>

      <div className="w-1/2 flex flex-col gap-2">
        <label htmlFor="ZIP_Code" className="w-full text-white font-bold">
          C.P. / ZIP
        </label>
        <h2 className="w-full font-bold">
          {userProfile.ZIP_Code || "* Completar"}
        </h2>
      </div>
    </div>
  );
};

export default City_input;
