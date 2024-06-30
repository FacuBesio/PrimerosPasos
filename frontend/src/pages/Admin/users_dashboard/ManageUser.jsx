import { useCallback, useContext, useEffect, useState } from "react";
import { Title } from "../../../components";
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
import sorterValidator from "../../../utils/sorter/sorterValidator";
import NavAside from "../../../components/NavAside/NavAside";
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";
import getUsers from "../../../utils/users/getUsers";
import CanNot_UpdateNotification from "../../../utils/users/CanNot_UpdateNotification";
import searchIcon from '../../../assets/VectorSearch.png'

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
    <div className="flex flex-col min-h-screen text-[12px] md:text-[16px] lg:text-[18px]">
      <main className="flex-grow flex w-full bg-gradient-to-b from-[#F8F8F8] to-[#e7d6d6] overflow-hidden">
        <NavAside />
        <section className="right_section w-full pl-20 px-4 flex flex-col items-center gap-4">
          <Title />
          <div className="flex w-full gap-2 md:gap-4 items-center">
            <Link className="bg-slate-400 hover:bg-slate-500 rounded-md p-3 text-center">
              <label
                htmlFor="addCategory"
                className="text-white font-bold bg-slate-400 hover:bg-slate-500 rounded-md p-3 text-centertext-[12px] md:text-[18px]"
              >
                Usuarios
              </label>
            </Link>

            <form className="flex gap-2">
              <input
                placeholder="Buscar"
                className="px-1 rounded-md border border-red-100 max-w-[160px] "
                type="text"
                value={searchBar}
                onChange={onChangeSearchBar}
              />
              <button>
                <img
                  className="w-[22px] md:w-[30px] hover:scale-110"
                  src={searchIcon}
                  alt="Search Icon"
                />
              </button>
            </form>
            {/* <SortComponent sortComponentProps={sortComponentProps} /> */}
          </div>
          <div className="overflow-x-auto w-full">
            <table className="w-full border border-collapse bg-white">
              <thead>
                <tr className="rounded-xl">
                  <th className="p-1 md:p-4 border text-[12px] md:text-[16px] lg:text-[18px]">
                    Id
                  </th>
                  <th className="p-1 md:p-4 border text-[12px] md:text-[16px] lg:text-[18px]">
                    Imagen
                  </th>
                  <th className="p-1 md:p-4 border text-[12px] md:text-[16px] lg:text-[18px]">
                    Nombre
                  </th>
                  <th className="p-1 md:p-4 border text-[12px] md:text-[16px] lg:text-[18px]">
                    Email
                  </th>
                  <th className="p-1 md:p-4 border text-[12px] md:text-[16px] lg:text-[18px]">
                    Teléfono
                  </th>
                  <th className="p-1 md:p-4 border text-[12px] md:text-[16px] lg:text-[18px]">
                    País
                  </th>
                  <th className="p-1 md:p-4 border text-[12px] md:text-[16px] lg:text-[18px]">
                    Rol
                  </th>
                  <th className="p-1 md:p-4 border text-[12px] md:text-[16px] lg:text-[18px]">
                    Habilitado
                  </th>
                  <th className="p-1 md:p-4 border text-[12px] md:text-[16px] lg:text-[18px]">
                    Actualizar
                  </th>
                  <th className="p-1 md:p-4 border text-[12px] md:text-[16px] lg:text-[18px]">
                    Eliminar
                  </th>
                </tr>
              </thead>
              <tbody className="text-center">
                {UsersAvailable ? (
                  allUsers.users.map((user) => (
                    <tr key={user.id}>
                      <td className="p-1 md:p-4 border min-w-[100px] max-w-[300px] truncate">
                        {user.id}
                      </td>
                      <td className="p-1 md:p-4 border text-center">
                        {/* <img
                        src={user.img}
                        alt={user.name}
                        className="w-24 h-24 object-cover rounded-xl mx-auto"
                      /> */}
                        img
                      </td>
                      <td className="p-1 md:p-4 border  text-[12px] md:text-[16px] lg:text-[18px]">
                        {user.name}
                      </td>
                      <td className="p-1 md:p-4 border  text-[12px] md:text-[16px] lg:text-[18px]">
                        {user.email}
                      </td>
                      <td className="p-1 md:p-4 border  text-[12px] md:text-[16px] lg:text-[18px]">
                        {user.phone || "-"}
                      </td>
                      <td className="p-1 md:p-4 border  text-[12px] md:text-[16px] lg:text-[18px]">
                        {user.country || "-"}
                      </td>
                      <td className="p-1 md:p-4 border  text-[12px] md:text-[16px] lg:text-[18px]">
                        {user.role}
                      </td>
                      <td className="p-1 md:p-4 border  text-[12px] md:text-[16px] lg:text-[18px]">
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
                      <td className="p-1 md:p-4 border text-[12px] md:text-[16px] lg:text-[18px]">
                        {user.id !== 1 ? (
                          <Link to={`/admin/manageUsers/update/${user.id}`}>
                            <button>
                              <img
                                src={update_icon}
                                alt="Update"
                                className="w-8 h-8 transition-transform duration-300 hover:scale-105"
                              />
                            </button>
                          </Link>
                        ) : (
                          <button onClick={() => handlerUpdate(user.name)}>
                            <img
                              src={update_icon}
                              alt="Update"
                              className="w-8 h-8 transition-transform duration-300 hover:scale-105"
                            />
                          </button>
                        )}
                      </td>
                      <td className="p-1 md:p-4 border text-[12px] ">
                        <button>
                          <img
                            src={garbage}
                            alt="Eliminar"
                            className="w-8 h-8 transition-transform duration-300 hover:scale-105"
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
          </div>
        </section>
      </main>
    </div>
  );
};

export default ManageUsers;
