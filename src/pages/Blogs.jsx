// src/pages/Blogs.jsx
import React, { useState, useEffect } from "react";
import BreadcrumbsWithIcon from "@/components/BreadcrumbsWithIcon";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import WorkWithUs from "@/components/WorkWithUs";
import BlogCard from "@/components/Blogs/BlogsCards";
import { fetchBlogs } from "@/apis/blogsApi";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadBlogs = async () => {
      setLoading(true);
      const { data, error } = await fetchBlogs();
      setBlogs(data || []);
      setError(error);
      setLoading(false);
    };

    loadBlogs();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <>
      <Header />
      <div className="p-4">
        <BreadcrumbsWithIcon />
      </div>
      <div className="w-full min-h-screen px-4 sm:px-6 lg:px-8 mb-10">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-roboto text-center pt-4 sm:pt-6 sm:pb-12 lg:pb-16 animate-fade-up">
          Tin tức
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mx-auto max-w-7xl">
          {blogs.map((blog) => (
            <BlogCard
              key={blog.id}
              id={blog.id}
              image={blog.image}
              date={new Date(blog.date).toLocaleDateString()}
              category={blog.category}
              title={blog.title}
              description={blog.description}
              author={{ name: blog.author_name, image: blog.author_image }}
            />
          ))}
        </div>
      </div>
      <WorkWithUs />
      <Footer />
    </>
  );
};

export default Blogs;
