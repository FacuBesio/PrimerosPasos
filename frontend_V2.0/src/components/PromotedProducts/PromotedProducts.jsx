import { Link } from "react-router-dom";
import bathImage from "../../assets/baño.png";
import babyBagImage from "../../assets/babybag.jpg";
import clothesImage from "../../assets/ropa.png";
import shoesImage from "../../assets/shoes.png";
import { useContext } from "react";
import { CategoriesContext, TagsContext } from "../../context";
import { transition_300 } from "../../styles";

const PromotedProducts = () => {
  const { setCategory, setSelectedCategory } = useContext(CategoriesContext);
  const { setCategoryTag } = useContext(TagsContext);
  const selectedCategories = [
    {
      id: 1,
      name: "Baño",
      image: bathImage,
      description: "3x2",
    },
    {
      id: 2,
      name: "Bolsos y Mochilas",
      image: babyBagImage,
      description: "Cuotas sin interes",
    },
    {
      id: 10,
      name: "Ropa",
      image: clothesImage,
      description: "Promos exclusivas",
    },
    {
      id: 4,
      name: "Calzado",
      image: shoesImage,
      description: "Descuentos",
    },
  ];

  const handlerSubmitCategories = (category_id, category_name) => {
    setCategory(category_id);
    setSelectedCategory(category_id);
    setTimeout(() => {
      setCategoryTag(category_name);
    }, [150]);
  };

  return (
    <section className="sm:grid grid-rows-2 grid-cols-2 bg-categories">
      {selectedCategories.map((category) => (
        <Link
          to={`/shop/categories/${category.name}`}
          key={category.id}
          onClick={() => handlerSubmitCategories(category.id, category.name)}
          className="max-h-[360px] flex border-t-white border-t-4 border-l-white border-l-4 cursor-pointer"
        >
          <img
            className="object-cover max-w-[320px] rounded-sm"
            src={category.image}
            alt={`Imagen de ${category.name}`}
          />
          <div
            className={`flex flex-col justify-center rounded-sm items-center w-full border-l-white border-l-4`}
          >
            <div
              className={`flex gap-4 flex-col justify-center items-center w-full hover:scale-90 ${transition_300}`}
            >
              <h2 className="text-[rgb(90,91,90)] md:text-3xl text-center">
                {category.name}
              </h2>
              <div className="text-[#Dbb1bc] md:text-xl lg:min-w-[148px] text-center border p-1 mx-4 rounded-md border-red-200 bg-white w-fit">
                {category.description}
              </div>
            </div>
          </div>
        </Link>
      ))}
    </section>
  );
};

export default PromotedProducts;
