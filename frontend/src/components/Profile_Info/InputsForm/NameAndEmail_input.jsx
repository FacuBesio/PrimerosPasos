const NameAndEmail_input = ({ userProfile }) => {
  return (
    <div className="w-full mt-8 px-4 py-1 flex gap-10">
      <div className="w-1/2 flex flex-col gap-2">
        <label htmlFor="name" className="w-full text-white font-bold">
          Nombre
        </label>
        <h2 className="w-full text-xl font-bold"> {userProfile.name || ""}</h2>
      </div>

      <div className="w-1/2 flex flex-col gap-2">
        <label htmlFor="email" className="w-full text-white font-bold">
          Email
        </label>
        <h2 className="w-full text-xl font-bold"> {userProfile.email || ""}</h2>
      </div>
    </div>
  );
};

export default NameAndEmail_input;
