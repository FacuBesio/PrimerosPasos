import React,{useEffect,useState} from 'react';
import axios from "axios";

const ProductComponent = () => {
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

  // const productNumbers = Array.from({ length: 50 }, (_, index) => index + 1);
  
  return (
    <section >
      <div className="right-side p-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">   
      {allProducts.products.map((product) => (
        <a href={`/productDetail/${product.id}`} key={product.id} className="bg-white rounded-lg flex flex-col items-center hover:shadow-2xl hover:shadow-[#82525e] ease-in duration-200">
          <img className=" object-contain rounded-lg h-full p-2" src={product.img} alt={product.name} />
          <div className='text-center '>
            <h2 className="font-bold text-gray-400 text-[16px] md:text-[18px] lg:text-[22px] px-2">{product.name}</h2>
            <h2 className=" text-gray-800 text-[16px] md:text-[18px] lg:text-[20px] py-2">${product.price}</h2>
            <h2 className='text-gray-400 text-[16px] md:text-[18px] lg:text-[20px] pb-2'>Stock:{product.stock}</h2>
          </div>
        </a>
      ))}
       </div>
          <div className='flex justify-center items-center  gap-4 pb-4'>
            <button className="border border-red-200 px-1 rounded-md ">Primera</button>
            <button className='border border-red-200 p-1 rounded-md'><img className='w-[24px]' src="/src/assets/leftArrow.png" alt="flecha" /></button>
            <h4>Página 1 de 2</h4>
            <button className='border border-red-200 p-1 rounded-md'><img className='w-[24px]' src="/src/assets/rightArrow.png" alt="flecha" /></button>
            <button className='border border-red-200 px-1 rounded-md'>Última</button>
          </div>
    </section>
  );
};

export default ProductComponent;

