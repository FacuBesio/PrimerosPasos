const productValidator = (cart, productToAdd) => {
  if (cart && cart.products) {
    let isProductAlredyAdded = false;
    let enabledStock = { state: true, message: "" };

    const products_with_modifed_quantities = cart.products.map((product) => {
      if (product.id === productToAdd.id) {
        isProductAlredyAdded = true;
        if (product.stock > product.cantidad) {
          product.cantidad += 1;
          return product;
        } else {
          enabledStock.state = false;
          enabledStock.message = `Ya se solicitó todo el stock disponible del producto '${product.name}', no se pueden agregar más unidades.`;
        }
      }
      return product;
    });

    return {
      enabledStock,
      isProductAlredyAdded,
      products_with_modifed_quantities,
    };
  }

  return {
    enabledStock: { state: true, message: "" },
    isProductAlredyAdded: false,
    products_with_modifed_quantities: [],
  };
};

export default productValidator;
