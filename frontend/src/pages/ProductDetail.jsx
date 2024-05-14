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
        className="flex justify-around p-6 bg-white "
        key={product.product.id}
      >
        <div className="w-full border-r">
          <img src={product.product.img} alt="Imagen del producto" />
        </div>
        <div className="flex flex-col w-full gap-4 pl-4">
          <h2 className=" text-3xl font-bold pb-12">{product.product.name}</h2>
          <h3 className=" text-xl">Rating: {product.product.rating}</h3>
          <h2 className=" text-xl">Precio: {product.product.price}</h2>
          <h3 className=" text-xl">Stock: {product.product.stock}</h3>

          <div className="flex gap-2">
            <img
              className="w-[36px] h-[36px]"
              src="/src/assets/disponible.png"
              alt="Disponible"
            />
            <h4 className="">Disponible</h4>

            <img
              className="w-[36px] h-[36px]"
              src="/src/assets/entrega.png"
              alt="Envío gratis"
            />
            <h4 className="">Envio gratis</h4>
            <img
              className="w-[36px] h-[36px]"
              src="/src/assets/seguro.png"
              alt="Garantía de un año"
            />
            <h4 className="">Garantia de un año</h4>
          </div>
          <Button />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;
