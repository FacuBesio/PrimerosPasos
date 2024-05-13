import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Card from "../Card/Card";


const Cards = () => {
  const [allProducts, setAllProducts] = useState(null);
  const [loading, setLoading] = useState(true);

  console.log("allProducts: ", allProducts);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:5000/products");
        setAllProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h1>Test CARDS</h1>

      {allProducts.products?.map((product) => (
        <Card key={product.id} product={product} />
      ))}

    </div>
  );
};

export default Cards;
