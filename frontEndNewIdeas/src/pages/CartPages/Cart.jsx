import { Footer, Marquee, Navbar, Title } from "../../components";
import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import putOrder from "../../utils/cart/putOrder";
import crossRed from "../../assets/crossRed.png";
import { Link } from "react-router-dom";
import ButtonQuantities from "../../components/ButtonQuantities/ButtonQuantities";

const CartMain = () => {
  const { isAuthenticated } = useAuth0();
  const user = JSON.parse(window.localStorage.getItem("userData"));
  const cart = JSON.parse(window.localStorage.getItem("cart"));
  const [newProductsRefresh, setNewProductsRefresh] = useState(false);

  const [quantities, setQuantities] = useState(
    cart.products.reduce((acc, product) => {
      acc[product.id] = product.cantidad;
      return acc;
    }, {})
  );

  const incrementQuantity = (productId) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: prevQuantities[productId] + 1,
    }));
  };

  const decrementQuantity = (productId) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: Math.max(prevQuantities[productId] - 1, 1), // Evitar que la cantidad sea menor que 1
    }));
  };

  const handlerRemoveProducts = (product) => {
    const newProducts = cart.products.filter((e) => e.id !== product.id);
    const updatedCart = { ...cart, products: newProducts };
    const order_id = cart.id;
    isAuthenticated && user && putOrder(order_id, product);
    window.localStorage.setItem("cart", JSON.stringify(updatedCart));
    setNewProductsRefresh(!newProductsRefresh);
  };

  return (
    <div className="">
      {" "}
      <Marquee />
      <Title />
      <Navbar />
      <div className="flex flex-row bg-white border-t-2 border-red-200 justify-center h-screen  p-2  gap-2 overflow-auto">
        <div className=" flex flex-col  bg-gray-100  p-2 px-4 rounded-md h-fit border border-red-200 ">
          <h2 className=" md:text-md text-center">
            Hola <span>{user.name}</span> revisa tu carrito antes de realizar la
            compra.
          </h2>

          <div>
            {cart.products.length > 0 ? (
              cart.products.map((product) => (
                <div
                  className="flex justify-between p-2 rounded-md m-2 w-full border gap-4 "
                  key={product.id}
                >
                  <img
                    className="max-w-[80px] max-h-[80px] rounded-full border border-red-200"
                    src={product.img}
                    alt=""
                  />

                  <div className="flex items-center gap-2 w-full justify-between">
                    <h3 className="text-sm tracking-tighter max-w-[120px] ">
                      {product.name}
                    </h3>
                    {/* <h3 className="text-sm">Stock: {product.stock}</h3> */}
                    <h3 className="text-sm">Precio: ${product.price}</h3>
                    <h3 className="text-sm">SubTotal: ${product.price}</h3>
                    <ButtonQuantities  product={product}/>
                   
                  </div>
                  <div className="flex">
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
              ))
            ) : (
              <h2 className="text-center mt-4 text-black ">
                No hay productos seleccionados en el carrito
              </h2>
            )}
          </div>
        </div>
        <div className=" flex flex-col bg-gray-100 h-fit p-2 rounded-md gap-4 justify-center items-center border border-red-200 ">
          <h2 className="border-b">Resumen de compra:</h2>
         
          <h2>Total : $150.000</h2>
          <h3>Envio: <span className="text-green-400">gratis</span></h3>
          <Link
            className="border p-2 rounded-md hover:bg-[#DBB1BC] bg-red-200"
            to={"/cart/purchase"}
          >
            Comprar.
          </Link>
          <Link
            className="border p-2 rounded-md hover:bg-[#DBB1BC] bg-red-200"
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

export default CartMain;
