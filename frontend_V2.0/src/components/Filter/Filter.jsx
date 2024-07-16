import Brand_Selector from "./Filter_Selectors/Brand_Selector";
import Color_Selector from "./Filter_Selectors/Color_Selector";
import Size_Selector from "./Filter_Selectors/Size_Selector";
import { FilterContext, TagsContext } from "../../context";
import { useContext } from "react";
import Price_Inputs from "./Filter_Selectors/Price_Inputs";

const Filter = () => {
  const { filter, setFilter } = useContext(FilterContext);
  const { setFilterTags } = useContext(TagsContext);

  console.log("filter: ", filter);

  const handlerChange = (event) => {
    const property = event.target.name;
    let value = event.target.value;
    setFilter({ ...filter, [property]: value });
    setTimeout(() => {
      setFilterTags({ ...filter, [property]: value });
    }, [150]);
  };

  return (
    <section className="flex flex-col w-fit items-center justify-center gap-6 mt-2">
      <div className="flex flex-col w-fit items-center justify-center">
        <label htmlFor="brand" className="w-full text-lg px-2">
          Marca
        </label>
        <Brand_Selector handlerChange={handlerChange} />
      </div>

      <div className="flex flex-col w-fit items-center justify-center">
        <label htmlFor="color" className="w-full text-lg px-2">
          Color
        </label>
        <Color_Selector handlerChange={handlerChange} />
      </div>

      <div className="flex flex-col w-fit items-center justify-center">
        <label htmlFor="size" className="w-full text-lg px-2">
          Talle
        </label>
        <Size_Selector handlerChange={handlerChange} />
      </div>

      <div className="flex flex-col w-fit items-center justify-center">
        <label htmlFor="price" className="w-full text-lg px-2">
          Precio
        </label>
        <Price_Inputs />
      </div>
    </section>
  );
};

export default Filter;
