import { NavLink } from "react-router-dom";
import home_icon from "../../assets/home_icon.png";
import user_icon from "../../assets/user_icon.png";
import purchases_icon from "../../assets/purchases_icon.png";

const Profile_NavAside = () => {
  return (
    <section className="left_section flex flex-col items-center w-1/12 font-bold bg-red-200">
      <div className="w-full h-28">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "px-4 py-6 bg-red-300 w-full text-white text-center  transition-transform duration-300 transition-transform duration-300 scale-105 rounded-md"
              : "flex flex-col items-center justify-center px-4 py-7 hover:bg-red-300 w-full h-full text-center transition-transform duration-300 hover:scale-105 rounded-md"
          }
        >
          <button>
            <img src={home_icon} alt="Home" className="w-12 h-12" />
          </button>
        </NavLink>
      </div>
      <div className="w-full h-28">
        <NavLink
          to="/profile/personalInfo"
          className={({ isActive }) =>
            isActive
              ? "flex flex-col items-center justify-center px-4 py-7 bg-red-300 w-full h-full text-center transition-transform duration-300 scale-105 rounded-md"
              : "flex flex-col items-center justify-center px-4 py-7 hover:bg-red-300 w-full h-full text-center transition-transform duration-300 hover:scale-105 rounded-md"
          }
        >
          <button>
            <img src={user_icon} alt="Home" className="w-12 h-12" />
          </button>
        </NavLink>
      </div>
      <div className="w-full h-28">
        <NavLink
          to="/profile/personalPurchases"
          className={({ isActive }) =>
            isActive
             ? "flex flex-col items-center justify-center px-4 py-7 bg-red-300 w-full h-full text-center transition-transform duration-300 scale-105 rounded-md"
              : "flex flex-col items-center justify-center px-4 py-7 hover:bg-red-300 w-full h-full text-center transition-transform duration-300 hover:scale-105 rounded-md"
          }
        >
          <button>
            <img src={purchases_icon} alt="Home" className="w-12 h-12" />
          </button>
        </NavLink>
      </div>
    </section>
  );
};

export default Profile_NavAside;
