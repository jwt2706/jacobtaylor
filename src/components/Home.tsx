import React from "react";
import "../assets/styles/tailwind.css";
import ProjectFetcher from "./ProjectFetcher";
import Logos from "./Logos";
import Title from "./Title";

const Home: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-sky-500 to-sky-700 min-h-screen flex flex-col items-center">
      <Title />
      <Logos />
      <h2 className="text-2xl font-bold mb-4">A few of my projects</h2>
      <ProjectFetcher />
    </div>
  );
};

export default Home;