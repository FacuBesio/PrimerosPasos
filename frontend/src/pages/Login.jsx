import React from "react";
import { Footer, Marquee, Navbar, Title } from "../components";
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {

  const { loginWithRedirect } = useAuth0();
  return (
    <div className="bg-[#eae0f5]  overflow-hidden h-screen">
      
      <Marquee />
      <Title />
      <Navbar />
      <div>
      <button onClick={() => loginWithRedirect()}>Log In</button>;
      </div>
      <Footer />
    </div>
  );
};

export default Login;
