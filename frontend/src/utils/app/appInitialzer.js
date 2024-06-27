const appInitialzer = () => {
  if (window.sessionStorage.getItem("visited") === null) {
    if (window.localStorage.getItem("cart") !== null) {
      window.localStorage.removeItem("cart");
    }

    const visited = true;
    const cart = { id: null, products: [] };
    window.localStorage.setItem("cart", JSON.stringify(cart));
    window.sessionStorage.setItem("visited", JSON.stringify(visited));
  }
};

export default appInitialzer;
