import { ContactUs, Footer, Marquee, Navbar, Title } from "../components";
import { mainPages } from "../styles";
import useStatesReset from "../hooks/useStatesReset";

const Contact = () => {
  useStatesReset();

  return (
    <main className={mainPages}>
      <Marquee />
      <Title />
      <Navbar />
      <ContactUs />
      <Footer />
    </main>
  );
};

export default Contact;
