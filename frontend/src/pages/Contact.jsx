import React, { useRef, useState } from "react";
import { Footer, Marquee, Navbar, Title } from "../components";
import emailjs from "@emailjs/browser";

const Contact = () => {
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
    <div className="bg-[#eae0f5]  overflow-hidden">
      <Marquee />
      <Title />
      <Navbar />
      <div className=" m-4 p-4 flex gap-6 overflow-hidden justify-center bg-[#D3C4E3] ">    
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="  mb-4">Nombre</span>
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
            <span className=" font-medium mb-4">Email</span>
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
            <span className=" font-medium mb-4">Tu mensaje</span>
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
            className="bg-tertiary py-3 px-8 w-fit  bg-white border-2 border-red-200 rounded-xl"
            type="submit"
          >
            {loading ? " Sending..." : "Send"}
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
