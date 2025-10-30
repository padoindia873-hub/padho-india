import React, { useEffect, useState } from "react";
import images from "./images.js";

const ImageSlidingAsset = () => {
  const [next, setNext] = useState(0);

  const handleNext = () => {
    setNext((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handlePre = () => {
    setNext((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  useEffect(() => {
    const slider = setInterval(handleNext, 3000);
    return () => clearInterval(slider);
  }, [next]);

  return (
    <div className="w-full flex flex-col justify-center items-center py-8 px-4">
      <div className="relative w-full max-w-3xl flex justify-center items-center">
        
        {/* Prev Button */}
        <button
          onClick={handlePre}
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white px-3 py-1 rounded-full transition-all"
        >
          {"<"}
        </button>

        {/* Image */}
        <img
          src={images[next].src}
          alt={`gallery-${next}`}
          className="rounded-lg shadow-xl w-full max-h-[400px] object-cover transition-all duration-700 ease-in-out"
        />

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white px-3 py-1 rounded-full transition-all"
        >
          {">"}
        </button>
      </div>

      {/* Bottom Dots */}
      <div className="flex space-x-2 mt-5">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setNext(index)}
            className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 ${
              next === index ? "bg-blue-600 scale-110" : "bg-gray-300"
            }`}
          />
        ))}
      </div>

      <h3 className="font-bold text-lg md:text-xl mt-6 text-center">
        Add Gallery
      </h3>
    </div>
  );
};

export default ImageSlidingAsset;
