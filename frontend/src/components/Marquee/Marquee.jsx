import React, { useEffect, useRef } from 'react'


import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap/gsap-core'

import SplitType from "split-type";



const Marquee = () =>  {

  const app = useRef()
  const text = new SplitType("#text_stats")

  useGSAP(
    () => {
      gsap
        .to(".stats_part", {
          xPercent: -100,
          repeat: -1,
          duration: 8,
          ease: "linear",
        })
        .totalProgress(0.5);
    },
    { scope: app }
  );
  

  return(

  <div className='stats_section bg-[#DBB1BC]' ref={app}>
      <section className="stats_ ">
        <div className='stats_inner'>
          <div id='text_stats' className="stats_part">Descuentos increibles | 30% off con Mercado Pago | Delivery sin cargo superando los $60.000 |</div>
          <div id='text_stats' className="stats_part">Descuentos increibles | 30% off con Mercado Pago | Delivery sin cargo superando los $60.000 |</div>
          <div id='text_stats' className="stats_part">Descuentos increibles | 30% off con Mercado Pago | Delivery sin cargo superando los $60.000 |</div>
          <div id='text_stats' className="stats_part">Descuentos increibles | 30% off con Mercado Pago | Delivery sin cargo superando los $60.000 |</div>
          <div id='text_stats' className="stats_part">Descuentos increibles | 30% off con Mercado Pago | Delivery sin cargo superando los $60.000 |</div>
          <div id='text_stats' className="stats_part">Descuentos increibles | 30% off con Mercado Pago | Delivery sin cargo superando los $60.000 |</div>
          <div id='text_stats' className="stats_part">Descuentos increibles | 30% off con Mercado Pago | Delivery sin cargo superando los $60.000 |</div>
    </div>
  </section>
  </div>
  )}


export default Marquee