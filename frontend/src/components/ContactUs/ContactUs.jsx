import { useRef, useState } from "react";
import birdContact from "../../assets/birdContact.png"
import flyContact from "../../assets/flyContact.png"
import msjContact from "../../assets/msjContact.png"
import msjContact2 from "../../assets/msjContact2.png"
import emailjs from "@emailjs/browser";
const ContactUs = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        "service_rkgwp8o",
        "template_ryfpa8s",
        {
          from_name: form.name,
          to_name: "BabyShop",
          from_email: form.email,
          to_email: "contact@jsmastery.com",
          message: form.message,
        },
        "Yh6wSdANkK88GGlQh"
      )
      .then(
        () => {
          setLoading(false);
          alert("thank You");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);

          alert("something went wrong");
        }
      );
  };
  return (
    <div>
      <div className=" m-4 p-4 flex gap-6 overflow-hidden justify-center bg-[#D3C4E3] relative">
        <img className="absolute object-cover top-3 right-2" src={birdContact} alt="BirdContact" />
        <img className="absolute object-cover bottom-6 right-6" src={flyContact} alt="MsjContact" />
        <img className="absolute object-cover bottom-6 left-6 hidden md:block" src={msjContact} alt="msj2Contact" />
        <img className="absolute object-cover top-3 left-2 hidden md:block" src={msjContact2} alt="FlyContact" />
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-[#5a5b5a]  mb-4">Nombre</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="¿Cómo te llamas?"
              className="border-2 border-red-200 bg-tertiary py-4 px-6 placeholder:text-secondary  rounded-lg  "
            />
          </label>
          <label className="flex flex-col">
            <span className="text-[#5a5b5a]  font-medium mb-4">Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="¿Cual es tu email?"
              className=" border-2 border-red-200 bg-tertiary py-4 px-6 placeholder:text-secondary  rounded-lg    "
            />
          </label>
          <label className="flex flex-col">
            <span className="text-[#5a5b5a]  font-medium mb-4">Tu mensaje</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Hacenos una pregunta."
              className="border-2 border-red-200 bg-tertiary py-4 px-6 placeholder:text-secondary  rounded-lg  "
            />
          </label>

          <button
            className="bg-tertiary py-3 px-8 w-fit  bg-white border-2 border-red-200 rounded-xl text-[#5a5b5a] hover:bg-red-300"
            type="submit"
          >
            {loading ? " Sending..." : "Send"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
