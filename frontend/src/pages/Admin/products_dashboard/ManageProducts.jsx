/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useContext, useEffect } from "react";
import { Footer, Title } from "../../../components";
import { mainPages } from "../../../styles";
import { Link } from "react-router-dom";
import {
  FilterContext,
  PagesContext,
  ProductsContext,
  SearchContext,
  SortContext,
} from "../../../context";
import update_icon from "../../../assets/update_icon.png";
import getProducts from "../../../utils/products/getProducts";
import Paginated from "../../../components/Paginated/Paginated";
import garbage from "../../../assets/garbage.png";
import SortComponent from "../../../components/SortComponent/SortComponent";
import sorterValidator from "../../../utils/sorter/sorterValidator";
import NavAside from "../../../components/NavAside/NavAside";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";

const ManageProducts = () => {
  const { filter } = useContext(FilterContext);
  const { page, setPage } = useContext(PagesContext);
  const { sorter } = useContext(SortContext);
  const { allProducts, setAllProducts } = useContext(ProductsContext);
  const { searchBar, setSearchBar, setSearchBarTag } =
    useContext(SearchContext);

  const {
    setSorter,
    sorterByPrice,
    setSorterByPrice,
    sorterByRating,
    setSorterByRating,
  } = useContext(SortContext);

  const onChangeSorterPrice = (event) => {
    setSorterByPrice(event.target.value);
  };

  const onChangeSorterRating = (event) => {
    setSorterByRating(event.target.value);
  };

  const sortComponentProps = {
    sorterByPrice,
    onChangeSorterPrice,
    sorterByRating,
    onChangeSorterRating,
  };

  const onChangeSearchBar = useCallback(
    (event) => {
      setSearchBar(event.target.value);
      setSearchBarTag(event.target.value);
      setPage(1);
    },
    [setSearchBar, setSearchBarTag, setPage]
  );

  useEffect(() => {
    window.scrollTo(0, 0);
    const sorterQuery = sorterValidator(sorterByPrice, sorterByRating);
    if (sorterQuery.sorterActive) {
      setSorter(sorterQuery.result);
    }
  }, [sorterByPrice, sorterByRating]);

  console.log(allProducts);

  useEffect(() => {
    getProducts(setAllProducts, page, searchBar, filter, sorter);
  }, [page, searchBar, filter, sorter]);

  const productsAvailable = allProducts?.products?.length > 0;
  console.log("allProducts?.products: ", allProducts.products);

  return (
    <main className={mainPages}>
      <div className="w-full flex">
        <NavAside />
        <section className="right_section w-full px-10 flex flex-col items-center gap-4">
          <Title />
          <div className="flex w-full p-4 md:gap-4 items-center justify-between overflow-x-auto">
            <Link to={"/admin/manageProducts/create"}>
              <label
                htmlFor="image"
                className="px-6 py-3 bg-slate-400 text-white font-bold rounded-md hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-green-400 cursor-pointer"
              >
                + Agregar Producto
              </label>
            </Link>
            <form className="flex gap-2">
              <input
                placeholder="Buscar"
                className="px-1 rounded-md border border-red-100 max-w-[160px]"
                type="text"
                value={searchBar}
                onChange={onChangeSearchBar}
              />
              <button>
                <img
                  className="w-[30px] hover:scale-110"
                  src="/src/assets/VectorSearch.png"
                  alt="Search Icon"
                />
              </button>
            </form>
            <SortComponent sortComponentProps={sortComponentProps} />
          </div>
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
                    <td className="p-4 border">{product.color}</td>
                    <td className="p-4 border">{product.size}</td>
                    <td className="p-4 border">${product.price}</td>
                    <td className="p-4 border">{product.stock}</td>
                    <td className="p-4 border">
                      <button>
                        {product.enabled ? (
                          <span className="text-green-500 text-2xl">
                            <CheckOutlined />
                          </span>
                        ) : (
                          <span className="text-red-500 text-2xl">
                            <CloseOutlined />
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
                      <button>
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
          <Paginated
            page={page}
            totalPages={allProducts?.totalPages}
            setPage={setPage}
          />
        </section>
      </div>
      <Footer />
    </main>
  );
};

export default ManageProducts;
