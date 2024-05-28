import React from "react";
import Marquee from "../Marquee/Marquee";
import Title from "../Title/Title";
import Navbar from "../Navbar/Navbar";

const Profile = () => {
  return (
    <div className="h-screen">
      <Marquee />
      <Title />
      <Navbar />
      <section className="border border-red-200 h-screen bg-gray-200">
        <h1 className="text-center text-xl text-[#333] pt-4">
          Datos de contacto:
        </h1>
      </section>
    </div>
  );
};

export default Profile;
