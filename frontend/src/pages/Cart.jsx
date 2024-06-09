import { Route, Routes } from "react-router-dom";
import CartMain from "./CartPages/CartMain";
import CartUserData from "./CartPages/CartUserData";
import CartPurchase from "./CartPages/CartPurchase";

const Cart = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<CartMain />} />
        <Route path="/userdata" element={<CartUserData />} />
        <Route path="/purchase" element={<CartPurchase />} />
      </Routes>
    </>
  );
};

export default Cart;
