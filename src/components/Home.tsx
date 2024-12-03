import React from "react";
import "../assets/styles/tailwind.css";
import ProjectFetcher from "./ProjectFetcher";
import Title from "./Title";
import Logos from "./Logos";
import Intro from "./Intro";
import Footer from "./Footer";
import Background from "./Background";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <Background />
      <div className="w-full max-w-2xl px-4">
        <Title />
        <Logos />
        <hr className="my-8 border-t-2 border-black w-full" />
        <Intro />
        <hr className="my-8 border-t-2 border-black w-full" />
        <h2 className="text-2xl font-bold mb-8 text-center">A few of my projects</h2>
        <ProjectFetcher />
        <Footer />
      </div>
    </div>
  );
};

export default Home;