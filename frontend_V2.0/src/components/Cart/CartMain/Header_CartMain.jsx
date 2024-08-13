import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

const Header_CartMain = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <div className="bg-white py-8 flex flex-col lg:flex-row justify-center items-center gap-4 w-full">
      <div className="flex items-center gap-2 cursor-pointer">
        <div className="bg-[#5a5b5a] text-white w-8 h-8 flex items-center justify-center rounded-full">
          1
        </div>
        <h1 className="text-md uppercase text-[#5a5b5a]">Productos Carrito</h1>
      </div>
      <div className="h-[1px] w-[100px] bg-[#ccc]" />

      <>
        {isAuthenticated ? (
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="bg-[#ccc] text-white w-8 h-8 flex items-center justify-center rounded-full">
              2
            </div>
            <Link to={"/cart/userdata"}>
              <h1 className="text-md uppercase text-[#ccc]">
                Datos Personales
              </h1>
            </Link>
          </div>
        ) : (
          <div className="flex items-center gap-2 cursor-not-allowed ">
            <div className="bg-[#ccc] text-white w-8 h-8 flex items-center justify-center rounded-full">
              2
            </div>
            <h1 className="text-md uppercase text-[#ccc]">Datos Personales</h1>
          </div>
        )}
        <div className="h-[1px] w-[100px] bg-[#ccc]" />
      </>

      <>
        {isAuthenticated ? (
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="bg-[#ccc] text-white w-8 h-8 flex items-center justify-center rounded-full">
              3
            </div>
            <Link to={"/cart/delivery"}>
              <h1 className="text-md uppercase text-[#ccc]">Datos Envío</h1>
            </Link>
          </div>
        ) : (
          <div className="flex items-center gap-2 cursor-not-allowed ">
            <div className="bg-[#ccc] text-white w-8 h-8 flex items-center justify-center rounded-full">
              3
            </div>
            <h1 className="text-md uppercase text-[#ccc]">Datos Envío</h1>
          </div>
        )}
        <div className="h-[1px] w-[100px] bg-[#ccc]" />
      </>

      <div className="flex items-center gap-2 cursor-not-allowed">
        <div className="bg-[#ccc] text-[white] w-8 h-8 flex items-center justify-center rounded-full">
          4
        </div>
        <h1 className="text-md uppercase text-[#ccc]">Compra</h1>
      </div>
    </div>
  );
};

export default Header_CartMain;
