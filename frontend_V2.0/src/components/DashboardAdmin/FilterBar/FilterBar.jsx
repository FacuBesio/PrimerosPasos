import { Link } from "react-router-dom";
import useLoadEffect from "../../../hooks/Effects/useLoadEffect";
import {
  add_button,
  add_button_label,
  invisible,
  label_filterBar_style,
  transition_200,
  visible,
} from "../../../styles";
import Filter_Dashboard from "./Filter_Dashboard";
import SearchBar from "../../SearchBar/SearchBar";
import SortComponent from "../../SortComponent/SortComponent";

const FilterBar = () => {
  const { loadEffect } = useLoadEffect();

  const filterBar_visibility = loadEffect ? visible : invisible;

  return (
    <div
      className={`flex w-full gap-2 md:gap-10 items-center justify-center overflow-x-auto ${transition_200} ${filterBar_visibility}`}
    >
      <Link className={add_button} to={"/admin/manageProducts/create"}>
        <label htmlFor="addProduct" className={add_button_label}>
          + Agregar Producto
        </label>
      </Link>
      
      <div className="flex flex-col gap-2 items-center justify-center">
        <label
          htmlFor="search"
          className={label_filterBar_style}
        >
          Buscar
        </label>
        <SearchBar />
      </div>

      <Filter_Dashboard />
      
      <div className="flex flex-col gap-2 items-center justify-center">
        <label
          htmlFor="search"
          className={label_filterBar_style}
        >
          Ordenar
        </label>
        <SortComponent />
      </div>
    </div>
  );
};
export default FilterBar;
