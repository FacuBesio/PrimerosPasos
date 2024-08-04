import { FilterContext, TagsContext } from "../../../context";
import { useContext } from "react";
import Brand_Selector from "./Filter_Selectors/Brand_Selector";
import Color_Selector from "./Filter_Selectors/Color_Selector";
import Size_Selector from "./Filter_Selectors/Size_Selector";
import Price_Inputs from "./Filter_Selectors/Price_Inputs";
import { label_filterBar_style } from "../../../styles";
import Category_Selector from "./Filter_Selectors/Category_Selector";

const Filter_Dashboard = () => {
  const { filter, setFilter } = useContext(FilterContext);
  const { setFilterTags } = useContext(TagsContext);

  const handlerChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setFilter({ ...filter, [property]: value });
    setTimeout(() => {
      setFilterTags({ ...filter, [property]: value });
    }, [150]);
  };

  return (
    <div className="flex items-center justify-center gap-2 md:gap-10">
      <div className="flex flex-col gap-2 items-center justify-center">
        <label className={label_filterBar_style}>Marca</label>
        <Brand_Selector handlerChange={handlerChange} />
      </div>

      <div className="flex flex-col gap-2 items-center justify-center">
        <label htmlFor="color" className={label_filterBar_style}>
          Categoría
        </label>
        <Category_Selector handlerChange={handlerChange} />
      </div>

      <div className="flex flex-col gap-2 items-center justify-center">
        <label htmlFor="color" className={label_filterBar_style}>
          Color
        </label>
        <Color_Selector handlerChange={handlerChange} />
      </div>

      <div className="flex flex-col gap-2 items-center justify-center">
        <label htmlFor="size" className={label_filterBar_style}>
          Talle
        </label>
        <Size_Selector handlerChange={handlerChange} />
      </div>

      <div className="flex flex-col gap-2 items-center justify-center">
        <label htmlFor="price" className={label_filterBar_style}>
          Precio
        </label>
        <Price_Inputs />
      </div>
    </div>
  );
};

export default Filter_Dashboard;
