import React from "react";
import "../assets/styles/tailwind.css";
import ProjectFetcher from "./ProjectFetcher";
import Title from "./Title";
import Logos from "./Logos";
import Intro from "./Intro";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-r from-emerald-500 to-cyan-500">
      <div className="w-full max-w-2xl px-4">
        <Title />
        <Logos />
        <hr className="my-8 border-t-2 border-black w-full" />
        <Intro />


        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

        <h2 className="text-2xl font-bold mb-4 text-center">A few of my projects</h2>
        <ProjectFetcher />
      </div>
    </div>
  );
};

export default Home;