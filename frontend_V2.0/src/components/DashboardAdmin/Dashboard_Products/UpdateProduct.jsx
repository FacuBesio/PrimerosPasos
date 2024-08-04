import { Link, useParams } from "react-router-dom";
import { back_button, invisible, transition_200, visible } from "../../../styles";
import UpdateProduct_Form from "../../Forms/products/update/UpdateProduct_Form";
import useLoadEffect from "../../../hooks/Effects/useLoadEffect";

const UpdateProduct = () => {
  const { id } = useParams();
  const { loadEffect } = useLoadEffect();
  const form_visibility = loadEffect ? visible : invisible;

  return (
    <div
      className={`rounded-lg flex flex-col w-full items-center gap-4 ${transition_200} ${form_visibility}`}
    >
      <UpdateProduct_Form id={id} />

      <Link
        to="/admin/manageProducts"
        className={back_button}
      >
        VOLVER
      </Link>
    </div>
  );
};

export default UpdateProduct;
