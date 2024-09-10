import React, { useState } from "react";
import Banner from "./Banner";
import Vortex from "./Vortex";
import FloatingDock from './Dock';
import { FaGithub, FaEnvelope } from "react-icons/fa";
import { SiGnuprivacyguard, SiHuggingface } from "react-icons/si";
import "../assets/styles/app.scss";
import "../assets/styles/tailwind.css";

const dockitems = [
  {
    title: "Email Me!",
    icon: <FaEnvelope size={20} />,
    href: "mailto:hey@jwt2706.ca"
  },
  {
    title: "Checkout my open-source projects!",
    icon: <FaGithub size={20} />,
    href: "https://github.com/jwt2706"
  },
  {
    title: "Checkout my open-source AI models!",
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
        <div className="absolute top-0 left-0 m-7 text-xl">
          <button onClick={toggleLanguage} className="text-white">
            <span className={isEnglish ? "underline underline-offset-4" : ""}>En</span>/
            <span className={!isEnglish ? "underline underline-offset-4" : ""}>Fr</span>
          </button>
        </div>
        <div className="mt-7">
          <Banner isEnglish={isEnglish} />
        </div>
      </main>
      <div className="absolute bottom-7 left-1/2 transform md:left-1/2 md:transform md:-translate-x-1/2 md:bottom-7 left-7">
        <FloatingDock items={dockitems} />
      </div>
      <Vortex particleCount={400} baseSpeed={0.0} rangeSpeed={0.7} baseRadius={1.8} rangeRadius={2.5} rangeY={500} baseHue={180}/>
    </div>
  );
}

export default Home;
