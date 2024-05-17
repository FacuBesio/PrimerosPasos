import React, { useState, useEffect } from "react";
import getProducts from "../../utils/products/getProducts";
import getCategories from "../../utils/categories/getCategories";
import getBrands from "../../utils/brands/getBrands";

const CategoryFilter = ({allBrands,allCategories,setFilter}) => {

  const [allProducts, setAllProducts] = useState(null);
 
  
  const [page, setPage] = useState(1);


    const handleClick = (cat)=> {
        setFilter(cat.id)
      
    }
  useEffect(() => {
    getProducts(setAllProducts, page);
   
  }, [page]);

  return (
    <section className="left-side  border-red-200 border-r-2 md:min-w-[240px] min-w-[160px]  w-[15%] p-6">
      <div className="category-section ">
        <h2 className="py-4 underline underline-offset-4 text-[#2e2e2e]">
          Categorias
        </h2>
        <li className="list-none">
          <ul>
            {allCategories?.categories?.map((cat) => (
              <h3
                key={cat.id}
                onClick={() => handleClick(cat)}
                className="text-[#5a5b5a] hover:text-[#Dbb1bc]  tracking-tighter "
              >
                {cat.name}
              </h3>
            ))}
          </ul>
        </li>
      </div>
      <div className="category-section">
        <h2 className="py-4 underline underline-offset-4 text-[#2e2e2e]">
          Marcas
        </h2>
        <li className="list-none">
          <ul>
            {allBrands?.brands.map((brand)=> (
                <h3 key={brand} className="text-[#5a5b5a] hover:text-[#Dbb1bc]  tracking-tighter ">
                {brand}
              </h3>
            ))}   
          </ul>
        </li>
      </div>
      <div className="category-section">
        <h2 className="py-4 underline underline-offset-4 text-[#2e2e2e]">
          Rango de precio:
        </h2>
        <form className="flex gap-2" action="">
          <label htmlFor="">
            <input
              className="w-full border rounded-md "
              type="text"
              placeholder="min"
            />
          </label>
          <label htmlFor="">
            <input
              className="w-full rounded-md border"
              type="text"
              placeholder="max"

            />
          </label>
        </form>
      </div>
      <div className="category-section">
        <div>
          <h3 className="py-4 underline underline-offset-4 text-[#2e2e2e] ">
            Ordenar por precio
          </h3>
          <select className="rounded-md w-full" name="" id="">
            <option value="">Precio</option>
            <option value="">Menor precio</option>
            <option value="">Mayor precio</option>
          </select>
        </div>
        <div>
          <h3 className="py-4 underline underline-offset-4 text-[#2e2e2e] ">
            Ordenar por rating
          </h3>
          <select className="rounded-md w-full" name="" id="">
            <option value="">Sin rating</option>
            <option value="">Menor rating</option>
            <option value="">Mayor rating</option>
          </select>
        </div>
      </div>
    </section>
  );
};

export default CategoryFilter;
