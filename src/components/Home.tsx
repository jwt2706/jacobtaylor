import React from "react";
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
  return (
    <div className="animate-fade-in flex flex-col text-white">
        <main>
            <Banner />
        </main>
        <FloatingDock items={dockitems} />        
        <Vortex particleCount={400} baseSpeed={0.0} rangeSpeed={0.1} baseRadius={1.8} rangeRadius={2.5} rangeY={500} baseHue={180}/>
    </div>
  );
}

export default Home;
