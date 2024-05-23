import creditCard from "../../assets/creditcard.png";
import house from "../../assets/house.png";
import car from "../../assets/car.png";
import clock from "../../assets/clock.png";

const AditionalInfo = () => {
  return (
    <section className="flex  p-8  justify-center gap-4">
      <div className="flex gap-4 flex-col md:flex-row">
        <a className="flex flex-col items-center  gap-2 text-center max-w-[220px]" href="/shop" alt="Tarjeta de credito">
          <img
            className=" w-[86px] "
            src={creditCard}
            alt="Tarjeta de credito"
          />
          <h2 className="  tracking-tight leading-4">Cuotas sin interes</h2>
          <h2 className="  text-[#848584] tracking-tight leading-4">
            (3 cuotas sin interes en productos seleccionados)
          </h2>
        </a>
        <a className="flex flex-col items-center  gap-2 text-center max-w-[220px]" href="/shop" alt="Take away">
          <img className=" w-[86px] " src={house} alt="Casa" />
          <h2 className="   tracking-tight leading-4">Pick up</h2>
          <h2 className="  text-[#848584] tracking-tight leading-4">
            (Veni a retirar tu compra por la sucursal mas cercana)
          </h2>
        </a>
      </div>
      <div className="flex gap-4 flex-col md:flex-row justify-between ">
        <a className="flex flex-col items-center  gap-2 text-center max-w-[220px]" href="/shop" alt="Envio gratis">
          <img className=" w-[86px] " src={car} alt="Auto" />
          <h2 className="   tracking-tight leading-4">Envio gratis</h2>
          <h2 className="  text-[#848584] tracking-tight leading-4">
            (Compras superiores a $50.000)
          </h2>
        </a>
        <a className="flex flex-col items-center  gap-2 text-center max-w-[220px]" href="/shop" alt="Prioridad de envio">
          <img className=" w-[86px] " src={clock} alt="Reloj" />
          <h2 className="   tracking-tight leading-4">Prioridad de envio</h2>
          <h2 className="  text-[#848584] tracking-tight leading-4">
            (Zonas ubicadas en AMBA-CABA)
          </h2>
        </a>
      </div>
    </section>
  );
};

export default AditionalInfo;
