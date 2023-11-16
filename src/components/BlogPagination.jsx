const BlogPagination = ({ blogs, currentPage, pageSize, onPageChange }) => {
  //
  let totalPages = Math.ceil(blogs.length / pageSize);

  // create a function that return 1 to totlaPages
  const renderPaginationLinks = () =>
    Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
      <button
        className={`mx-1 w-8 h-8 bg-gray-400 rounded-md hover:bg-gray-600 ${
          currentPage === number && "bg-blue-500 text-white"
        }`}
        key={number}
        onClick={() => onPageChange(number)}
      >
        {number}
      </button>
    ));

  return (
    <div className="flex items-center justify-center my-10 gap-5">
      <div>
        <button
          className=" hover:text-blue-500 disabled:text-gray-400"
          disabled={currentPage === 1}
        >
          Previous
        </button>
      </div>
      <div>{renderPaginationLinks()}</div>
      <div>
        <button
          className=" hover:text-blue-500 disabled:text-gray-400"
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default BlogPagination;
