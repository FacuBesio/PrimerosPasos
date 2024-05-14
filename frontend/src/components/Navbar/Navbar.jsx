import React from "react";
import { useAuth0 } from "@auth0/auth0-react";


const Navbar = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <nav className="flex flex-col md:flex-row gap-4 justify-center items pb-6 ">
      <div className="flex gap-4 justify-center">
      <a href="/" className="md:text-xl  hover:text-[#DBB1BC] hover:scale-105  " >Home</a>
      <a href="/shop" className="md:text-xl hover:text-[#DBB1BC] hover:scale-105  " >Categorias</a>
      <a href="/contacto" className="md:text-xl hover:text-[#DBB1BC] hover:scale-105  " >Contacto</a>
      <button   className="md:text-xl hover:text-[#DBB1BC] hover:scale-105 text-[#5a5b5a] " onClick={() => loginWithRedirect()}>Login</button>
      </div>
      <div className='flex justify-center   '>
      <form className='flex gap-2' action="">
        <input placeholder="Buscar" className="px-1 rounded-md border border-red-200" type="text" />
        <button><img className="w-[30px]" src="/src/assets/VectorSearch.png" alt="" /></button>
    <div><img src="/src/assets/cart.png" className="w-[30px]" alt="" /></div>
      </form>
    </div>
    </nav>
  );
};

export default Navbar;
