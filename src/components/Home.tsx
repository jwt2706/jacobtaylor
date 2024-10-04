import React, { useState } from "react";
import Banner from "./Banner";
import Vortex from "./Vortex";
import Carousel from "./Carousel";
import FloatingDock from './Dock';
import { FaGithub, FaEnvelope } from "react-icons/fa";
import { SiGnuprivacyguard, SiHuggingface } from "react-icons/si";
import "../assets/styles/app.scss";
import "../assets/styles/tailwind.css";

interface Project {
  title: string;
  description: string;
  link: string;
  github: string;
}

const projects: Project[] = [
  {
    title: "Project 1",
    description: "Description for project 1",
    link: "https://example.com/project1",
    github: "https://github.com/jwt2706/project1",
  },
  {
    title: "Project 2",
    description: "Description for project 2",
    link: "https://example.com/project2",
    github: "https://github.com/jwt2706/project2",
  },
  {
    title: "Project 3",
    description: "Description for project 3",
    link: "https://example.com/project3",
    github: "https://github.com/jwt2706/project3",
  },
  {
    title: "Project 4",
    description: "Description for project 4",
    link: "https://example.com/project4",
    github: "https://github.com/jwt2706/project4",
  },
  {
    title: "Project 5",
    description: "Description for project 5",
    link: "https://example.com/project5",
    github: "https://github.com/jwt2706/project5",
  },
  {
    title: "Project 6",
    description: "Description for project 6",
    link: "https://example.com/project6",
    github: "https://github.com/jwt2706/project6",
  },
  {
    title: "Project 7",
    description: "Description for project 7",
    link: "https://example.com/project7",
    github: "https://github.com/jwt2706/project7",
  },
  {
    title: "Project 8",
    description: "Description for project 8",
    link: "https://example.com/project8",
    github: "https://github.com/jwt2706/project8",
  },
  {
    title: "Project 9",
    description: "Description for project 9",
    link: "https://example.com/project9",
    github: "https://github.com/jwt2706/project9",
  },
  {
    title: "Project 10",
    description: "Description for project 10",
    link: "https://example.com/project10",
    github: "https://github.com/jwt2706/project10",
  },
];

const dockitems = [
  {
    title: "Email Me!",
    icon: <FaEnvelope size={20} />,
    href: "mailto:hey@jwt2706.ca"
  },
  {
    title: "Checkout my projects on Github!",
    icon: <FaGithub size={20} />,
    href: "https://github.com/jwt2706"
  },
  {
    title: "Checkout my models on Hugging Face!",
    icon: <SiHuggingface size={20} />,
    href: "https://huggingface.co/jwt2706"
  },
  {
    title: "Download my public GPG key!",
    icon: <SiGnuprivacyguard size={20} />,
    href: "https://jwt2706.github.io/jwt2706_public.key"
  }
]


const Home: React.FC = () => {
  const [isEnglish, setIsEnglish] = useState(true);

  const toggleLanguage = () => {
    setIsEnglish(!isEnglish);
  };

  return (
    <div className="animate-fade-in flex flex-col text-white min-h-screen relative">
      <main className="flex-grow">
        <div className="fixed top-0 left-0 m-7 text-xl z-10">
          <button onClick={toggleLanguage} className="text-white">
            <span className={isEnglish ? "underline underline-offset-4" : ""}>En</span>
            <span className="mx-1">/</span>
            <span className={!isEnglish ? "underline underline-offset-4" : ""}>Fr</span>
          </button>
        </div>
        <div className="fixed mt-7 mx-auto w-full">
          <Banner isEnglish={isEnglish} />
        </div>
        <div className="mt-10">
          <Carousel projects={projects}/>
        </div>
      </main>
      <div className="fixed bottom-7 left-1/2 transform md:left-1/2 md:transform md:-translate-x-1/2 md:bottom-7 left-7">
        <FloatingDock items={dockitems} />
      </div>
      <Vortex particleCount={400} baseSpeed={0.0} rangeSpeed={0.5} baseRadius={1.8} rangeRadius={2.5} rangeY={200} baseHue={180}/>
    </div>
  );
}

export default Home;
