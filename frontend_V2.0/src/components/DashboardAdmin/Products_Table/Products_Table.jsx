import { th_style } from "../../../styles";
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";
import update_icon from "../../../assets/update_icon.png";
import garbage from "../../../assets/garbage.png";
import { Link } from "react-router-dom";
// import deleteConfirm from "../../../utils/products/deleteConfirm";

const Products_Table = ({ allProducts }) => {
  // const { filter } = useContext(FilterContext);
  // const { page, setPage } = useContext(PagesContext);
  // const { sorter } = useContext(SortContext);
  // const { searchBar, setSearchBar, setSearchBarTag } =
  //   useContext(SearchContext);
  // const [removeState, setRemoveState] = useState({ message: "", removed: "" });

  // const productsAvailable = allProducts?.products?.length > 0;

  // const handlerRemove = (id, name) => {
  //   deleteConfirm(id, name, setRemoveState);
  // };

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  //   getProducts(setAllProducts, page, searchBar, filter, sorter);
  // }, [page, searchBar, filter, sorter, removeState]);

  return (
    <>
      <div className="overflow-x-auto w-full">
        <table className="w-full border border-collapse bg-white">
          <thead>
            <tr className="rounded-xl">
              <th className={th_style}>Imagen</th>
              <th className={th_style}>Nombre</th>
              <th className={th_style}>Marca</th>
              <th className={th_style}>Categoría</th>
              <th className={th_style}>Subcategoría</th>
              <th className={th_style}>Color</th>
              <th className={th_style}>Talle</th>
              <th className={th_style}>Precio</th>
              <th className={th_style}>Stock</th>
              <th className={th_style}>Habilitado</th>
              <th className={th_style}>Rating</th>
              <th className={th_style}>Actualizar</th>
              <th className={th_style}>Eliminar</th>
            </tr>
          </thead>
          <tbody className="text-center ">
            {allProducts.products.map((product) => (
              <tr key={product.id}>
                <td className="p-1 md:p-4 border text-center">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-24 h-24 object-cover rounded-xl mx-auto"
                  />
                </td>
                <td className="p-1 md:p-4 border  text-[12px] md:text-[16px] lg:text-[18px]">
                  {product.name}
                </td>
                <td className="p-1 md:p-4 border text-[12px] md:text-[16px] lg:text-[18px]">
                  {product.brand}
                </td>
                <td className="p-1 md:p-4 border text-[12px] md:text-[16px] lg:text-[18px]">
                  {product.categories[0].name}
                </td>
                <td className="p-1 md:p-4 border text-[12px] md:text-[16px] lg:text-[18px]">
                  {product.subcategories.length > 0
                    ? product.subcategories[0].name
                    : "-"}
                </td>
                <td className="p-1 md:p-4 border capitalize text-[12px] md:text-[16px] lg:text-[18px]">
                  {product.color}
                </td>
                <td className="p-1 md:p-4 border text-[12px] md:text-[16px] lg:text-[18px]">
                  {product.size}
                </td>
                <td className="p-1 md:p-4 border text-[12px] md:text-[16px] lg:text-[18px]">
                  ${product.price}
                </td>
                <td className="p-1 md:p-4 border text-[12px] md:text-[16px] lg:text-[18px]">
                  {product.stock}
                </td>
                <td className="p-1 md:p-4 border text-[12px] md:text-[16px] lg:text-[18px]">
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
                <td className="p-1 md:p-4 border text-[12px] md:text-[16px] lg:text-[18px]">
                  {product.rating}
                </td>
                <td className="p-1 md:p-4 border">
                  <Link to={`/admin/manageProducts/update/${product.id}`}>
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
                    onClick={() => handlerRemove(product.id, product.name)}
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
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Products_Table;
