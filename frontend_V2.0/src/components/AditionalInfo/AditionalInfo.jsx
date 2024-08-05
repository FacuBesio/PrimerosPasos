import creditCard from "../../assets/creditcard.png";
import house from "../../assets/house.png";
import car from "../../assets/car.png";
import clock from "../../assets/clock.png";

const AditionalInfo = () => {
  const aditionalInfo = [
    {
      id: 1,
      img: creditCard,
      alt: "Tarjeta de credito.",
      text: "Cuotas sin interes",
      text2: "(3 cuotas sin interes en productos seleccionados)",
    },
    {
      id: 2,
      img: house,
      alt: "Take away",
      text: "Pick up",
      text2: "(Veni a retirar tu compra por la sucursal mas cercana)",
    },
    {
      id: 3,
      img: car,
      alt: "Envio gratis.",
      text: "Envio gratis",
      text2: "(Compras superiores a $50.000)",
    },
    {
      id: 4,
      img: clock,
      alt: "Prioridad de envio.",
      text: "Prioridad de envio",
      text2: "(Zonas ubicadas en AMBA-CABA)",
    },
  ];
  return (
    <section className="flex justify-center p-4 md:p-6 lg:p-8 text-[12px] md:text-[18px] border-t-white border-t-4 border-b-white border-b-2 ">
      <div className="flex gap-2 flex-col md:flex-row">
        {aditionalInfo.map((info) => (
          <a
            key={info.id}
            className="flex flex-col items-center gap-1 text-center max-w-[220px]"
            href="/shop"
            alt={info.alt}
          >
            <img
              className="mb-1 w-[64px] md:w-[86px] "
              src={info.img}
              alt={info.alt}
            />
            <h2 className="tracking-tight leading-4">{info.text}</h2>
            <h2 className="text-[#848584] tracking-tight leading-4">
              {info.text2}
            </h2>
          </a>
        ))}
      </div>
    </section>
  );
};

export default AditionalInfo;
