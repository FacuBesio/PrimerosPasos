import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap/gsap-core';


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
  const data = generateData(7); 
  useGSAP(() => {
    gsap.to(".stats_part", {
      xPercent: -100,
      repeat: -1,
      duration: 10,
      ease: "linear",
    }).totalProgress(0.5);
  }, { scope: app });
  return(
    <div className='stats_section bg-[#e8ced5]' ref={app}>
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
