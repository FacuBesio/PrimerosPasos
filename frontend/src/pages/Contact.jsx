import React from "react";
import { Footer, Marquee, Navbar, Title } from "../components";

const Contact = () => {
  return (
    <div className="bg-[#eae0f5]  overflow-hidden">
      <Marquee />
      <Title />
      <Navbar />
      <div>Formulario de contacto con EmailJS - buscar en la pag de chukkeee</div>
      <Footer />
    </div>
  );
};

export default Contact;
