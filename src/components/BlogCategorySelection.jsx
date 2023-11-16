const BlogCategorySelection = ({ onSelectCategory, activeCategory }) => {
  const categories = ["Startups", "AI", "Security", "Apps"];
  return (
    <div className="my-4 py-3 text-lg  border-b-2">
      <button
        className={`hover:text-blue-500 ${activeCategory ?? "text-blue-500"}`}
        onClick={() => onSelectCategory(null)}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          className={`mx-3 text-lg hover:text-blue-500 ${
            activeCategory === category && "text-blue-500"
          }`}
          key={category}
          onClick={() => onSelectCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default BlogCategorySelection;
