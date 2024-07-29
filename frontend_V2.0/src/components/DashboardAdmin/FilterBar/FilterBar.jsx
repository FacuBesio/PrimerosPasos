import { Link } from "react-router-dom";
import useLoadEffect from "../../../hooks/Effects/useLoadEffect";
import { invisible, transition_200, visible } from "../../../styles";

const FilterBar = () => {
  const { loadEffect } = useLoadEffect();

  const filterBar_visibility = loadEffect ? visible : invisible;

  return (
    <div
      className={`flex w-full gap-2 md:gap-4 items-center justify-between overflow-x-auto ${transition_200} ${filterBar_visibility}`}
    >
      <Link
        className="bg-slate-400 hover:bg-slate-500 rounded-md p-3 text-center"
        to={"/admin/manageProducts/create"}
      >
        <label
          htmlFor="addProduct"
          className="text-white font-bold cursor-pointer text-[12px] md:text-[18px]"
        >
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
