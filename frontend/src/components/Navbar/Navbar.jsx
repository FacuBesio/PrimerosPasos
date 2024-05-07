import React from "react";

const Navbar = () => {
  return (
    <nav className="flex gap-4 justify-center items">
      <a href="/" className="text-xl hover:scale-105 " >Home</a>
      <a href="/shop" className="text-xl hover:scale-105 " >Categorias</a>
      <a href="/contacto" className="text-xl hover:scale-105 " >Contacto</a>
      <a href="/login" className="text-xl hover:scale-105 " >Login</a>
    </nav>
  );
};

export default Navbar;
