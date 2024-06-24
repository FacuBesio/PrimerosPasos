import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FilterContext,
  PagesContext,
  ProductsContext,
  SearchContext,
  SortContext,
} from "../../context";
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";
import update_icon from "../../assets/update_icon.png";
import garbage from "../../assets/garbage.png";
import deleteConfirm from "../../utils/products/deleteConfirm";
import getProducts from "../../utils/products/getProducts";

const Products_Table = () => {
  const { allProducts, setAllProducts } = useContext(ProductsContext);
  const { filter } = useContext(FilterContext);
  const { page, setPage } = useContext(PagesContext);
  const { sorter } = useContext(SortContext);
  const { searchBar, setSearchBar, setSearchBarTag } =
    useContext(SearchContext);
  const [removeState, setRemoveState] = useState({ message: "", removed: "" });

  const productsAvailable = allProducts?.products?.length > 0;

  const handlerRemove = (id, name) => {
    deleteConfirm(id, name, setRemoveState);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getProducts(setAllProducts, page, searchBar, filter, sorter);
  }, [page, searchBar, filter, sorter, removeState]);

  return (
    <>
      <table className="w-full border border-collapse bg-white">
        <thead>
          <tr>
            <th className="p-4 border">Imagen</th>
            <th className="p-4 border">Nombre</th>
            <th className="p-4 border">Marca</th>
            <th className="p-4 border">Categoría</th>
            <th className="p-4 border">Subcategoría</th>
            <th className="p-4 border">Color</th>
            <th className="p-4 border">Talle</th>
            <th className="p-4 border">Precio</th>
            <th className="p-4 border">Stock</th>
            <th className="p-4 border">Habilitado</th>
            <th className="p-4 border">Rating</th>
            <th className="p-4 border">Actualizar</th>
            <th className="p-4 border">Eliminar</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {productsAvailable ? (
            allProducts.products.map((product) => (
              <tr key={product.id}>
                <td className="p-4 border text-center">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-24 h-24 object-cover rounded-xl mx-auto"
                  />
                </td>
                <td className="p-4 border min-w-[100px] max-w-[300px] truncate">
                  {product.name}
                </td>
                <td className="p-4 border">{product.brand}</td>
                <td className="p-4 border">{product.categories[0].name}</td>
                <td className="p-4 border">
                  {product.subcategories.length > 0
                    ? product.subcategories[0].name
                    : "-"}
                </td>
                <td className="p-4 border capitalize">{product.color}</td>
                <td className="p-4 border">{product.size}</td>
                <td className="p-4 border">${product.price}</td>
                <td className="p-4 border">{product.stock}</td>
                <td className="p-4 border">
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
                <td className="p-4 border">{product.rating}</td>
                <td className="p-4 border">
                  <Link to={`/admin/manageProducts/update/${product.id}`}>
                    <button>
                      <img
                        src={update_icon}
                        alt="Update"
                        className="w-12 h-12 transition-transform duration-300 hover:scale-105"
                      />
                    </button>
                  </Link>
                </td>
                <td className="p-4 border">
                  <button
                    onClick={() => handlerRemove(product.id, product.name)}
                  >
                    <img
                      src={garbage}
                      alt="Eliminar"
                      className="w-12 h-12 transition-transform duration-300 hover:scale-105"
                    />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="9" className="text-center p-4">
                No se encuentran productos disponibles.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default Products_Table;
