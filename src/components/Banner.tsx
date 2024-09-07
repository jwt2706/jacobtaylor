import React from "react";

const Banner = () => {
  return (
    <div className="banner-container bg-black bg-opacity-60 border border-white rounded-lg p-10 inline-block">
      <h1 className="text-4xl font-bold mb-2 underline-animation">
        {"Hey, I'm Jwt2706"}
      </h1>
      <code className="text-gray-200 text-lg">
        I'm an open source enjoyer.
      </code>
    </div>
  );
};

export default Banner;