/* eslint-disable react/prop-types */
import React, { useState } from "react";

const ButtonQuantities = ({ product }) => {
  const cart = JSON.parse(window.localStorage.getItem("cart"));

  const [quantities, setQuantities] = useState(
    cart.products.reduce((acc, product) => {
      acc[product.id] = product.cantidad;
      return acc;
    }, {})
  );

  const incrementQuantity = (productId) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: prevQuantities[productId] + 1,
    }));
  };

  const decrementQuantity = (productId) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: Math.max(prevQuantities[productId] - 1, 1), // Evitar que la cantidad sea menor que 1
    }));
  };

  return (
    <div>
      <div className="flex items-center">
        <button
          onClick={() => decrementQuantity(product.id)}
          className="px-2 py-1 bg-red-200 rounded-md"
        >
          -
        </button>
        <h3 className="text-sm mx-2">Cantidad: {quantities[product.id]}</h3>
        <button
          onClick={() => incrementQuantity(product.id)}
          className="px-2 py-1 bg-green-200 rounded-md"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default ButtonQuantities;
