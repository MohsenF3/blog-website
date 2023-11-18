const BlogPagination = ({ blogs, currentPage, pageSize, onPageChange }) => {
  //
  let totalPages = Math.ceil(blogs.length / pageSize);

  // create a function that return 1 to totlaPages
  const renderPaginationLinks = () =>
    Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
      <button
        className={`mx-1 w-8 h-8 rounded-md hover:bg-gray-600 ${
          currentPage === number ? "bg-blue-500 text-white" : "bg-gray-400 "
        }`}
        key={number}
        onClick={() => onPageChange(number)}
      >
        {number}
      </button>
    ));

  const renderPaginationLink = () =>
    Array.from({ length: 4 }, (_, i) => i + 1).map((number) => (
      <button
        className={`mx-1 w-8 h-8 rounded-md hover:bg-gray-600 ${
          currentPage === number ? "bg-blue-500 text-white" : "bg-gray-400 "
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

      {/*  */}

      <div>
        <div className="lg:hidden">
          {renderPaginationLink()}
          {/* This component will be visible on screens smaller than lg (large) */}
        </div>
        <div className="hidden lg:block">
          {/* This component will be visible on lg (large) screens and above */}
          {renderPaginationLinks()}
        </div>
      </div>

      {/*  */}
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
