import { ContactUs, Footer, Marquee, Navbar, Title } from "../components";
import { mainPages } from "../styles";

const Contact = () => {
  return (
    <main className={mainPages}>
      <Marquee />
      <Title />
      <Navbar  />
      <ContactUs />
      <Footer />
    </main>
  );
};

export default Contact;
