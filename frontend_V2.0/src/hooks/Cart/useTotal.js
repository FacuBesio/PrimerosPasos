import { useEffect, useState } from "react";

const useTotal = (cart) => {
  const [total, setTotal] = useState(0);

  const calculateTotal = () => {
    let newTotal = cart.products.reduce(
      (acc, product) => acc + product.price * product.cantidad,
      0
    );
    setTotal(newTotal);
  };

  useEffect(() => {
    calculateTotal();
  }, [cart]);

  return { total };
};

export default useTotal;
