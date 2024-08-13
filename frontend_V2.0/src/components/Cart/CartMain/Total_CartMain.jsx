import useTotal from "../../../hooks/Cart/useTotal";

const Total_CartMain = ({ cart }) => {
  const { total } = useTotal(cart);

  const formattedTotal = total.toLocaleString('es-ES');

  return (
    <div className="bg-slate-200 w-full text-center rounded-md text-lg text-black/50 font-bold py-2">
      <h2>TOTAL : ${formattedTotal}</h2>
    </div>
  );
};

export default Total_CartMain;
