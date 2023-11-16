import { useEffect, useState } from "react";

import BlogCard from "./BlogCard";
import BlogCategorySelection from "./BlogCategorySelection";
import BlogPagination from "./BlogPagination";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);
  let pageSize = 12;

  useEffect(() => {
    async function fetchData() {
      let url = `http://localhost:5000/blogs?page=${currentPage}&limit=${pageSize}`;
      let response = await fetch(url);
      let data = await response.json();
      setBlogs(data);
    }

    fetchData();
  }, []);

  const handlePageChange = (num) => {
    setCurrentPage(num);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    setActiveCategory(category);
  };

  return (
    <div className="">
      <div>
        <BlogCategorySelection
          onCategoryChange={handleCategoryChange}
          activeCategory={activeCategory}
          selectedCategory={selectedCategory}
        />
      </div>
      <div>
        <BlogCard
          blogs={blogs}
          currentPage={currentPage}
          pageSize={pageSize}
          selectedCategory={selectedCategory}
        />
      </div>
      <div>
        <BlogPagination
          currentPage={currentPage}
          onPageChange={handlePageChange}
          pageSize={pageSize}
          blogs={blogs}
        />
      </div>
    </div>
  );
};

export default BlogPage;
