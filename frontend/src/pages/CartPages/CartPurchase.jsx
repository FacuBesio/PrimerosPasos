import { Footer, Marquee, Navbar, Title } from "../../components";
import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import putOrder from "../../utils/cart/putOrder";
import crossRed from "../../assets/crossRed.png";
import { Link } from "react-router-dom";
import ButtonQuantities from "../../components/ButtonQuantities/ButtonQuantities";

const PurchaseCart = () => {
  const { isAuthenticated } = useAuth0();
  const user = JSON.parse(window.localStorage.getItem("userData"));
  const cart = JSON.parse(window.localStorage.getItem("cart"));
  const [newProductsRefresh, setNewProductsRefresh] = useState(false);

  const handlerRemoveProducts = (product) => {
    const newProducts = cart.products.filter((e) => e.id !== product.id);
    const updatedCart = { ...cart, products: newProducts };
    const order_id = cart.id;
    isAuthenticated && user && putOrder(order_id, product);
    window.localStorage.setItem("cart", JSON.stringify(updatedCart));
    setNewProductsRefresh(!newProductsRefresh);
  };

  return (
    <div>
      {" "}
      <Marquee />
      <Title />
      <Navbar />
      <div className="flex flex-row bg-white border-t-2 border-red-200  p-2 h-screen justify-center gap-2">
        <div className=" flex flex-col   bg-gray-100  p-2 px-4 rounded-md h-fit ">
          <h2 className=" md:text-xl text-center">
            Hola <span>Luciano</span> revisa tu carrito antes de realizar la
            compra.
          </h2>

          {cart.products.map((product) => (
            <div
              className="flex  justify-center  p-2 rounded-md m-2 w-fit border gap-4 "
              key={product.id}
            >
              <img
                className="max-w-[80px] max-h-[80px] rounded-full border border-red-200 "
                src={product.img}
                alt=""
              />

              <div className="flex   justify-center items-center gap-2   ">
                <h3 className="text-sm tracking-tighter mb-2 ">
                  {product.name}
                </h3>
                <h3 className="text-sm">Stock: {product.stock}</h3>
                <h3 className="text-sm">Precio: ${product.price}</h3>
                <ButtonQuantities product={product} />
              </div>
              <div className="flex  ">
                <button
                  className="flex w-full"
                  onClick={() => handlerRemoveProducts(product)}
                >
                  <img
                    className="items-start max-w-4 border border-red-200 rounded-md bg-white hover:scale-110"
                    src={crossRed}
                    alt=""
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className=" flex flex-col bg-[#D3C4E3] h-fit p-2 rounded-md gap-4 justify-center items-center">
          <h2>Total : $150.000</h2>
          <Link
            className="border p-2 rounded-md hover:bg-[#DBB1BC]"
            to={"/cart/purchase"}
          >
            Comprar.
          </Link>
          <Link
            className="border p-2 rounded-md hover:bg-[#DBB1BC]"
            to={"/shop"}
          >
            Continuar comprando.
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PurchaseCart;
