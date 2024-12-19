// src/pages/Blogs.jsx
import React, { useState, useEffect } from "react";
import BreadcrumbsWithIcon from "@/components/BreadcrumbsWithIcon";
import Footer from "@/components/Footer";
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
    console.log(loadBlogs);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <div className="p-4">
        <BreadcrumbsWithIcon />
      </div>
      <div className="w-full min-h-screen px-[15px]">
        <h1 className="text-5xl font-bold font-roboto text-center pt-[24px] pb-[84px] animate-fade-up">
          Tin tức
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <BlogCard
              key={blog.id}
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
