const BlogPagination = ({ blogs, currentPage, onPageChange, pageSize }) => {
  //
  const totalPages = Math.ceil(blogs.length / pageSize);

  const renderpaginationLinks = () =>
    Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
      <li
        className={` w-8  text-black h-8 grid place-items-center hover:bg-gray-400 border-2 ${
          number === currentPage ? "bg-blue-400 text-white" : ""
        }`}
        key={number}
      >
        <a href="#" onClick={() => onPageChange(number)}>
          {number}
        </a>
      </li>
    ));

  return (
    <ul className="flex items-center justify-center my-10 gap-6">
      <li>
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className=" hover:text-blue-500 disabled:text-gray-400"
        >
          Previous
        </button>
      </li>
      <div className="flex gap-4">{renderpaginationLinks()}</div>
      <li>
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className=" hover:text-blue-500 disabled:text-gray-400"
        >
          Next
        </button>
      </li>
    </ul>
  );
};

export default BlogPagination;
