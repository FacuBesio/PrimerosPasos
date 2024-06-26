import { Link } from "react-router-dom";
import bathImage from "../../assets/baño.png";
import babyBagImage from "../../assets/babybag.jpg";
import clothesImage from "../../assets/ropa.png";
import shoesImage from "../../assets/shoes.png";

const Categories = () => {

  const selectedCategories = [
    {
      name: "Baño",
      image: bathImage,
      description: "3x2",
    },
    {
      name: "Bolsos y Mochilas",
      image: babyBagImage,
      description: "Cuotas sin interes",
    },
    {
      name: "Ropa",
      image: clothesImage,
      description: "Promos exclusivas",
    },
    {
      name: "Calzado",
      image: shoesImage,
      description: "Descuentos",
    },
  ];

  return (
    <section className="sm:grid grid-rows-2 grid-cols-2  bg-categories">
      {selectedCategories.map((category) => (
        <Link
          to={`/shop/categories/${category.name}`}
          key={category.name}
          className="max-h-[360px] flex border-b-red-100 border-b-2 cursor-pointer"
        >
          <img
            className="w-1/2 border-l-red-200 border-l-1 object-cover max-w-[320px]"
            src={category.image}
            alt={`Imagen de ${category.name}`}
          />
          <div className="flex gap-4 flex-col justify-center items-center w-full border-l-red-200 border-l-1">
            <h2 className="text-[rgb(90,91,90)] md:text-3xl text-center">
              {category.name}
            </h2>
            <div className="text-[#Dbb1bc] md:text-xl lg:min-w-[148px] text-center border p-1 mx-4 rounded-md border-red-200 bg-slate-50">
              {category.description}
            </div>
          </div>
        </Link>
      ))}
    </section>
  );
};

export default Categories;
