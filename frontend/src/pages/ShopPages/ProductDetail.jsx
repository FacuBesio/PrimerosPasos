import { useEffect, useState } from "react";
import { Footer, Marquee, Navbar, Title } from "../../components";
import { useNavigate, useParams } from "react-router-dom";
import getProductById from "../../utils/products/getProductById";
import ButtonProductDetail from "../../components/ButtonProductDetail/ButtonProductDetail";
import leftArrow from "../../assets/LeftArrow.png"
import { mainPages } from "../../styles";
import enabledIcon from '../../assets/disponible.png'
import deliveryIcon from '../../assets/entrega.png'
import secureIcon from '../../assets/seguro.png'

const ProductDetail = ({ originUrl }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProductById(id, setProduct, setLoading);
  }, [id]);

  if (loading || !product) {
    return <div>Cargando...</div>;
  }

  return (
    <main className={mainPages}>
      <Marquee />
      <Title />
      <Navbar />

      <div
        className="flex justify-around p-6 bg-white flex-col md:flex-row "
        key={product.product.id}
      >
        <div className="w-full md:border-r">
          <h3 onClick={() => navigate(`${originUrl}`)}>
            <img className="w-6 h-4 cursor-pointer" src={leftArrow} alt="" />
          </h3>
          <img
            className=" rounded-lg"
            src={product.product.img}
            alt="Imagen del producto"
          />
        </div>
        <div className="flex flex-col w-full gap-4 pl-4">
          <h2 className=" text-2xl font-bold py-4  sm:pb-12 text-center">
            {product.product.name}
          </h2>
          <h3 className=" md:text-xl">{product.product.description}</h3>
          <h3 className=" md:text-xl">Rating: {product.product.rating}</h3>
          <h2 className=" md:text-xl">Precio: {product.product.price}</h2>
          <h2 className=" md:text-xl flex">
            Color:{" "}
            <div
              className={`rounded-full h-8 w-8 border ${
                product.product.color === "white"
                  ? "bg-[#fff]"
                  : product.product.color === "red"
                  ? "bg-red-500"
                  : product.product.color === "green"
                  ? "bg-green-400"
                  : product.product.color === "black"
                  ? "bg-black"
                  : product.product.color === "gray"
                  ? "bg-gray-600"
                  : ""
              }`}
            ></div>{" "}
          </h2>
          <h2 className=" md:text-xl">Talle: {product.product.talle}</h2>
          <h3 className=" md:text-xl">Stock: {product.product.stock}</h3>

          <div className="flex flex-col sm:flex-row  gap-2">
            <img
              className="w-[36px] h-[36px]"
              src={enabledIcon}
              alt="Disponible"
            />
            <h4 className="md:text-xl">Disponible</h4>

            <img
              className="w-[36px] h-[36px]"
              src={deliveryIcon}
              alt="Envío gratis"
            />
            <h4 className="md:text-xl ">Envio gratis</h4>
            <img
              className="w-[36px] h-[36px]"
              src={secureIcon}
              alt="Garantía de un año"
            />
            <h4 className="md:text-xl">Garantia de un año</h4>
          </div>
          <ButtonProductDetail product={product.product} />
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default ProductDetail;
