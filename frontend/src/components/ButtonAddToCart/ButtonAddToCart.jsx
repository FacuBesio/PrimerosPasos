/* eslint-disable react/prop-types */
import addToCart from "../../utils/cart/addToCart";
import { useAuth0 } from "@auth0/auth0-react";
import cartFill from "../../assets/cartFill.png";
// import { ToastContainer, toast } from 'react-toastify';

// import 'react-toastify/dist/ReactToastify.css';
import { FlagCartEffectContext } from "../../context";
import { useContext } from "react";

const Button = ({ product }) => {
  const { isAuthenticated } = useAuth0();

  const {setFlag} = useContext(FlagCartEffectContext)

  // const notify = () => toast.success('Agregaste un producto al carrito', {
  //   position: "top-right",
  //   autoClose: 1000,
  //   hideProgressBar: false,
  //   closeOnClick: true,
  //   pauseOnHover: true,
  //   draggable: true,
  //   progress: undefined,
  //   theme: "colored",
  // });

  const cantidad = 1;
  const { id, brand, name, price, stock, img } = product;
  const productToAdd = { id, brand, name, price, stock, img, cantidad };

  const handleAddToCartAndNotify = () => {
    addToCart(productToAdd, isAuthenticated);
    setFlag(true)
    // notify();
  };

  return (
    <div>
      <button
        onClick={handleAddToCartAndNotify}
        className="absolute top-[-25px] right-1 bg-gray-200 w-fit p-1 mt-6 hover:scale-105 hover:bg-red-200 transition-all duration-200 rounded-xl border border-[#Dbb1bc] text-[#393334]"
      >
        <img className="w-6 h-6" src={cartFill} alt="" />
      </button>
      {/* <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      /> */}
    </div>
  );
};

export default Button;
