import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";

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
    // console.log("product: ", product);
    // console.log("cart: ", cart);
    const newProducts = cart.products.filter((e) => e.id !== product_id);
    const updatedCart = { ...cart, products: newProducts };
    if (isAuthenticated && user) {
      // putOrder(cart.id, product);
    }
    setCart(updatedCart);
  };

  return { cart, setCart, handlerRemoveProducts };
};

export default useCart;
