import crossRed from "../../assets/crossRed.png";
import { cartIterator_style } from "../../styles";

const Cart_Iterator = ({ cart, handlerRemoveProducts }) => {
  return (
    <>
      {cart.products.map((product) => (
        <div className={`${cartIterator_style}`} key={product.id}>
          <button onClick={() => handlerRemoveProducts(product.id)}>
            <img
              className="absolute top-0 right-0 w-4 h-4 mt-2 mr-2 border border-red-200 rounded-md bg-white hover:scale-110"
              src={crossRed}
              alt=""
            />
          </button>
          <img
            className="max-w-[120px] rounded-full border border-red-200"
            src={product.img}
            alt=""
          />
          <div className="flex flex-col justify-center items-center gap-1">
            <h3 className="mb-2 mr-2 font-semibold">{product.name}</h3>
            <h3 className="">Stock: {product.stock}</h3>
            <h3 className="">Precio: ${product.price}</h3>

            {/* <ButtonQuantities product={product} cart={cart} setCart={setCart} /> */}
          </div>
        </div>
      ))}
    </>
  );
};

export default Cart_Iterator;
