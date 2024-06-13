import  { useContext, useEffect } from "react";
import { Footer, Title } from "../../components";
import { mainPages } from "../../styles";
import { Link } from "react-router-dom";
import {
  FilterContext,
  PagesContext,
  ProductsContext,
  SearchContext,
  SortContext,
} from "../../context";

import getProducts from "../../utils/products/getProducts";
import Paginated from "../../components/Paginated/Paginated";
import garbage from "../../assets/garbage.png";
import SortComponent from "../../components/SortComponent/SortComponent";
import sorterValidator from "../../utils/sorter/sorterValidator";
const ManageProducts = () => {
  
  const { filter } = useContext(FilterContext);
  const { page, setPage } = useContext(PagesContext);
  const { searchBar } = useContext(SearchContext);
  const { sorter } = useContext(SortContext);
  const { allProducts, setAllProducts } = useContext(ProductsContext);

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

  useEffect(() => {
    window.scrollTo(0, 0);
    const sorterQuery = sorterValidator(sorterByPrice, sorterByRating);
    if (sorterQuery.sorterActive) {
      setSorter(sorterQuery.result);
    }
  }, [ sorterByPrice, sorterByRating]);

  console.log(allProducts);

  useEffect(() => {
    getProducts(setAllProducts, page, searchBar, filter, sorter);
  }, [page, searchBar, filter, sorter]);

  const productsAvailable = allProducts?.products?.length > 0;

  return (
    <main className={mainPages}> 
     

      <div className=" flex">
        <section className="left_section flex flex-col bg-red-200 w-fit p-6  gap-6">
          <Link to="/">Home</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/admin/manageProducts">Products</Link>
          <Link to="/admin/manageShopping">Purchases</Link>
          <Link to="/admin/manageUsers">Users</Link>
        </section>
        <section className="right_section flex flex-col  items-center gap-4">
          <Title />
          <div>
            <SortComponent sortComponentProps={sortComponentProps} />
          </div>
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="p-2 border ">Imagen producto</th>
                <th className="p-2 border  ">Nombre del producto</th>
                <th className="p-2 border  ">Marca</th>
                <th className="p-2 border  ">Precio</th>
                <th className="p-2 border  ">Rating</th>
                <th className="p-2 border  ">Stock del producto</th>
                <th className="p-2 border  ">Habilitado</th>
                <th className="p-2 border  ">Eliminar</th>
              </tr>
            </thead>
            <tbody>
              {productsAvailable ? (
                allProducts.products.map((product) => (
                  <tr key={product.id}>
                    <td className="p-4 border">
                      <img
                        src={product.img}
                        alt={product.name}
                        className="w-16 h-16 object-cover"
                      />
                    </td>
                    <td className="p-4 border">{product.name}</td>
                    <td className="p-4 border">{product.brand}</td>
                    <td className="p-4 border">${product.price}</td>
                    <td className="p-4 border">{product.rating}</td>
                    <td className="p-4 border">{product.stock}</td>
                    <td className="p-4 border">
                    <button>
                    {product.enabled ? "Sí" : "No"}
                    </button>
                     
                    </td>
                    <td className="p-4 border">
                      <button>
                        <img src={garbage} alt="" />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center p-4">
                    No se encuentran productos disponibles.
                  </td>
                </tr>
              )}
            </tbody>
            <Paginated
              page={page}
              totalPages={allProducts?.totalPages}
              setPage={setPage}
            />
          </table>
        </section>
      </div>
      <Footer />
    </main>
  );
};

export default ManageProducts;
