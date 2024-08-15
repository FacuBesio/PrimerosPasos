import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import putOrder from "../../services/Cart/putOrder";

const useCart = () => {
  const { isAuthenticated } = useAuth0();
  const user = JSON.parse(window.localStorage.getItem("userData"));
  const [cart, setCart] = useState(() => {
    return JSON.parse(window.localStorage.getItem("cart"));
  });

  useEffect(() => {
    window.localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handlerRemoveProducts = (product_id) => {
    const updatedProducts = cart.products.filter((e) => e.id !== product_id);
    const updatedCart = { ...cart, products: updatedProducts };
    setCart(updatedCart);
    if (isAuthenticated && user) {
      putOrder(cart.id, {id: product_id});
    }
  };

  return { cart, setCart, handlerRemoveProducts };
};

export default useCart;
