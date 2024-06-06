import { Route, Routes } from "react-router-dom";
import CartMain from "./CartPages/CartMain";
import CartUserData from "./CartPages/CartUserData";

const Cart = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<CartMain />} />
        <Route path="/userdata" element={<CartUserData />} />
      </Routes>
    </>
  );
};

export default Cart;
