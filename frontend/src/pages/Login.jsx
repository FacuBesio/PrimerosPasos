import React from "react";
import { Footer, Marquee, Navbar, Title } from "../components";

const Login = () => {
  return (
    <div className="bg-[#eae0f5]  overflow-hidden">
      
      <Marquee />
      <Title />
      <Navbar />
      <div>
       Aqui iria Auth0
      </div>
      <Footer />
    </div>
  );
};

export default Login;
