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
    <div className=" overflow-x-auto w-full ">
      <table className="  bg-white ">
        <thead className="">
          <tr className="rounded-xl">
            <th className="p-1 md:p-4 border text-[12px] md:text-[16px] lg:text-[18px] ">Imagen</th>
            <th className="p-1 md:p-4 border text-[12px] md:text-[16px] lg:text-[18px] ">Nombre</th>
            <th className="p-1 md:p-4 border text-[12px] md:text-[16px] lg:text-[18px]">Marca</th>
            <th className="p-1 md:p-4 border text-[12px] md:text-[16px] lg:text-[18px]">Categoría</th>
            <th className="p-1 md:p-4 border text-[12px] md:text-[16px] lg:text-[18px]">Subcategoría</th>
            <th className="p-1 md:p-4 border text-[12px] md:text-[16px] lg:text-[18px]">Color</th>
            <th className="p-1 md:p-4 border text-[12px] md:text-[16px] lg:text-[18px]">Talle</th>
            <th className="p-1 md:p-4 border text-[12px] md:text-[16px] lg:text-[18px]">Precio</th>
            <th className="p-1 md:p-4 border text-[12px] md:text-[16px] lg:text-[18px]">Stock</th>
            <th className="p-1 md:p-4 border text-[12px] md:text-[16px] lg:text-[18px]">Habilitado</th>
            <th className="p-1 md:p-4 border text-[12px] md:text-[16px] lg:text-[18px]">Rating</th>
            <th className="p-1 md:p-4 border text-[12px] md:text-[16px] lg:text-[18px]">Actualizar</th>
            <th className="p-1 md:p-4 border text-[12px] md:text-[16px] lg:text-[18px]">Eliminar</th>
          </tr>
        </thead>
        <tbody className="text-center ">
          {productsAvailable ? (
            allProducts.products.map((product) => (
              <tr key={product.id}>
                <td className="p-1 md:p-4 border  text-center">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-24 h-24 object-cover rounded-xl mx-auto"
                  />
                </td>
                <td className="p-1 md:p-4 border  text-[12px] md:text-[16px] lg:text-[18px]">
                  {product.name}
                </td>
                <td className="p-1 md:p-4 border text-[12px] md:text-[16px] lg:text-[18px]">{product.brand}</td>
                <td className="p-1 md:p-4 border text-[12px] md:text-[16px] lg:text-[18px]">{product.categories[0].name}</td>
                <td className="p-1 md:p-4 border text-[12px] md:text-[16px] lg:text-[18px]">
                  {product.subcategories.length > 0
                    ? product.subcategories[0].name
                    : "-"}
                </td>
                <td className="p-1 md:p-4 border capitalize text-[12px] md:text-[16px] lg:text-[18px]">{product.color}</td>
                <td className="p-1 md:p-4 border text-[12px] md:text-[16px] lg:text-[18px]">{product.size}</td>
                <td className="p-1 md:p-4 border text-[12px] md:text-[16px] lg:text-[18px]">${product.price}</td>
                <td className="p-1 md:p-4 border text-[12px] md:text-[16px] lg:text-[18px]">{product.stock}</td>
                <td className="p-1 md:p-4 border text-[12px] md:text-[16px] lg:text-[18px]">
                  <button>
                    {product.enabled ? (
                      <span className="text-green-500 text-xl">
                        <CheckCircleOutlined />
                      </span>
                    ) : (
                      <span className="text-red-500 text-xl">
                        <CloseCircleOutlined />
                      </span>
                    )}
                  </button>
                </td>
                <td className="p-1 md:p-4 border text-[12px] md:text-[16px] lg:text-[18px]">{product.rating}</td>
                <td className="p-1 md:p-4 border">
                  <Link to={`/admin/manageProducts/update/${product.id}`}>
                    <button>
                      <img
                        src={update_icon}
                        alt="Update"
                        className="w-4 h-4 transition-transform duration-300 hover:scale-105"
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
                      className="w-4 h-4 transition-transform duration-300 hover:scale-105"
                    />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="9" className="text-center p-1 md:p-4">
                No se encuentran productos disponibles.
              </td>
            </tr>
          )}
        </tbody>
      </table>
      </div>
    </>
  );
};

export default Products_Table;
