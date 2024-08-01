import { Link } from "react-router-dom";
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";
import update_icon from "../../../assets/update_icon.png";
import garbage from "../../../assets/garbage.png";
import useDeleteProduct from "../../../hooks/Products/useDeleteProduct";
import { icon_style, td_style } from "../../../styles";

const Table_Products_Iterator = ({ allProducts }) => {
  const { deleteWarning } = useDeleteProduct();

  const handlerRemove = (id, name) => {
    deleteWarning(id, name);
  };

  return (
    <>
      {allProducts.products.map((product) => (
        <tr key={product.id}>
          <td className="p-1 md:p-4 border text-center">
            <img
              src={product.img}
              alt={product.name}
              className="w-24 h-24 object-cover rounded-xl mx-auto"
            />
          </td>
          <td className={`${td_style}`}>{product.name}</td>
          <td className={`${td_style}`}>{product.brand}</td>
          <td className={`${td_style}`}>{product.categories[0].name}</td>
          <td className={`${td_style}`}>
            {product.subcategories.length > 0
              ? product.subcategories[0].name
              : "-"}
          </td>
          <td className={`${td_style} capitalize`}>
            {product.color}
          </td>
          <td className={`${td_style}`}>{product.size}</td>
          <td className={`${td_style}`}>${product.price}</td>
          <td className={`${td_style}`}>{product.stock}</td>
          <td className={`${td_style}`}>
            <button>
              {product.enabled ? (
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
          <td className={`${td_style}`}>{product.rating}</td>
          <td className="p-1 md:p-4 border">
            <Link to={`/admin/manageProducts/update/${product.id}`}>
              <button>
                <img
                  src={update_icon}
                  alt="Update"
                  className={icon_style}
                />
              </button>
            </Link>
          </td>
          <td className="p-1 md:p-4 border">
            <button onClick={() => handlerRemove(product.id, product.name)}>
              <img
                src={garbage}
                alt="Eliminar"
                className={icon_style}
              />
            </button>
          </td>
        </tr>
      ))}
    </>
  );
};

export default Table_Products_Iterator;
