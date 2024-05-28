const Button = () => {
  const addToCart = () => {
    window.localStorage.setItem("cart", JSON.stringify("test"));
  };

  return (
    <button
      className="flex bg-gray-200 w-fit p-2 mt-6 hover:scale-105 hover:bg-red-200 transition-all duration-200 rounded-xl border border-[#Dbb1bc] text-[#393334]"
      onClick={addToCart}
    >
      Agregar al carrito
    </button>
  );
};

export default Button;
