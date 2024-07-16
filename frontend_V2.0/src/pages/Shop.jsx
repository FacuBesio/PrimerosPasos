import { useParams } from "react-router-dom";
import Products from "../components/Products/Products";
import Aside_FilterBar from "../components/Aside_FilterBar/Aside_FilterBar";
import { shopStyle } from "../styles";
import Tags from "../components/Tags/Tags";

const Shop = () => {
  // const { name } = useParams();

  return (
    <section className={`${shopStyle}`}>
      <Aside_FilterBar />
      <div className="flex flex-col items-center justify-start w-full h-full">
        <Tags />
        <Products />
      </div>
    </section>
  );
};

export default Shop;
