import React, { useEffect, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap/gsap-core';
import SplitType from "split-type";

const generateData = (count) => {
  const data = [];
  const text = "Descuentos increibles | 30% off con Mercado Pago | Delivery sin cargo superando los $60.000 |";
  for (let i = 0; i < count; i++) {
    data.push(text);
  }
  return data;
};

const Marquee = () =>  {

  const app = useRef();
  const text = new SplitType("#text_stats");
  const data = generateData(7); // Cambia este número según la cantidad de elementos que necesites

  useGSAP(() => {
    gsap.to(".stats_part", {
      xPercent: -100,
      repeat: -1,
      duration: 10,
      ease: "linear",
    }).totalProgress(0.5);
  }, { scope: app });
  
  return(
    <div className='stats_section bg-[#DBB1BC]' ref={app}>
      <section className="stats_ ">
        <div className='stats_inner'>
          {data.map((item, index) => (
            <div key={index} className="stats_part" id={`text_stats_${index}`}>{item}</div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Marquee;
