import { Link } from "react-router-dom";
import {
  add_button,
  add_button_label,
  invisible,
  transition_200,
  visible,
} from "../../../styles";
import useLoadEffect from "../../../hooks/Effects/useLoadEffect";
import Subcategories_Table from "../../Tables/Subcategories_Table/Subcategories_Table";

const ManageSubcategories = () => {
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
        <label htmlFor="addSubcategory" className={add_button_label}>
          + Agregar Subcategoría
        </label>
      </Link>

      <Subcategories_Table />
    </div>
  );
};

export default ManageSubcategories;
