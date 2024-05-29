import addToCart from "../../utils/button/addToCart";

const Button = ({ product }) => {
  const cantidad = 1;
  const { id, brand, name, price, stock, img } = product;
  const productToAdd = { id, brand, name, price, stock, img, cantidad };

  const handleAddToCart = () => {
    addToCart(productToAdd)
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
