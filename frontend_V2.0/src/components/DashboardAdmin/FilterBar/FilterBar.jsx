import { Link } from "react-router-dom";
import useLoadEffect from "../../../hooks/Effects/useLoadEffect";
import {
  add_button,
  add_button_label,
  invisible,
  transition_200,
  visible,
} from "../../../styles";

const FilterBar = () => {
  const { loadEffect } = useLoadEffect();

  const filterBar_visibility = loadEffect ? visible : invisible;

  return (
    <div
      className={`flex w-full gap-2 md:gap-4 items-center justify-between overflow-x-auto ${transition_200} ${filterBar_visibility}`}
    >
      <Link className={add_button} to={"/admin/manageProducts/create"}>
        <label htmlFor="addProduct" className={add_button_label}>
          + Agregar Producto
        </label>
      </Link>
      {/* <SearchBar_Dashboard />
            <Filter_Dashboard />
            <SortComponent_Dashboard /> */}
    </div>
  );
};
export default FilterBar;
