import { Link } from "react-router-dom";
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";
import update_icon from "../../../assets/update_icon.png";
import garbage from "../../../assets/garbage.png";
import useDeleteCategory from "../../../hooks/Categories/useDeleteCategory";
import emptyCategoryValidator from "../../../utils/categories/emptyCategoryValidator";
import CanNot_DeleteNotification from "../../../utils/categories/CanNot_DeleteNotification";
// import useDeleteProduct from "../../../hooks/Products/useDeleteProduct";
// import { td_style } from "../../../styles";

const Table_Categories_Iterator = ({ allCategories }) => {
  const { deleteWarning } = useDeleteCategory();

  const handlerRemove = async (id, name) => {
    const emptyCategory = await emptyCategoryValidator(id);
    emptyCategory
      ? deleteWarning(id, name)
      : CanNot_DeleteNotification(
          name,
          `La categoría no debe tener ningún producto asociado para poder ser eliminada.`
        );
  };

  return (
    <>
      {allCategories &&
        allCategories.categories?.map((category) => (
          <tr key={category.id}>
            <td className="p-1 md:p-4 border text-center">{category.id}</td>
            <td className="p-1 md:p-4 border text-center">{category.name}</td>
            <td className="p-1 md:p-4 border">
              {category.subcategories.length > 0 ? (
                category.subcategories.map((subcategorie) => (
                  <p key={subcategorie.id}>{subcategorie.name}</p>
                ))
              ) : (
                <p> - </p>
              )}
            </td>
            <td className="p-1 md:p-4 border text-center text-[12px] md:text-[16px] lg:text-[18px]">
              {category.products.length}
            </td>
            <td className="p-1 md:p-4 border text-[12px] md:text-[16px] lg:text-[18px]">
              <button>
                {category.enabled ? (
                  <span className="text-green-500 text-2xl">
                    <CheckCircleOutlined />
                  </span>
                ) : (
                  <span className="text-red-500 text-2xl">
                    <CloseCircleOutlined />
                  </span>
                )}
              </button>
            </td>
            <td className="p-1 md:p-4 border text-[12px] md:text-[16px] lg:text-[18px]">
              <Link to={`/admin/manageCategories/update/${category.id}`}>
                <button>
                  <img
                    src={update_icon}
                    alt="Update"
                    className="w-8 h-8 transition-transform duration-300 hover:scale-105"
                  />
                </button>
              </Link>
            </td>
            <td className="p-1 md:p-4 border">
              <button onClick={() => handlerRemove(category.id, category.name)}>
                <img
                  src={garbage}
                  alt="Eliminar"
                  className="w-8 h-8 transition-transform duration-300 hover:scale-105"
                />
              </button>
            </td>
          </tr>
        ))}
    </>
  );
};

export default Table_Categories_Iterator;
