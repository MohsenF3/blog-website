const BlogCategorySelection = ({ onCategoryChange, activeCategory }) => {
  const categories = ["Startups", "AI", "Security", "Apps", "Tech"];
  return (
    <div className="my-4 py-3 text-lg  border-b-2 pl-10  flex-wrap">
      <button
        className={`hover:text-blue-500 ${activeCategory ?? "text-blue-500"}`}
        onClick={() => onCategoryChange(null)}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          className={`mx-7 text-lg  hover:text-blue-500 font-medium ${
            activeCategory === category && "text-blue-500"
          } `}
          key={category}
          onClick={() => onCategoryChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default BlogCategorySelection;
