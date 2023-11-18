import { AiOutlineAntDesign } from "react-icons/ai";
import { FaCss3 } from "react-icons/fa";
import { IoLogoWebComponent } from "react-icons/io5";
import { MdComputer } from "react-icons/md";
import { SiThealgorithms } from "react-icons/si";
import { BiSolidLike } from "react-icons/bi";
import ServicesItem from "../components/ServicesItem";

const Services = () => {
  const data = [
    {
      id: 1,
      icon: <AiOutlineAntDesign />,
      title: "Refreshing Design",
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio in inventore assumenda numquam quae illo.",
    },
    {
      id: 2,
      icon: <FaCss3 />,
      title: "Based On Tailwind Css  ",
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio in inventore assumenda numquam quae illo.",
    },
    {
      id: 3,
      icon: <IoLogoWebComponent />,
      title: "300+ Components",
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio in inventore assumenda numquam quae illo.",
    },
    {
      id: 4,
      icon: <MdComputer />,
      title: "Speed Optimized",
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio in inventore assumenda numquam quae illo.",
    },
    {
      id: 5,
      icon: <SiThealgorithms />,
      title: "Fully Customizable",
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio in inventore assumenda numquam quae illo.",
    },
    {
      id: 6,
      icon: <BiSolidLike />,
      title: "Regular Updates",
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio in inventore assumenda numquam quae illo.",
    },
  ];
  return (
    <div>
      <div className="bg-black w-screen py-24  text-white text-center px-5">
        <h1 className="text-6xl  font-bold mb-5 uppercase">
          Services <span className=" text-orange-500">page</span>
        </h1>
      </div>
      <div className=" max-w-7xl mx-auto mt-10 mb-16  px-5">
        <div className=" text-center">
          <span className=" text-sm text-orange-500 font-medium">
            Our Services
          </span>
          <h3 className="text-3xl font-bold my-3">What We Offer</h3>
          <p className=" max-w-md mx-auto text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
            debitis consequatur! Porro debitis cupiditate corrupti!
          </p>
        </div>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-14 mt-10">
          {data.map(({ id, icon, title, desc }) => (
            <ServicesItem key={id} icon={icon} title={title} desc={desc} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
