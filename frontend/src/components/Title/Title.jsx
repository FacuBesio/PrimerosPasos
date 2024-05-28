import title from "../../assets/title.png";
const Title = () => {
  return (
    <section className="relative flex justify-center">
      <a href="/" className="flex justify-center items-center p-4 w-fit">
        <img src={title} alt="titulo" />
      </a>
    </section>
  );
};

export default Title;
