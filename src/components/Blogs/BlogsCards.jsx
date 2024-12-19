// src/components/BlogCard.jsx
import React from "react";

const BlogCard = ({ image, date, category, title, description, author }) => {
  return (
    <div className="flex rounded-lg overflow-hidden shadow-lg bg-white">
      <div className="w-1/3">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="w-2/3 p-4">
        <div className="text-sm text-gray-500">{date}</div>
        <div className="text-xs text-yellow-600 font-bold">{category}</div>
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-gray-700">{description}</p>
        <div className="flex items-center mt-4">
          <img
            src={author.image}
            alt={author.name}
            className="w-8 h-8 rounded-full mr-2"
          />
          <span className="text-sm text-gray-600">by {author.name}</span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
