import { Link } from "react-router-dom";

// icons
import { FaUser } from "react-icons/fa";

const BlogCard = ({ blogs, currentPage, selectedCategory, pageSize }) => {
  const filteredBlogs = blogs
    .filter(
      ({ category }) => !selectedCategory || category === selectedCategory
    )
    .slice((currentPage - 1) * pageSize, currentPage * pageSize);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {filteredBlogs.map(({ id, image, title, author, published_date }) => (
        <Link
          key={id}
          className="px-5 py-3 shadow-md hover:shadow-lg rounded-md transition duration-150"
        >
          <div>
            <img src={image} alt="" className=" w-full object-cover" />
          </div>
          <h3 className="text-lg my-2 font-bold hover:text-blue-500">
            {title}
          </h3>
          <span className="flex items-center gap-3 text-md text-gray-500">
            <FaUser />
            {author}
          </span>
          <span className="text-sm text-gray-500">
            published : {published_date}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default BlogCard;
