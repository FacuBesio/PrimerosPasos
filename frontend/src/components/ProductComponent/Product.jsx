import React,{useEffect,useState} from 'react';
import axios from "axios";
import Paginated from '../Paginated/Paginated';

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
         <Paginated 
         currentPage={1}
         totalPages={15}
         onPageChange={1 + 1}
          />
    </section>
  );
};

export default ProductComponent;

