import { Link, useParams } from "react-router-dom";
import { invisible, transition_200, visible } from "../../../styles";
import useLoadEffect from "../../../hooks/Effects/useLoadEffect";
import UpdateSubcategory_Form from "../../Forms/subcategories/update/UpdateSubcategory_Form";

const UpdateSubcategory = () => {
  const { id } = useParams();
  const { loadEffect } = useLoadEffect();
  const form_visibility = loadEffect ? visible : invisible;

  return (
    <div
      className={`rounded-lg flex flex-col w-full items-center gap-4 ${transition_200} ${form_visibility}`}
    >
      <UpdateSubcategory_Form id={id} />

      <Link
        to="/admin/manageSubcategories"
        className="px-6 py-3 text-[12px] md:text-[18px] bg-red-300 text-white font-bold rounded-md hover:bg-red-400 hover:ring-red-400 focus:outline-none focus:ring-2 focus:ring-red-200"
      >
        VOLVER
      </Link>
    </div>
  );
};

export default UpdateSubcategory;
