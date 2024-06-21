import UpdateProductForm from "../../../components/UpdateProductForm/UpdateProductForm";
import Footer from "../../../components/Footer/Footer";
import NavAside from "../../../components/NavAside/NavAside";
import Title from "../../../components/Title/Title";
import { mainPages } from "../../../styles";
import { useParams } from "react-router-dom";


const UpdateProduct = () => {
  const { id } = useParams();

  return (
    <main className={mainPages}>
      <div className="w-full flex">
        <NavAside />
        <section className="right_section w-full px-10 flex flex-col items-center">
          <Title />
          <UpdateProductForm id={id} />
        </section>
      </div>
      <Footer />
    </main>
  );
};

export default UpdateProduct;
