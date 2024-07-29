import title from "../../assets/title.png";
import useLoadEffect from "../../hooks/Effects/useLoadEffect";
import { invisible, transition_200, visible } from "../../styles";
const Title = () => {
  const { loadEffect } = useLoadEffect();
  const title_visibility = loadEffect ? visible : invisible;
  
  return (
    <section className={`flex justify-center w-full ${transition_200} ${title_visibility}`}>
      <a href="/" className="flex justify-center items-center p-4 w-fit">
        <img src={title} alt="titulo" />
      </a>
    </section>
  );
};

export default Title;
