import AditionalInfo from "../components/AditionalInfo/AditionalInfo";
import Banner from "../components/Banner/Banner";
import PromotedProducts from "../components/PromotedProducts/PromotedProducts";
import useCategories from "../hooks/Categories/useCategories";
import useLoadEffect from "../hooks/Effects/useLoadEffect";
import {
  homeStyle,
  home_content_invisible,
  home_content_visible,
} from "../styles";

const Home = () => {
  // const { areCategoriesLoaded } = useCategories();
  const { loadEffect } = useLoadEffect();

  const home_visibility = loadEffect
    ? home_content_visible
    : home_content_invisible;

  return (
    <section className={homeStyle}>
      <div className={home_visibility}>
        <Banner />
        <AditionalInfo />
        <PromotedProducts />
      </div>
    </section>
  );
};

export default Home;
