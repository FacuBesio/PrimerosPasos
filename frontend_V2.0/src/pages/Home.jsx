import useCategories from "../hooks/Categories/useCategories";
import useLoadEffect from "../hooks/Effects/useLoadEffect";
import {
  homeStyle,
  home_content_invisible,
  home_content_visible,
} from "../styles";

const Home = () => {
  const { allCategories } = useCategories();
  const { loadEffect } = useLoadEffect();

  const home_content = loadEffect ? home_content_visible : home_content_invisible;

  return (
    <section className={homeStyle}>
      <div className={home_content}>
        <h1>HOME TEST</h1>
      </div>
    </section>
  );
};

export default Home;
