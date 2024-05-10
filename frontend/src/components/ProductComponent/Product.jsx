import React from 'react';

const ProductComponent = () => {
  
  const productNumbers = Array.from({ length: 50 }, (_, index) => index + 1);

  return (
    <section className="right-side p-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {productNumbers.map((productNumber) => (
        
        <a href='' key={productNumber} className="bg-white rounded-lg flex flex-col items-center">
          <img className="max-w-[240px] rounded-lg" src={`/src/assets/product${productNumber}.webp`} alt={`Product ${productNumber}`} />
          <div>
            <h2 className="font-bold text-gray-400">Producto {productNumber}</h2>
            <h2 className="font-extralight">Precio</h2>
            <h2>Cuotas</h2>
          </div>
        </a>
      ))}
        
    </section>
  );
};

export default ProductComponent;

