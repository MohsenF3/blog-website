import { Link } from "react-router-dom";

// icons
import { FaArrowRight } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="bg-black w-screen py-20  text-white text-center px-5">
      <h1 className="text-6xl  font-bold mb-5 uppercase">
        welcome to our <span className=" text-orange-500">blog</span>
      </h1>
      <h3 className="max-w-3xl text-lg mx-auto text-gray-300 font-Primary">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
        voluptatibus vitae tenetur quos ad blanditiis totam autem iusto omnis
        inventore!
      </h3>
      <Link
        to=""
        className="flex items-center group justify-center gap-2 mt-8  text-gray-300 hover:text-orange-500"
      >
        Learn more{" "}
        <FaArrowRight className=" group-hover:translate-x-2 transition duration-150" />
      </Link>
    </div>
  );
};

export default Banner;
