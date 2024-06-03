import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CategoriesContext, SearchContext } from "../../context/index";
import getCategories from "../../utils/categories/getCategories";
import { handlerClickCategories } from "../../utils/filter/filterHandlers";

const Categories = () => {
  const {
    allCategories,
    setAllCategories,
    setFilterCategories,
    setCategoryTag,
  } = useContext(CategoriesContext);

  const navigate = useNavigate();


  
  const categories = [
    {
      name: "Diversión",
      image: "/src/assets/product34.webp",
      description: "3x2",
      src:""
    },
    {
      name: "Cochecitos",
      image: "/src/assets/product3.webp",
      description: "Cuotas sin interes",
    },
    {
      name: "Cuna",
      image: "/src/assets/product13.webp",
      description: "Promos exclusivas",
    },
    {
      name: "Mochila",
      image: "/src/assets/product23.webp",
      description: "Descuentos",
    },
  ];

  return (
    <section className="sm:grid grid-rows-2 grid-cols-2 bg-[#Dbb1bc]">
      {categories.map((cat) => (
        <a
          key={cat.name}
          href="/shop"
          className="   max-h-[360px]  flex border-b-red-100 border-b-2"
        >
          <img
            className=" w-1/2 border-l-red-200 border-l-1  "
            src={cat.image}
            alt="Imagen categorias"
          />
          <div className="flex gap-4 flex-col justify-center items-center w-full border-l-red-200 border-l-1 ">
            <h2 className=" text-[rgb(90,91,90)] md:text-3xl text-center  ">
              {cat.name}
            </h2>
            <div className="text-[#Dbb1bc]  md:text-xl lg:min-w-[148px] text-center border p-1 mx-4 rounded-md border-red-200 bg-slate-50 ">
              {cat.description}
            </div>
          </div>
        </a>
      ))}

      {allCategories?.categories?.slice(0, 4).map((cat) => (
        <a
          key={cat.name}
          onClick={handlerClickCategories(
            navigate,
            setFilterCategories,
            setCategoryTag,
            cat
          )}
          className="   max-h-[360px]  flex border-b-red-100 border-b-2"
        >
         
            <img 
              className=" w-1/2 border-l-red-200 border-l-1  "
              src=""
              alt="Imagen categorias"
            />

        
          <div className="flex gap-4 flex-col justify-center items-center w-full border-l-red-200 border-l-1 ">
            <h2 className=" text-[rgb(90,91,90)] md:text-3xl text-center  ">
              {cat.name}
            </h2>
            <div className="text-[#Dbb1bc]  md:text-xl lg:min-w-[148px] text-center border p-1 mx-4 rounded-md border-red-200 bg-slate-50 ">
              {cat.description}
            </div>
          </div>
        </a>
      ))}
    </section>
  );
};

export default Categories;
