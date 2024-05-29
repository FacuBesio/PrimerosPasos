const Button = ({ product }) => {
  const cantidad = 1;
  const { id, brand, name, price, stock, img } = product;
  const productToAdd = { id, brand, name, price, stock, img, cantidad };

  const handleAddToCart = () => {
    const cartStorage = window.localStorage.getItem("cart");
    const cart = JSON.parse(cartStorage);
    let isProductExist = false;
    let enabledStock = { state: true, message: "" };

    if (cart) {
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

      if (isProductExist && enabledStock.state) {
        const updatedCart = { ...cart, products: updatedProducts };
        window.localStorage.setItem("cart", JSON.stringify(updatedCart));
      } else if (isProductExist && !enabledStock.state) {
        console.log(enabledStock.message);
      } else {
        cart.products.push(productToAdd);
        window.localStorage.setItem("cart", JSON.stringify(cart));
      }
    }
  };

  return (
    <button
      onClick={handleAddToCart}
      className="flex bg-gray-200 w-fit p-2 mt-6 hover:scale-105 hover:bg-red-200 transition-all duration-200 rounded-xl border border-[#Dbb1bc] text-[#393334]"
    >
      Agregar al carrito
    </button>
  );
};

export default Button;
