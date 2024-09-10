import React from "react";

const Banner = ({ isEnglish }: { isEnglish: boolean }) => {
  return (
    <div className="banner-container bg-sky-950 bg-opacity-40 rounded-lg p-10 inline-block">
      <h1 className="text-4xl font-bold mb-2 underline-animation">
        {isEnglish ? "Hey, I'm Jwt2706" : "Salut, je suis Jwt2706"}
      </h1>
      <code className="text-gray-200 text-lg">
        {isEnglish ? "I'm an open source enjoyer." : "Je suis un amateur de l'open source."}
      </code>
    </div>
  );
};

export default Banner;