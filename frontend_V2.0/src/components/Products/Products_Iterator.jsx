import { product_content } from "../../styles";

const Products_Iterator = ({allProducts}) => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {allProducts?.products?.map((product) => (
        <div key={product.id} className={product_content}>
          <img
            className="object-contain rounded-lg h-full p-2"
            src={product.img}
            alt={product.name}
            onClick={() => navigate(`/shop/productDetail/${product.id}`)}
          />
          <div className="text-center">
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
