import React from "react";
import { useAuth0 } from "@auth0/auth0-react";


const Navbar = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <nav className="flex gap-4 justify-center items pb-6">
      <a href="/" className="text-xl hover:scale-105 " >Home</a>
      <a href="/shop" className="text-xl hover:scale-105 " >Categorias</a>
      <a href="/contacto" className="text-xl hover:scale-105 " >Contacto</a>
      <button   className="text-xl hover:scale-105 " onClick={() => loginWithRedirect()}>Login</button>
    </nav>
  );
};

export default Navbar;
