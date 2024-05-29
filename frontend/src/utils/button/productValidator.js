const productValidator = (cart, productToAdd) => {
  if (cart) {
    let isProductExist = false;
    let enabledStock = { state: true, message: "" };

    const updatedProducts = cart.products.map((product) => {
      if (product.id === productToAdd.id) {
        isProductExist = true;
        if (product.stock > product.cantidad) {
          product.cantidad = product.cantidad + 1;
          return product;
        } else {
          enabledStock.state = false;
          enabledStock.message = `Ya se solicito todo el stock disponible del producto '${product.name}', no se puede agregar mas unidades.`;
        }
      }
      return product;
    });
    return { enabledStock, isProductExist, updatedProducts };
  }
};

export default productValidator;
