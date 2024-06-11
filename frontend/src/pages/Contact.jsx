import { ContactUs, Footer, Marquee, Navbar, Title } from "../components";
import Loader from "../components/Loader/Loader";
import useLoading from "../hooks/useLoading";

const Contact = () => {
   
  return (
    <div className="bg-[#eae0f5]  overflow-hidden">
      <Marquee />
      <Title />
      <Navbar  />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Contact;
