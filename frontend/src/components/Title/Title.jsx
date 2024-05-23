import title from "../../assets/title.png";
const Title = () => {
  return (
    <section className="relative">
      <a href="/" className="flex justify-center items-center p-4">
        <img src={title} alt="titulo" />
      </a>
    </section>
  );
};

export default Title;
