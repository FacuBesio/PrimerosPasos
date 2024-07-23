import { useParams } from "react-router-dom";
import Products from "../components/Products/Products";
import Aside_FilterBar from "../components/Aside_FilterBar/Aside_FilterBar";
import Paginated from "../components/Paginated/Paginated";
import {
  shop_content_style,
  shop_position_down,
  shop_position_up,
  shopStyle,
} from "../styles";
import Tags from "../components/Tags/Tags";
import useLoadEffect_0 from "../hooks/Effects/useLoadEffect_0";

const Shop = () => {
  // const { name } = useParams();
  const { loadEffect_0 } = useLoadEffect_0();

  const border_position = loadEffect_0 ? shop_position_up : shop_position_down;

  const shop_visibility = loadEffect_0 ? shop_position_up : shop_position_down;

  return (
    <div className={`${border_position}`}>
      <section className={`${shopStyle} ${shop_visibility}`}>
        <Aside_FilterBar />
        <div className={`${shop_content_style}`}>
          <Tags />
          <Products />
          <Paginated />
        </div>
      </section>
    </div>
  );
};

export default Shop;
