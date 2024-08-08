const productValidator = (cart, productToAdd) => {
  if (cart) {
    let isProductAlredyAdded = false;
    let enabledStock = { state: true, message: "" };

    const verified_cart_products = cart.products.map((product) => {
      if (product.id === productToAdd.id) {
        isProductAlredyAdded = true;
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
    return { enabledStock, isProductAlredyAdded, verified_cart_products };
  }
};

export default productValidator;
