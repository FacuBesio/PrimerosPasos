import React, { useEffect, useState ,useRef} from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import productInitializer from "../../utils/products/productInitializer";
import newUserdata from "../../utils/navbar/newUserdata";

const Navbar = () => {

  const [userData, setUserData] = useState(null);
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartRef = useRef(null);

  const handleButtonCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  console.log("userData: ", userData);

  const handleLogout = () => {
    window.localStorage.removeItem("userData");
    setUserData(null);
    logout();
  };

  useEffect(() => {
    productInitializer();
    if (isAuthenticated && user && !userData) {
      newUserdata(setUserData, user);
    }
  }, [isAuthenticated, user]);

  return (
    <nav className="flex flex-col md:flex-row gap-4 justify-center items pb-6 ">
      <div className="flex gap-4 justify-center">
        <a
          href="/"
          className="md:text-xl  hover:text-[#DBB1BC] hover:scale-105  "
        >
          Home
        </a>
        <a
          href="/shop"
          className="md:text-xl hover:text-[#DBB1BC] hover:scale-105  "
        >
          Categorias
        </a>
        <a
          href="/contacto"
          className="md:text-xl hover:text-[#DBB1BC] hover:scale-105  "
        >
          Contacto
        </a>
        {!isAuthenticated ? (
          <button
            className="md:text-xl hover:text-[#DBB1BC] hover:scale-105 text-[#5a5b5a] "
            onClick={() => loginWithRedirect()}
          >
            Login
          </button>
        ) : (
          <button
            className="md:text-xl hover:text-[#DBB1BC] hover:scale-105 text-[#5a5b5a] "
            onClick={handleLogout}
          >
            Logout
          </button>
        )}
      </div>
      <div className="flex justify-center   ">
        <form className="flex gap-2" action="">
          <input
            placeholder="Buscar"
            className="px-1 rounded-md border border-red-200"
            type="text"
          />
          <button>
            <img
              className="w-[30px]"
              src="/src/assets/VectorSearch.png"
              alt=""
            />
          </button>
        </form>
        <button onClick={handleButtonCart}>
          <img src="/src/assets/cart.png" className="w-[30px]" alt="" />
        </button>
        {isCartOpen && (
          <div
            ref={cartRef}
            className="fixed left-0 top-0 h-screen w-[100%] bg-black bg-opacity-50 backdrop-blur-sm z-40 transition-all"
            onClick={handleButtonCart}
          >
            <div className="fixed right-0 top-0 h-screen w-[20%] bg-white z-50 pt-10 px-6 text-center flex flex-col gap-12 transition-all "></div>
          </div>
        )}
          {isAuthenticated && (
          <Link to="/profile/personalInfo">
            <img
              src={userData?.picture}
              alt={userData?.name}
              className="w-8 h-8 cursor-pointer"
            />
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
