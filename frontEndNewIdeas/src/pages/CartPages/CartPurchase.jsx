import { Footer, Marquee, Navbar, Title } from "../../components";
import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import putOrder from "../../utils/cart/putOrder";
import crossRed from "../../assets/crossRed.png";
import { Link } from "react-router-dom";
import ButtonQuantities from "../../components/ButtonQuantities/ButtonQuantities";
import Profile from "../../components/Profile/Profile";

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

  console.log("user: ", user);

  const formLabels = [
    {
      spanName: "Nombre",
      type: "text",
      name: "name",
      value: "",
      placeholder: "Luciano",
    },
    {
      spanName: "Email",
      type: "text",
      name: "email",
      value: "",
      placeholder: "a@gmail.com",
    },
    {
      spanName: "Pais",
      type: "text",
      name: "country",
      value: "",
      placeholder: "Argentina",
    },
    {
      spanName: "Provincia",
      type: "text",
      name: "state",
      value: "",
      placeholder: "Buenos Aires",
    },
    {
      spanName: "Ciudad",
      type: "text",
      name: "city",
      value: "",
      placeholder: "San jorge",
    },
    {
      spanName: "Calle",
      type: "text",
      name: "street",
      value: "",
      placeholder: "Av los arbustos",
    },
    {
      spanName: "Número de la calle",
      type: "number",
      name: "streetNumber",
      value: "",
      placeholder: "23414",
    },
    {
      spanName: "Código postal",
      type: "number",
      name: "postal",
      value: "",
      placeholder: "3232",
    },
    {
      spanName: "Nro. de teléfono",
      type: "number",
      name: "phone",
      value: "",
      placeholder: "14245324",
    },
  ];

  return (
    <div>
      {" "}
      <Marquee />
      <Title />
      <Navbar />
      <div className="flex  flex-col  lg:flex-row bg-white border-t-2 border-red-200  p-2 lg:h-screen justify-center gap-2 overflow-auto">
        <section className="border border-red-200  bg-gray-100 rounded-md">
          <h1 className="text-center text-xl text-[#333] p-2">
            Revisa los datos de contacto antes de realizar la compra.
          </h1>
          <div className="">
            <form
              className=" p-6 grid  md:grid-cols-2 gap-2 justify-items-center items-center w-fit "
              action=""
            >
              {formLabels.map((e) => (
                <label key={e.name} className="flex flex-col">
                  <span className="text-[#5a5b5a] ">{e.spanName}</span>
                  <input
                    type={e.type}
                    name={e.name}
                    value={e.value}
                    // onChange=""
                    placeholder={e.placeholder}
                    className="border-2 border-red-200 bg-tertiary p-1 rounded-lg max-w-[220px]  "
                  />
                </label>
              ))}
              <button className="flex bg-red-300  w-fit items-center h-fit max-h-[24px] p-4 hover:scale-105 hover:bg-red-200 transition-all duration-200 rounded-xl border border-[#Dbb1bc] text-[#393334]">
                Realizar cambios
              </button>
            </form>
          </div>
        </section>

        <div className=" flex flex-col   bg-gray-100  p-2 px-4 rounded-md h-fit border  border-red-200  ">
          <h2 className=" md:text-xl text-center"></h2>

          {cart.products.map((product) => (
            <div
              className="flex  justify-between   p-2 rounded-md m-2 w-full border gap-4 overflow-hidden  "
              key={product.id}
            >
              <img
                className="max-w-[80px] max-h-[80px] rounded-full border border-red-200  "
                src={product.img}
                alt=""
              />

              <div className="flex justify-between   items-center gap-2 w-full  ">
                <h3 className="text-sm tracking-tighter mb-2 max-w-[120px] ">
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
        <div className=" flex flex-col bg-gray-100 h-fit p-2 rounded-md gap-4 justify-center items-center border border-red-200">
          <h2>Total : $150.000</h2>
          <Link
            className="border p-2 rounded-md hover:bg-[#DBB1BC] bg-red-300"
            to={"/cart/purchase"}
          >
            Comprar.
          </Link>
          <Link
            className="border p-2 rounded-md hover:bg-[#DBB1BC] bg-red-300"
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
