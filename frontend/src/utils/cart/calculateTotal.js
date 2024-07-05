const calculateTotal = (cart, setTotal) => {
    let newTotal = cart.products.reduce(
      (acc, product) => acc + product.price * product.cantidad,
      0
    );
    setTotal(newTotal);
  };

  export default calculateTotal;