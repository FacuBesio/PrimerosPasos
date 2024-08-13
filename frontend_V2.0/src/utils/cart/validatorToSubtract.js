const validatorToSubtract = (cart, productToSubtract) => {
  let enabledStock = { state: true, message: "" };

  const updatedProducts = cart.products.map((product) => {
    if (product.id === productToSubtract.id) {
      if (product.cantidad > 1) {
        product.cantidad = product.cantidad - 1;
        return product;
      } else {
        enabledStock.state = false;
        enabledStock.message = `No se pueden solicitar menos de una unidad.`;
      }
    }
    return product;
  });
  return { enabledStock, updatedProducts };
};

export default validatorToSubtract;
