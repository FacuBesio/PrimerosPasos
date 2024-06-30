const User_info = ({ newUser }) => {
  return (
    <div className="w-full px-4 pt-3 pb-5 flex flex-col gap-2 text-[12px] md:text-[18px]">
      <label htmlFor="name" className="w-full text-white font-bold">
        Usuario {newUser?.id || "-"}
      </label>
      <label htmlFor="name" className="w-full text-white font-bold">
        {newUser?.name || "-"}
      </label>
      <label htmlFor="name" className="w-full text-white font-bold">
      {newUser?.email || "-"}
      </label>
    
    </div>
  );
};

export default User_info;
