import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CategoriesContext } from "../../context/index";
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

  useEffect(() => {
    getCategories(setAllCategories);
  }, [allCategories]);

  const categoriesImages = [
    {
      name: "Diversión",
      image: "/src/assets/baño.png",
      description: "3x2",
    },
    {
      name: "Cochecitos",
      image: "/src/assets/babybag.jpg",
      description: "Cuotas sin interes",
    },
    {
      name: "Cuna",
      image: "/src/assets/butaca.webp",
      description: "Promos exclusivas",
    },
    {
      name: "Mochila",
      image: "/src/assets/shoes.png",
      description: "Descuentos",
    },
  ];

  const categoriesWithImages = allCategories?.categories
    ?.slice(0, 4)
    .map((cat, index) => ({
      ...cat,
      image: categoriesImages[index]?.image,
      description: categoriesImages[index]?.description,
    }));

  return (
    <section className="sm:grid grid-rows-2 grid-cols-2  bg-categories">
      {categoriesWithImages?.map((cat) => (
        <Link
          to={`/shop/categories/${cat.name}`}
          key={cat.name}
          onClick={() =>
            handlerClickCategories(
              navigate,
              setFilterCategories,
              setCategoryTag,
              cat
            )
          }
          className="max-h-[360px] flex border-b-red-100 border-b-2 cursor-pointer"
        >
          <img
            className="w-1/2 border-l-red-200 border-l-1 object-cover max-w-[320px]"
            src={cat.image}
            alt="Imagen categorias"
          />
          <div className="flex gap-4 flex-col justify-center items-center w-full border-l-red-200 border-l-1">
            <h2 className="text-[rgb(90,91,90)] md:text-3xl text-center">
              {cat.name}
            </h2>
            <div className="text-[#Dbb1bc] md:text-xl lg:min-w-[148px] text-center border p-1 mx-4 rounded-md border-red-200 bg-slate-50">
              {cat.description}
            </div>
          </div>
        </Link>
      ))}
    </section>
  );
};

export default Categories;
