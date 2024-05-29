import productInitializer from "../products/productInitializer";


const appInitialzer = () => {
  productInitializer();

  if (window.sessionStorage.getItem("visited") === null) {
    if (window.localStorage.getItem("cart") !== null) {
      window.localStorage.removeItem("cart");
    }

    const visited = true;
    const cart = {
      id: null,
      User: null,
      products: [],
      Purchase: 0,
    };

    window.localStorage.setItem("cart", JSON.stringify(cart));
    window.sessionStorage.setItem("visited", JSON.stringify(visited));
  }
};

export default appInitialzer;
