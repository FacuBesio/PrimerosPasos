import { useNavigate } from "react-router-dom";
import { product_content } from "../../styles";
import ButtonAddToCart from "../Buttons/Cart_Buttons/ButtonAddToCart";

const Products_Iterator = ({ allProducts }) => {
  const navigate = useNavigate();

  const onClickNavigate = (id) => {
    navigate(`/shop/productDetail/${id}`);
  };

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
      {allProducts?.products?.map((product) => (
        <div key={product.id} className={product_content}>
          <ButtonAddToCart product={product} />

          <img
            className="object-contain rounded-lg p-2"
            src={product.img}
            alt={product.name}
            onClick={() => onClickNavigate(product.id)}
          />
          <div
            className="text-center"
            onClick={() => onClickNavigate(product.id)}
          >
            <h2 className="font-bold text-gray-400 text-[16px] md:text-[18px] lg:text-[22px] pt-2 pb-1">
              {product.name}
            </h2>
            <h2 className="text-gray-400 text-[16px] md:text-[18px] lg:text-[22px] p-1">
              {product.brand}
            </h2>
            <h2 className="text-gray-400 text-[16px] md:text-[18px] lg:text-[20px] pt-1 pb-2">
              ${product.price}
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products_Iterator;
