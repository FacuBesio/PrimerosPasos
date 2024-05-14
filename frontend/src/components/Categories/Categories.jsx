const Categories = () => {
  const categories = [
    { name: "Ropa de bebés", image: "/src/assets/categoriaRopa.png" },
    { name: "Cochecitos", image: "/src/assets/product3.webp" },
    { name: "Cuna", image: "/src/assets/product13.webp" },
    { name: "Mochila", image: "/src/assets/product23.webp" }
  ];
  return (
    <section className="sm:grid grid-rows-2 grid-cols-2 bg-[#Dbb1bc]">
      {categories.map((cat) => (
        <a key={cat.name} href="/shop" className="border-b   max-h-[360px]  flex">
          <img className=" w-1/2 " src={cat.image} alt="" />
          <div className="flex gap-4 flex-col justify-center items-center w-full">
            <h2 className=" text-[rgb(90,91,90)] md:text-3xl text-center  ">
              {cat.name}
            </h2>
            <a className="text-[#Dbb1bc]  md:text-xl lg:min-w-[148px] text-center border p-1 mx-4 rounded-md border-red-200 bg-slate-50 ">
              3 x 2
            </a>
          </div>
        </a>
      ))}
    </section>
  );
};

export default Categories;
