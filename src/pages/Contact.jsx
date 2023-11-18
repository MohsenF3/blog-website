import contactImg from "../assets/contact.png";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div className="">
      <div className="bg-black w-screen py-24  text-white text-center px-5">
        <h1 className="text-6xl  font-bold mb-5 uppercase">
          Contact <span className=" text-orange-500">page</span>
        </h1>
      </div>

      <div className="max-w-7xl mx-auto my-16 flex md:flex-row flex-col">
        <div className=" flex-1">
          <img src={contactImg} alt="" className="" />
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
