import React from "react";

export function FeaturedImageGallery({ images }) {
  // State to track the active image
  const [active, setActive] = React.useState(images[0] || "");

  return (
    <div className="flex flex-col md:flex-row gap-4 p-4 bg-gray-100">
      {/* Left side: Image gallery */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full md:w-1/2">
        {images.map((imglink, index) => (
          <img
            key={index}
            onClick={() => setActive(imglink)}
            src={imglink}
            className="h-32 w-full cursor-pointer rounded-lg object-cover"
            alt="gallery-thumbnail"
          />
        ))}
      </div>

      {/* Right side: Active image display */}
      <div className="w-full md:w-1/2">
        {active && (
          <img
            className="h-[418px] w-full max-w-full rounded-lg object-cover object-center"
            src={active}
            alt="active-gallery-image"
          />
        )}
      </div>
    </div>
  );
}

export default FeaturedImageGallery;
