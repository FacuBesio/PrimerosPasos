import Table_CartMain from "./Table_CartMain";
import Buttons_CartMain from "../../Buttons/Cart_Buttons/Buttons_CartMain";
import useCart from "../../../hooks/Cart/useCart";
import Total_CartMain from "./Total_CartMain";
import Header_CartMain from "./Header_CartMain";
import { cartMainStyle, invisible, visible } from "../../../styles";
import useLoadEffect from "../../../hooks/Effects/useLoadEffect";

const CartMain = () => {
  const { cart, setCart, handlerRemoveProducts } = useCart();
  const { loadEffect } = useLoadEffect();

  const visibility = loadEffect ? visible : invisible;

  return (
    <div className={`${cartMainStyle} ${visibility}`}>
      <Header_CartMain />

      <div className="rounded-md w-full">
        <h1 className="text-center py-2 font-bold text-2xl text-black/50 px-4 ">
          Confirma los productos de tu compra antes de continuar...
        </h1>
      </div>

      <div className="flex flex-col justify-center items-center p-4 gap-4 overflow-auto w-full">
        <div className="flex flex-col bg-gray-100 p-2 px-4 rounded-md h-fit ">
          <Table_CartMain cart={cart} setCart={setCart} handlerRemoveProducts={handlerRemoveProducts} />

          <div className="flex flex-col p-4 rounded-md gap-4 justify-center items-center text-[12px] md:text-[18px] font-bold">
            <Total_CartMain cart={cart} />
            <Buttons_CartMain />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartMain;
