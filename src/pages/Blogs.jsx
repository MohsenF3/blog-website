import BlogPage from "../components/BlogPage";

const Blogs = () => {
  return (
    <div className="">
      <div className="bg-black w-screen py-24  text-white text-center px-5">
        <h1 className="text-6xl  font-bold mb-5 uppercase">
          Blog <span className=" text-orange-500">page</span>
        </h1>
      </div>
      <div className=" max-w-7xl mx-auto ">
        <BlogPage />
      </div>
    </div>
  );
};

export default Blogs;
