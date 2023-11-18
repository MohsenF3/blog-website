import aboutImg from "../assets/about.png";

import author1 from "../assets/user-01.png";
import author2 from "../assets/user-02.png";
import author3 from "../assets/user-03.png";
import AboutCard from "../components/AboutCard";

const About = () => {
  const data = [
    {
      id: 1,
      img: author1,
      name: "Adrio Devid",
      job: "Director of Operations",
      works: "12 Article Published",
    },
    {
      id: 2,
      img: author2,
      name: "Rayan mario",
      job: "Content Writer",
      works: "8 Article Published",
    },
    {
      id: 3,
      img: author3,
      name: "Devid Tac",
      job: "Head of Marketing",
      works: "5 Article Published",
    },
    {
      id: 4,
      img: author1,
      name: "Mohsen ",
      job: "Developer",
      works: "7 Article Published",
    },
  ];
  return (
    <div>
      <div className="bg-black w-screen py-24  text-white text-center px-5">
        <h1 className="text-6xl  font-bold mb-5 uppercase">
          About <span className=" text-orange-500">page</span>
        </h1>
      </div>
      <div className="max-w-7xl mx-auto my-16 px-5">
        <div className="flex flex-col md:flex-row gap-7">
          <div className="flex-1 ">
            <img src={aboutImg} alt="" className="w-full" />
          </div>
          <div className="flex-1">
            <span className="text-orange-500 font-medium">Who We Are</span>
            <h2 className="font-bold text-4xl capitalize mt-3 mb-6 max-sm:text-3xl">
              we provede high quality <br /> articles & blogs
            </h2>
            <p className="text-gray-500 w-2/3 max-sm:w-full mb-3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia
              laborum aut totam eum ab autem facilis vitae earum dolor harum!
              Esse, quasi. Amet ullam deleniti tenetur blanditiis nam
              reprehenderit natus!
            </p>
            <p className="text-gray-500 w-2/3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              doloribus consectetur eos sed dolor minima!
            </p>
          </div>
        </div>

        <div>
          <h3 className="border-b my-16 text-4xl max-sm:text-3xl pb-5 font-bold">
            Top Authors
          </h3>
          <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1  gap-7">
            {data.map(({ id, img, name, job, works }) => (
              <AboutCard
                key={id}
                img={img}
                name={name}
                job={job}
                works={works}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
