import { Link } from "react-router-dom";


const Card = ({ product }) => {
  return (
    <div>
      <hr />
      <img src={product.img} alt={product.name} />
      <h2>Id: {product.id}</h2>
      <h2>Marca: {product.brand}</h2>
      <h2>Nombre: {product.name}</h2>
      <h2>Color: {product.color}</h2>
      <h2>Talle: {product.size}</h2>
      <h2>Precio: {product.price}</h2>
      <h2>Stock: {product.stock}</h2>
      <h2>Rating: {product.rating}</h2>
      <h2>Descipción; {product.description}</h2>
      <hr />
    </div>
  );
};

export default Card;
