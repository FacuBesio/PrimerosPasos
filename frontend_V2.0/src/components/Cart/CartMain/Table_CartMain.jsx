import { CloseCircleOutlined } from "@ant-design/icons";
import { tableStyle } from "../../../styles";
import { useAuth0 } from "@auth0/auth0-react";
import Quantities_Button from "../../Buttons/Quantities_Button/Quantities_Button";

const Table_CartMain = ({ cart, setCart, handlerRemoveProducts }) => {
  const { isAuthenticated } = useAuth0();
  const user = JSON.parse(window.localStorage.getItem("userData"));

  return (
    <div>
      <table className="responsive-table text-center w-full">
        <thead>
          <tr className="h-16 uppercase">
            <th className={tableStyle}>Producto</th>
            <th className={tableStyle}>Precio</th>
            <th className={tableStyle}>Cantidad</th>
            <th className={tableStyle}>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {cart.products.length > 0 ? (
            cart.products.map((product) => (
              <tr
                key={product.id}
                className="border-b border-gray-200 relative"
              >
                <td
                  className="flex items-center gap-5 py-3 px-5"
                  data-label="Producto"
                >
                  <img
                    className="w-[80px] h-[80px] rounded-3xl"
                    src={product.img}
                    alt={product.name}
                  />
                  <h3 className=" text-[12px] md:text-base  tracking-tighter max-w-[120px]">
                    {product.name}
                  </h3>
                </td>
                <td className="py-3 px-5" data-label="Precio">
                  <h3 className="text-base">
                    ${product.price.toLocaleString("es-ES")}
                  </h3>
                </td>
                <td
                  className="p-2 h-full justify-center text-[12px] md:text-base"
                  data-label="Cantidad"
                >
                      <Quantities_Button product={product} cart={cart} setCart={setCart} />
                </td>
                <td className="py-3 px-5" data-label="Subtotal">
                  <h3 className="text-base">
                    ${product.price * product.cantidad}
                  </h3>
                </td>
                <td className="relative">
                  <button
                    onClick={() => handlerRemoveProducts(product.id)}
                    className="transition-transform duration-150 hover:scale-105"
                  >
                    <CloseCircleOutlined className="bg-white text-xl rounded-full" />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center mt-4 text-black">
                No hay productos seleccionados en el carrito
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table_CartMain;
