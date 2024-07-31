import { Link } from "react-router-dom";
import {
  add_button,
  add_button_label,
  invisible,
  transition_200,
  visible,
} from "../../../styles";
import Categories_Table from "../../Tables/Categories_Table/Categories_Table";
import useLoadEffect from "../../../hooks/Effects/useLoadEffect";

const ManageCategories = () => {
  const { loadEffect } = useLoadEffect();
  const categories_visibility = loadEffect ? visible : invisible;

  return (
    <div
      className={`flex flex-col gap-4 min-h-screen ${transition_200} ${categories_visibility} `}
    >
      <Link
        className={`${add_button} w-fit`}
        to={"/admin/manageProducts/create"}
      >
        <label htmlFor="addCategory" className={add_button_label}>
          + Agregar Categoría
        </label>
      </Link>

      <Categories_Table />
    </div>
  );
};

export default ManageCategories;
