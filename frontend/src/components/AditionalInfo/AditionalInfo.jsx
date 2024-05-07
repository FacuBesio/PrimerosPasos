import React from "react";
import creditCard from "../../assets/creditcard.png";
import house from "../../assets/house.png";
import car from "../../assets/car.png";
import clock from "../../assets/clock.png";

const AditionalInfo = () => {
  return (
    <section className="flex px-12 p-8 justify-around">
      <a className="flex flex-col gap-2 text-center" href="">
        <img className="max-w-[140px]" src={creditCard} alt="Tarjeta de credito" />
        <h2>Cuotas sin interes</h2>
      </a>
      <a className="flex flex-col gap-2 text-center" href="">
        <img className="max-w-[140px]" src={house} alt="Casa" />
        <h2>Pick up</h2>
      </a>
      <a className="flex flex-col gap-2 text-center" href="">
        <img className="max-w-[140px]" src={car} alt="Auto" />
        <h2>Envio gratis</h2>
      </a>
      <a className="flex flex-col gap-2 text-center" href="">
        <img className="max-w-[140px]" src={clock} alt="Reloj" />
        <h2>Prioridad de envio</h2>
      </a>
    </section>
  );
};

export default AditionalInfo;
