import { Link } from "react-router-dom";
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";
import update_icon from "../../../assets/update_icon.png";
import garbage from "../../../assets/garbage.png";
import useDeleteSubcategory from "../../../hooks/Subcategories/useDeleteSubcategory";
// import { td_style } from "../../../styles";

const Table_Subcategories_Iterator = ({ allSubcategories }) => {
  const { deleteWarning } = useDeleteSubcategory();

  const handlerRemove = (id, name) => {
    deleteWarning(id, name);
  };

  return (
    <>
      {allSubcategories &&
        allSubcategories.subcategories?.map((subcategory) => (
          <tr key={subcategory.id}>
            <td className="p-1 md:p-4 border text-[12px] md:text-[16px] lg:text-[18px] text-center">
              {subcategory.id}
            </td>
            <td className="p-1 md:p-4 border text-[12px] md:text-[16px] lg:text-[18px] text-center">
              {subcategory.name}
            </td>
            <td className="p-1 md:p-4 border text-[12px] md:text-[16px] lg:text-[18px] text-center">
              {subcategory.category.name}
            </td>
            <td className="p-1 md:p-4 border text-[12px] md:text-[16px] lg:text-[18px] text-center">
              {subcategory.products.length}
            </td>
            <td className="p-1 md:p-4 border text-[12px] md:text-[16px] lg:text-[18px]">
              <button>
                {subcategory.enabled ? (
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
            <td className="p-1 md:p-4 border">
              <Link to={`/admin/manageSubcategories/update/${subcategory.id}`}>
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
              <button
                onClick={() => handlerRemove(subcategory.id, subcategory.name)}
              >
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

export default Table_Subcategories_Iterator;
