import CreateProductForm from "../../../components/CreateProductForm/CreateProductForm";
import Footer from "../../../components/Footer/Footer";
import NavAside from "../../../components/NavAside/NavAside";
import Title from "../../../components/Title/Title";
import { mainPages } from "../../../styles";


const CreateNewProduct = () => {
  return (
    <main className={mainPages}>
      <div className="w-full flex">
        <NavAside />
        <section className="right_section w-full   flex flex-col items-center">
          <Title />
          <CreateProductForm />
        </section>
      </div>
     
    </main>
  );
};

export default CreateNewProduct;
