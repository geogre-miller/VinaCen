import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import WorkWithUs from "@/components/WorkWithUs";
import BreadcrumbsWithIcon from "@/components/BreadcrumbsWithIcon";
import { fetchBlogById } from "@/apis/blogsApi";
const BlogPost = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const loadBlogPost = async () => {
      setLoading(true);
      const { data, error } = await fetchBlogById(id);
      setBlog(data);
      setError(error);
      setLoading(false);
    };
    loadBlogPost();
  }, [id]);
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="loader"></div>
      </div>
    );
  }
  if (error || !blog) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-red-500">Error loading blog post</p>
      </div>
    );
  }
  return (
    <>
      <Header />
      <div className="p-4">
        <BreadcrumbsWithIcon />
      </div>
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        <div className="mb-6 sm:mb-8 lg:mb-12">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
            {blog.title}
          </h1>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 text-gray-600">
            <div className="flex items-center">
              <img
                src={blog.author_image}
                alt={blog.author_name}
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full mr-2"
              />
              <span className="text-sm sm:text-base">{blog.author_name}</span>
            </div>
            <div className="flex items-center gap-3 text-sm sm:text-base">
              <span>{new Date(blog.date).toLocaleDateString()}</span>
              <span className="hidden sm:inline">•</span>
              <span className="bg-gray-100 px-3 py-1 rounded-full">
                {blog.category}
              </span>
            </div>
          </div>
        </div>
        <div className="relative w-full mb-6 sm:mb-8 lg:mb-12">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-[200px] sm:h-[300px] lg:h-[400px] object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="prose prose-sm sm:prose lg:prose-lg max-w-none">
          <div
            className="prose-headings:mb-4 prose-p:mb-4 prose-img:rounded-lg prose-img:shadow-md"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </div>
        <div className="mt-8 sm:mt-12 pt-4 border-t border-gray-200">
          <h3 className="text-lg sm:text-xl font-semibold mb-4">
            Chia sẻ bài viết
          </h3>
          <div className="flex flex-wrap gap-3">
            <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base">
              <span className="font-nunito">Facebook</span>
            </button>
            <button className="inline-flex items-center px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors text-sm sm:text-base">
              <span className="font-nunito">Twitter</span>
            </button>
            <button className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm sm:text-base">
              <span className="font-nunito">WhatsApp</span>
            </button>
          </div>
        </div>
      </article>
      <div className=" py-8 sm:py-12 lg:py-16 mt-8 sm:mt-12 lg:mt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6 sm:mb-8">
            Bài viết liên quan
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* Related post cards would go here */}
          </div>
        </div>
      </div>
      <WorkWithUs />
      <Footer />
    </>
  );
};
export default BlogPost;
