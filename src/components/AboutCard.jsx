import { CgDetailsMore } from "react-icons/cg";

const AboutCard = ({ img, name, job, works }) => {
  return (
    <div className=" bg-slate-100 hover:-translate-y-6 transition duration-150 ease-in-out shadow-lg px-3 py-12 rounded-md text-center">
      <div className="">
        <img src={img} alt="" className=" w-1/3 mx-auto" />
      </div>
      <h4 className=" font-bold mt-3">{name}</h4>
      <span className="text-sm font-medium ">{job}</span>

      <div className="flex items-center gap-1 font-medium text-sm text-gray-500 justify-center">
        <CgDetailsMore />
        {works}
      </div>
    </div>
  );
};

export default AboutCard;
