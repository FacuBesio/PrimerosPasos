
import Marquee from "../Marquee/Marquee";
import Title from "../Title/Title";
import Navbar from "../Navbar/Navbar";

const Profile = () => {
  return (
    <div className="">
      <Marquee />
      <Title />
      <Navbar />
      <section className="border border-red-200  bg-gray-200">
        <h1 className="text-center text-xl text-[#333] pt-4">
          Datos de contacto:
        </h1>
        <div className="">
          <form className=" p-6 grid  md:grid-cols-2 gap-2 justify-items-center items-center w-fit " action="">
          <label className="flex flex-col">
            <span className="text-[#5a5b5a] ">Nombre</span>
            <input
              type="text"
              name="name"
              value=""
              onChange=""
              placeholder="Luciano"
              className="border-2 border-red-200 bg-tertiary p-1 rounded-lg max-w-[220px]  "
            />
          </label>
          <label className="flex flex-col">
            <span className="text-[#5a5b5a]  ">Email</span>
            <input
              type="text"
              name="name"
              value=""
              onChange=""
              placeholder="lucho@gmail.com"
              className="border-2 border-red-200 bg-tertiary p-1 placeholder:text-secondary  rounded-lg max-w-[220px]  "
            />
          </label>
          <label className="flex flex-col">
            <span className="text-[#5a5b5a]  ">Pais</span>
            <input
              type="text"
              name="name"
              value=""
              onChange=""
              placeholder="Argentina"
              className="border-2 border-red-200 bg-tertiary p-1 placeholder:text-secondary  rounded-lg  max-w-[220px] "
            />
          </label>
          <label className="flex flex-col">
            <span className="text-[#5a5b5a]  ">Provincia</span>
            <input
              type="text"
              name="name"
              value=""
              onChange=""
              placeholder="Buenos Aires"
              className="border-2 border-red-200 bg-tertiary p-1 placeholder:text-secondary  rounded-lg max-w-[220px]  "
            />
          </label>
          <label className="flex flex-col">
            <span className="text-[#5a5b5a] ">Ciudad</span>
            <input
              type="text"
              name="name"
              value=""
              onChange=""
              placeholder="San Fernando"
              className="border-2 border-red-200 bg-tertiary p-1 placeholder:text-secondary  rounded-lg  max-w-[220px] "
            />
          </label>
          <label className="flex flex-col">
            <span className="text-[#5a5b5a] ">Calle</span>
            <input
              type="text"
              name="name"
              value=""
              onChange=""
              placeholder="Av carlin calvo"
              className="border-2 border-red-200 bg-tertiary p-1 placeholder:text-secondary  rounded-lg  max-w-[220px] "
            />
          </label>
          <label className="flex flex-col">
            <span className="text-[#5a5b5a]  ">Numero</span>
            <input
              type="text"
              name="name"
              value=""
              onChange=""
              placeholder="9999"
              className="border-2 border-red-200 bg-tertiary p-1 placeholder:text-secondary  rounded-lg  max-w-[220px] "
            />
          </label>
          <label className="flex flex-col">
            <span className="text-[#5a5b5a] ">Codigo Postal</span>
            <input
              type="text"
              name="name"
              value=""
              onChange=""
              placeholder="2323"
              className="border-2 border-red-200 bg-tertiary p-1 placeholder:text-secondary  rounded-lg  max-w-[220px] "
            />
          </label>
          <label className="flex flex-col">
            <span className="text-[#5a5b5a]  ">Numero de telefono</span>
            <input
              type="text"
              name="name"
              value=""
              onChange=""
              placeholder="114938493"
              className="border-2 border-red-200 bg-tertiary p-1 placeholder:text-secondary  rounded-lg max-w-[220px] "
            />
          </label>
          <button className='flex bg-red-300  w-fit items-center h-fit max-h-[24px] p-4 hover:scale-105 hover:bg-red-200 transition-all duration-200 rounded-xl border border-[#Dbb1bc] text-[#393334]'>Realizar cambios</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Profile;
