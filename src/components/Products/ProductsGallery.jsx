import React, { useState } from "react";
import { Dialog, DialogBody } from "@material-tailwind/react";

const ProductsGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="flex flex-col gap-3 sm:gap-4">
      {/* Main Image Container */}
      <div className="relative w-full max-w-3xl mx-auto">
        <div
          className="w-full aspect-square sm:aspect-[4/3] lg:aspect-[16/9] xl:aspect-[2/1] rounded-lg cursor-zoom-in overflow-hidden"
          onClick={handleOpen}
        >
          <img
            src={images?.[selectedImage]}
            alt="Selected product"
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
          />
        </div>

        {/* Navigation Arrows */}
        <div className="absolute inset-0 flex items-center justify-between p-2 sm:p-3 opacity-0 hover:opacity-100 transition-opacity">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage((prev) =>
                prev > 0 ? prev - 1 : images.length - 1
              );
            }}
            className="bg-black/50 hover:bg-black/70 text-white p-2 sm:p-3 lg:p-4 rounded-full transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4 sm:w-5 sm:h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage((prev) =>
                prev < images.length - 1 ? prev + 1 : 0
              );
            }}
            className="bg-black/50 hover:bg-black/70 text-white p-2 sm:p-3 lg:p-4 rounded-full transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4 sm:w-5 sm:h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Thumbnails Row */}
      <div className="relative w-full max-w-3xl mx-auto">
        <div className="flex overflow-x-auto gap-2 pb-2 hide-scrollbar">
          {images?.map((image, index) => (
            <div
              key={index}
              className={`flex-none w-[60px] sm:w-[80px] aspect-square rounded-lg cursor-pointer border-2 transition-all duration-300 ${
                selectedImage === index
                  ? "border-[#f4511e] shadow-md scale-95"
                  : "border-transparent hover:border-gray-300 hover:scale-95"
              }`}
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Dialog */}
      <Dialog
        size="xl"
        open={isOpen}
        handler={handleOpen}
        className="bg-transparent shadow-none max-w-[90vw] max-h-[90vh]"
      >
        <DialogBody className="p-0 relative">
          <button
            onClick={handleOpen}
            className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white p-2 sm:p-3 lg:p-4 rounded-full transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <img
            src={images?.[selectedImage]}
            alt="Product full view"
            className="w-full h-auto max-h-[90vh] object-contain"
          />
        </DialogBody>
      </Dialog>
    </div>
  );
};

export default ProductsGallery;
