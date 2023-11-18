import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// icons
import { FaArrowRight } from "react-icons/fa";

const SideBar = () => {
  const [popularBlogs, setPopularBlogs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/blogs")
      .then((response) => response.json())
      .then((data) => setPopularBlogs(data.slice(0, 15)));
  }, []);

  return (
    <div className=" flex flex-col gap-10">
      <div>
        <h1 className="text-xl font-bold mb-5">Latest Blogs</h1>
        {popularBlogs.slice(1, 5).map(({ title, id }) => (
          <div key={id} className="mb-5 border-b-2 py-2">
            <h4 className="mb-2 font-medium">{title}</h4>
            <Link
              to=""
              className=" inline-flex items-center group  gap-2   hover:text-orange-500"
            >
              Read more
              <FaArrowRight className=" group-hover:translate-x-2 transition duration-150" />
            </Link>
          </div>
        ))}
      </div>
      <div>
        <h1 className="text-xl font-bold mb-5">Popular Blogs</h1>
        {popularBlogs.slice(6, 11).map(({ title, id }) => (
          <div key={id} className="mb-5 border-b-2 py-2">
            <h4 className="mb-2 font-medium">{title}</h4>
            <Link
              to=""
              className="flex items-center group  gap-2   hover:text-orange-500"
            >
              Read more
              <FaArrowRight className=" group-hover:translate-x-2 transition duration-150" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
