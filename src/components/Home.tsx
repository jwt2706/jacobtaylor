import React, { useState } from "react";
import Vortex from "./Vortex";
import FloatingDock from './Dock';
import { IoPlanet } from "react-icons/io5";
import { FaGithub, FaEnvelope } from "react-icons/fa";
import { SiGnuprivacyguard } from "react-icons/si";
import { SiHuggingface } from "react-icons/si";
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
  const isTouchDevice = useState<boolean>('ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.maxTouchPoints > 0);

  return (
    <div className="animate-fade-in">
      <div className="app flex flex-col min-h-screen text-white">
        <main className="scrollable flex-grow overflow-y-auto">
 
          <div>
            <br />
            <div className="mx-auto inline-block p-4">
              <div className="transition-transform duration-500 ease-in-out hover:scale-130">
                <IoPlanet size={110} color="black" />
              </div>
            </div>
            <br />
            <h1>
              <span className="text-4xl underline-animation">
                {"Hey, I'm Jwt2706"}
              </span>
            </h1>
            <br />
            <code className="text-gray-400">
              I'm an open source enjoyer.
              <br />
              Check out some of my projects on the sidebar!
            </code>
          </div>
          <div className="flex items-center justify-center h-[35rem] w-full">
            <FloatingDock items={dockitems} />
          </div>
        </main>
        <Vortex particleCount={400} baseSpeed={0.0} rangeSpeed={0.1} baseRadius={1.8} rangeRadius={2.5} rangeY={500} baseHue={180}/>
      </div>
    </div>
  );
}

export default Home;
