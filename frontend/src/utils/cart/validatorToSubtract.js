const productValidator = (cart, productToAdd) => {
  if (cart) {
    let isProductExist = false;
    let enabledStock = { state: true, message: "" };

    const updatedProducts = cart.products.map((product) => {
      if (product.id === productToAdd.id) {
        isProductExist = true;
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
    return { enabledStock, isProductExist, updatedProducts };
  }
};

export default productValidator;
