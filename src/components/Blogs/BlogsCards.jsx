// src/components/BlogCard.jsx
import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({
  id,
  image,
  date,
  category,
  title,
  description,
  author,
}) => {
  return (
    <Link to={`/blogs/${id}`} className="group h-full block">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 h-full flex flex-col">
        <div className="relative h-48 sm:h-56 lg:h-64">
          <img src={image} alt={title} className="w-full h-full object-cover" />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center text-white gap-2 sm:gap-4">
              <span>{date}</span>
              <span>{category}</span>
            </div>
          </div>
        </div>

        <div className="p-4 sm:p-6 flex flex-col flex-grow">
          <h3 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-[#f4511e] transition-colors min-h-[48px] sm:min-h-[56px] line-clamp-2">
            {title}
          </h3>
          <p className="text-gray-600 text-sm sm:text-base mb-4 min-h-[40px] sm:min-h-[48px] line-clamp-2">
            {description}
          </p>

          <div className="flex items-center mt-auto pt-4 border-t border-gray-100">
            <img
              src={author.image}
              alt={author.name}
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full mr-3"
            />
            <span className="text-gray-700 text-sm sm:text-base">
              {author.name}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
