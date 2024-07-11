import cartIcon from "../../assets/cart.png";
import isAdminIcon from "../../assets/adminIcon.png";
import { Link } from "react-router-dom";
import MainLinks from "../NavBar_Links/MainLinks";
import CategoryLinks from "../NavBar_Links/CategoryLinks";
import SearchBar from "../SearchBar/SearchBar";

const Navbar = () => {
  return (
    <div>
      <nav
        className={`flex items-center flex-col justify-center md:flex-row gap-2 pb-2`}
      >
        <MainLinks />
        <SearchBar />
        <div className="flex justify-center items-center">
          <button>
            <img
              src={cartIcon}
              className="w-[30px] ml-2 hover:scale-110 transition-transform duration-200"
              alt="Cart Icon"
            />
          </button>

          <Link to="/profile/personalInfo">
            <img
              // src={userData?.img}
              // alt={userData?.name}
              className="w-9 h-9 cursor-pointer p-1 m-1 rounded-full hover:scale-110 transition-transform duration-200"
            />
          </Link>

          <Link to="/admin/manageProducts">
            <img
              src={isAdminIcon}
              alt="Admin Icon"
              className="w-9 h-9 cursor-pointer my-1 rounded-full hover:scale-110 transition-transform duration-200"
            />
          </Link>
        </div>
      </nav>

      <CategoryLinks />
    </div>
  );
};

export default Navbar;
