import {
  FacebookOutlined,
  InstagramOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";

const Footer = () => {
  return (
    <section className="flex justify-between items-center p-6 z-50 text-[12px] md:text-[18px] border-t-2 border-t-white">
      <div className="flex flex-col">
        <a className=" hover:text-[#DBB1BC] text-black/50 " href="/">
          Home
        </a>
        <a className=" hover:text-[#DBB1BC] text-black/50" href="/contacto">
          Contacto
        </a>
        <a className=" hover:text-[#DBB1BC] text-black/50" href="/shop">
          Categorias
        </a>
      </div>

      <div className="flex justify-center items-center pl-32 gap-20 text-4xl text-black/25">
        <FacebookOutlined className="cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-110 hover:text-slate-400" />
        <InstagramOutlined className="cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-110 hover:text-red-300" />
        <WhatsAppOutlined className="cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-110 hover:text-green-300" />
      </div>

      <div className="flex flex-col">
        <h2 className="cursor-default hover:text-[#DBB1BC] text-black/50">
          +351 682044125
        </h2>
        <h2 className=" cursor-default hover:text-[#DBB1BC] text-black/50">
          babyshop@gmail.com
        </h2>
        <h2 className=" cursor-default hover:text-[#DBB1BC] text-black/50">
          Buenos Aires, Argentina.
        </h2>
      </div>
    </section>
  );
};

export default Footer;
