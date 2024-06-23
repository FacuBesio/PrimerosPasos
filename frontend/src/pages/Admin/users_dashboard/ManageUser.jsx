import { useCallback, useContext, useEffect, useState } from "react";
import { Footer, Title } from "../../../components";
import { Link } from "react-router-dom";
import {
  FilterContext,
  PagesContext,
  ProductsContext,
  SearchContext,
  SortContext,
} from "../../../context";
import update_icon from "../../../assets/update_icon.png";
import Paginated from "../../../components/Paginated/Paginated";
import garbage from "../../../assets/garbage.png";
import SortComponent from "../../../components/SortComponent/SortComponent";
import sorterValidator from "../../../utils/sorter/sorterValidator";
import NavAside from "../../../components/NavAside/NavAside";
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";
import getUsers from "../../../utils/users/getUsers";
import CanNot_UpdateNotification from "../../../utils/users/CanNot_UpdateNotification";

const ManageUsers = () => {
  const { filter } = useContext(FilterContext);
  const { page, setPage } = useContext(PagesContext);
  const { sorter } = useContext(SortContext);
  const { allProducts, setAllProducts } = useContext(ProductsContext);
  const { searchBar, setSearchBar, setSearchBarTag } =
    useContext(SearchContext);
  const [allUsers, setAllUsers] = useState();
  console.log("allUsers.users:", allUsers?.users);

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

  const handlerUpdate = (name) => {
    CanNot_UpdateNotification(
      name,
      `Los datos del owner no pueden ser modificados por este medio.`
    );
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    const sorterQuery = sorterValidator(sorterByPrice, sorterByRating);
    if (sorterQuery.sorterActive) {
      setSorter(sorterQuery.result);
    }
  }, [sorterByPrice, sorterByRating]);

  useEffect(() => {
    getUsers(setAllUsers);
  }, [page, searchBar, filter, sorter]);

  const UsersAvailable = allUsers?.users?.length > 0;

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow flex w-full bg-gradient-to-b from-[#F8F8F8] to-[#e7d6d6] overflow-hidden">
        <NavAside />
        <section className="right_section w-full px-10 flex flex-col items-center gap-4">
          <Title />
          <div className="flex w-full p-4 md:gap-4 items-center justify-between overflow-x-auto">
            <Link to={"/admin/manageProducts/create"}>
              <label
                htmlFor="image"
                className="px-6 py-3 bg-slate-400 text-white font-bold rounded-md hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-green-400 cursor-pointer"
              >
                Usuarios
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
                <th className="p-4 border">Id</th>
                <th className="p-4 border">Imagen</th>
                <th className="p-4 border">Nombre</th>
                <th className="p-4 border">Email</th>
                <th className="p-4 border">Teléfono</th>
                <th className="p-4 border">País</th>
                <th className="p-4 border">Rol</th>
                <th className="p-4 border">Habilitado</th>
                <th className="p-4 border">Actualizar</th>
                <th className="p-4 border">Eliminar</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {UsersAvailable ? (
                allUsers.users.map((user) => (
                  <tr key={user.id}>
                    <td className="p-4 border min-w-[100px] max-w-[300px] truncate">
                      {user.id}
                    </td>
                    <td className="p-4 border text-center">
                      {/* <img
                        src={user.img}
                        alt={user.name}
                        className="w-24 h-24 object-cover rounded-xl mx-auto"
                      /> */}
                      img
                    </td>
                    <td className="p-4 border">{user.name}</td>
                    <td className="p-4 border">{user.email}</td>
                    <td className="p-4 border">{user.phone || "-"}</td>
                    <td className="p-4 border">{user.country || "-"}</td>
                    <td className="p-4 border">{user.role}</td>
                    <td className="p-4 border">
                      <button>
                        {user.enabled ? (
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
                    <td className="p-4 border">
                      {user.id !== 1 ? (
                        <Link to={`/admin/manageUsers/update/${user.id}`}>
                          <button>
                            <img
                              src={update_icon}
                              alt="Update"
                              className="w-12 h-12 transition-transform duration-300 hover:scale-105"
                            />
                          </button>
                        </Link>
                      ) : (
                        <button onClick={() => handlerUpdate(user.name)}>
                          <img
                            src={update_icon}
                            alt="Update"
                            className="w-12 h-12 transition-transform duration-300 hover:scale-105"
                          />
                        </button>
                      )}
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
            totalPages={allUsers?.totalPages}
            setPage={setPage}
          />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ManageUsers;
