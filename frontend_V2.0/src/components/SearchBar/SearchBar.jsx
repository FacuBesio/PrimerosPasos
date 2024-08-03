import { useContext, useEffect, useState } from "react";
import searchIcon from "../../assets/VectorSearch.png";
import { SearchContext } from "../../context/SearchContext";
import { PagesContext, TagsContext } from "../../context";
import { useNavigate } from "react-router-dom";
import useAdminNavegation from "../../hooks/Admin/useAdminNavegation";
import { SearchOutlined } from "@ant-design/icons";

const SearchBar = () => {
  const navigate = useNavigate();
  const { setPage } = useContext(PagesContext);
  const { setSearch } = useContext(SearchContext);
  const { searchTag, setSearchTag } = useContext(TagsContext);
  const { adminNavegationActive } = useAdminNavegation();
  const [inputData, setInputData] = useState("");

  useEffect(() => {
    if (inputData === "") {
      setSearch("");
      setSearchTag("");
    }
  }, [inputData]);

  useEffect(() => {
    if (searchTag === "") {
      setInputData("");
    }
  }, [searchTag]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearch(inputData);
    setSearchTag(inputData);
    !adminNavegationActive && navigate("/shop");
  };

  const onChangeSearchBar = (event) => {
    setInputData(event.target.value);
    setTimeout(() => {
      setSearch(event.target.value);
      setSearchTag(event.target.value);
      setPage(1);
    }, 750);
  };

  return (
    <form className="flex gap-2 items-center" onSubmit={handleSubmit}>
      <input
        name="searchDataInput"
        className="p-1 rounded-md border placeho border-red-100 max-w-[160px] h-fit text-[12px] md:text-[16px]"
        type="text"
        onChange={onChangeSearchBar}
        value={inputData}
      />

      {inputData !== "" ? (
        <button>
          <img
            className="w-[30px] hover:scale-110 transition-transform duration-200"
            src={searchIcon}
            alt="Search Icon"
          />
        </button>
      ) : (
        <button type="submit">
          <SearchOutlined className="text-3xl text-gray-400/25 hover:text-red-100 hover:scale-110 transition-transform duration-200" />
        </button>
      )}
    </form>
  );
};

export default SearchBar;
