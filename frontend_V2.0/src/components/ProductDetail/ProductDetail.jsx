import { useNavigate, useParams } from "react-router-dom";
// import ButtonProductDetail from "../../components/ButtonProductDetail/ButtonProductDetail";
import leftArrow from "../../assets/LeftArrow.png";
import enabledIcon from "../../assets/disponible.png";
import deliveryIcon from "../../assets/entrega.png";
import secureIcon from "../../assets/seguro.png";
import useProductById from "../../hooks/Products/useProductById";
import {
  productDetailStyle,
  invisible,
  visible,
  productDetail_position_up,
  productDetail_position_down,
  productDetail_content,
} from "../../styles";
import useLoadEffect_0 from "../../hooks/Effects/useLoadEffect_0";
import { useContext, useEffect } from "react";
import { ShopContext } from "../../context";

const ProductDetail = () => {
  const { setWasShopActive } = useContext(ShopContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const { product, isProductLoaded } = useProductById(id);
  const { loadEffect_0 } = useLoadEffect_0();

  const productDetail_visibility = isProductLoaded ? visible : invisible;
  const border_position = loadEffect_0
    ? productDetail_position_up
    : productDetail_position_down;

  useEffect(() => {
    isProductLoaded && setWasShopActive(false);
  }, [isProductLoaded]);

  return (
    <section
      className={`${productDetailStyle} ${border_position} border-t-4 border-t-white`}
    >
      <div className={`${productDetail_content} ${productDetail_visibility}`}>
        <div className="w-full p-4 flex flex-col gap-8 md:border-r">
          <button
            onClick={() => {
              navigate(`/shop`);
            }}
          >
            <img className="w-6 h-4 cursor-pointer" src={leftArrow} alt="" />
          </button>
          <div className="flex items-center justify-center">
            <img
              className="w-8/12 h-8/12 object-cover rounded-lg"
              src={product?.img}
              alt="Imagen del producto"
            />
          </div>
        </div>

        <div className="flex flex-col w-full gap-4 pl-4">
          <h2 className="  font-bold py-4 sm:pb-12 text-center">
            {product?.name}
          </h2>
          <h3 className=" ">{product?.description}</h3>
          <h3 className=" ">Rating: {product?.rating}</h3>
          <h2 className=" ">Precio: {product?.price}</h2>
          <h2 className="  flex items-center">
            Color:
            <div
              className={`rounded-full ml-2 h-4 w-4 border ${
                product?.color === "white"
                  ? "bg-[#fff]"
                  : product?.color === "red"
                  ? "bg-red-500"
                  : product?.color === "green"
                  ? "bg-green-400"
                  : product?.color === "black"
                  ? "bg-black"
                  : product?.color === "gray"
                  ? "bg-gray-600"
                  : ""
              }`}
            ></div>
          </h2>
          <h2 className=" ">Talle: {product?.talle}</h2>
          <h3 className=" ">Stock: {product?.stock}</h3>

          <div className="flex flex-col sm:flex-row  gap-2">
            <img
              className="w-[36px] h-[36px]"
              src={enabledIcon}
              alt="Disponible"
            />
            <h4 className="">Disponible</h4>

            <img
              className="w-[36px] h-[36px]"
              src={deliveryIcon}
              alt="Envío gratis"
            />
            <h4 className=" ">Envio gratis</h4>
            <img
              className="w-[36px] h-[36px]"
              src={secureIcon}
              alt="Garantía de un año"
            />
            <h4 className="">Garantia de un año</h4>
          </div>
          {/* <ButtonProductDetail product={product.product} /> */}
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
