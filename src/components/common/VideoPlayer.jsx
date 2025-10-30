import React from "react";

const VideoPlayer = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-10 p-6">
      {/* First Video */}
      <div className="flex flex-col justify-center items-center w-full max-w-3xl">
        <h3 className="font-bold text-xl md:text-2xl mb-4 text-center">
          PADHO INDIA SCHOLARSHIP
        </h3>
        <div className="relative w-full pb-[56.25%] h-0 overflow-hidden rounded-2xl shadow-lg">
          <iframe
            src="https://www.youtube.com/embed/LBLPIdj3Z5Y"
            title="PADHO INDIA SCHOLARSHIP"
            className="absolute top-0 left-0 w-full h-full rounded-2xl"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Second Video */}
      <div className="flex flex-col justify-center items-center w-full max-w-3xl">
        <h3 className="font-bold text-xl md:text-2xl mb-4 text-center">
          PADHO INDIA SCHOLARSHIP
        </h3>
        <div className="relative w-full pb-[56.25%] h-0 overflow-hidden rounded-2xl shadow-lg">
          <iframe
            src="https://www.youtube.com/embed/n2GaqHRRUcU"
            title="PADHO INDIA SCHOLARSHIP"
            className="absolute top-0 left-0 w-full h-full rounded-2xl"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
