import { useEffect, useState } from "react";

import BlogCard from "./BlogCard";
import BlogCategorySelection from "./BlogCategorySelection";
import BlogPagination from "./BlogPagination";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);
  const pageSize = 12;

  useEffect(() => {
    async function fetchData() {
      let url = `http://localhost:5000/blogs?page=${currentPage}&limit=${pageSize}`;
      if (selectedCategory) {
        url += `&category=${selectedCategory}`;
      }
      let response = await fetch(url);
      let data = await response.json();
      setBlogs(data);
    }
    fetchData();
  }, [currentPage, pageSize, selectedCategory]);

  const handlePageChange = (number) => setCurrentPage(number);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    setActiveCategory(category);
  };

  return (
    <div className="">
      <div>
        <BlogCategorySelection
          onSelectCategory={handleCategoryChange}
          activeCategory={activeCategory}
        />
      </div>
      <div>
        <BlogCard
          blogs={blogs}
          currentPage={currentPage}
          selectedCategory={selectedCategory}
          pageSize={pageSize}
        />
      </div>
      <div>
        <BlogPagination
          onPageChange={handlePageChange}
          blogs={blogs}
          currentPage={currentPage}
          pageSize={pageSize}
        />
      </div>
    </div>
  );
};

export default BlogPage;
