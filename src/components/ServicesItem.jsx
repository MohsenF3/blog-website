const ServicesItem = ({ icon, title, desc }) => {
  return (
    <div className=" shadow-lg p-5 rounded-md hover:shadow-xl transition duration-100">
      <div className="w-full  text-blue-500 text-9xl">{icon}</div>
      <h4 className="mt-3 mb-1 font-bold">{title}</h4>
      <p className="text-gray-500">{desc}</p>
    </div>
  );
};

export default ServicesItem;
