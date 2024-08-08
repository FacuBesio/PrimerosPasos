import CartIcon from "../../assets/asideCart.png";

const Cart_Header = ({ cart }) => {
  return (
    <div className={`flex flex-col items-center`}>
      <div className="relative w-10 h-10 flex justify-center">
        <div className="absolute top-0 right-0 w-5 h-5 bg-red-200 rounded-full flex justify-center">
          <p>{cart.products.length > 0 ? cart.products.length : "0"}</p>
        </div>
        <img src={CartIcon} className="w-10" />
      </div>
      <h2 className="font-semibold">Carrito de compras</h2>
    </div>
  );
};

export default Cart_Header;
