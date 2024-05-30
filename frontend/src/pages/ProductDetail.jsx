import React, { useEffect, useState } from "react";
import { Button, Footer, Marquee, Navbar, Title } from "../components";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `http://localhost:5000/products/${id}`
        );
        setProduct(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    }
    fetchData();
  }, [id]);

  if (loading || !product) {
    return <div>Cargando...</div>;
  }

  console.log("product:", product);

  return (
    <div className="overflow-hidden bg-[#eae0f5]">
      <Marquee />
      <Title />
      <Navbar />

      <div
        className="flex justify-around p-6 bg-white flex-col md:flex-row "
        key={product.product.id}
      >
        <div className="w-full md:border-r">
          <img className=" rounded-lg" src={product.product.img} alt="Imagen del producto" />
        </div>
        <div className="flex flex-col w-full gap-4 pl-4">
          <h2 className=" text-2xl font-bold pb-12 text-center">
            {product.product.name}
          </h2>
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

          <div className="flex flex-col md:flex-row gap-2">
            <img
              className="w-[36px] h-[36px]"
              src="/src/assets/disponible.png"
              alt="Disponible"
            />
            <h4 className="md:text-xl">Disponible</h4>

            <img
              className="w-[36px] h-[36px]"
              src="/src/assets/entrega.png"
              alt="Envío gratis"
            />
            <h4 className="md:text-xl">Envio gratis</h4>
            <img
              className="w-[36px] h-[36px]"
              src="/src/assets/seguro.png"
              alt="Garantía de un año"
            />
            <h4 className="md:text-xl">Garantia de un año</h4>
          </div>
          <Button product={product.product} />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;
