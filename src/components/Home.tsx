import React, { useState } from "react";
import Banner from "./Banner";
import FloatingDock from './Dock';
import World from './World';
import { FaGithub, FaEnvelope } from "react-icons/fa";
import { SiGnuprivacyguard, SiHuggingface } from "react-icons/si";
import "../styles/app.scss";
import "../styles/tailwind.css";

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
	</main>
	<div className="fixed bottom-7 left-1/2 transform md:left-1/2 md:transform md:-translate-x-1/2 md:bottom-7 left-7">
		<FloatingDock items={dockitems} />
	</div>
	<div className="z-[-1]" style={{ height: '100vh' }}>
		<World />
	</div>
	</div>
);
}

export default Home;
