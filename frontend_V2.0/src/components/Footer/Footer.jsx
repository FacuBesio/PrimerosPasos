import {
  FacebookOutlined,
  InstagramOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";
import { footerStyle, invisible, visible } from "../../styles";
import useLoadEffect_0 from "../../hooks/Effects/useLoadEffect_0";

const Footer = () => {
  const { loadEffect_0 } = useLoadEffect_0();
  const footer_visibility = loadEffect_0 ? visible : invisible;

  return (
    <section className={`${footerStyle} ${footer_visibility}`}>
      <div className="flex flex-col">
        <a className=" hover:text-[#DBB1BC] text-black/50 " href="/">
          Home
        </a>
        <a className=" hover:text-[#DBB1BC] text-black/50" href="/shop">
          Shop
        </a>
        <a className=" hover:text-[#DBB1BC] text-black/50" href="/contacto">
          Contacto
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
