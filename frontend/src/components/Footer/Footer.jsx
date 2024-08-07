
const Footer = () => {
  return (
    <section className="flex justify-between pl-12 p-6 z-50 text-[12px] md:text-[18px]">
      <div className="flex flex-col">
        <a className=" hover:text-[#DBB1BC] " href="/">Home</a>
        <a className=" hover:text-[#DBB1BC]" href="/contacto">Contacto</a>
        <a className=" hover:text-[#DBB1BC]" href="/shop">Categorias</a>
      </div>
      <div>
        <h2 className=" hover:text-[#DBB1BC]">+351 682044125</h2>
        <h2 className=" hover:text-[#DBB1BC]">babyshop@gmail.com</h2>
        <h2 className=" hover:text-[#DBB1BC]">Buenos Aires, Argentina.</h2>
      </div>
    </section>
  );
};

export default Footer;
