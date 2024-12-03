import React, { useEffect } from "react";
import { FaGithub, FaEnvelope } from "react-icons/fa";
import { SiHuggingface, SiDevpost, SiItchdotio, SiGnuprivacyguard } from "react-icons/si";
import gsap from "gsap";

const Logos: React.FC = () => {
    useEffect(() => {
        const icons = document.querySelectorAll(".icon");

        icons.forEach((icon) => {
            icon.addEventListener("mouseenter", () => {
                gsap.to(icon, { y: -10, duration: 0.3, ease: "bounce.out" });
            });

            icon.addEventListener("mouseleave", () => {
                gsap.to(icon, { y: 0, duration: 0.3, ease: "bounce.out" });
            });
        });

        return () => {
            icons.forEach((icon) => {
                icon.removeEventListener("mouseenter", () => { });
                icon.removeEventListener("mouseleave", () => { });
            });
        };
    }, []);

    return (
        <div className="flex justify-center gap-8 text-4xl text-black">
            <div className="flex flex-col items-center">
                <a href="https://github.com/jwt2706" target="_blank" rel="noopener noreferrer" className="icon">
                    <FaGithub />
                </a>
                <span className="text-sm mt-2">GitHub</span>
            </div>
            <div className="flex flex-col items-center">
                <a href="https://huggingface.co/jwt2706" target="_blank" rel="noopener noreferrer" className="icon">
                    <SiHuggingface />
                </a>
                <span className="text-sm mt-2">HuggingFace</span>
            </div>
            <div className="flex flex-col items-center">
                <a href="https://jwt2706.itch.io" target="_blank" rel="noopener noreferrer" className="icon">
                    <SiItchdotio />
                </a>
                <span className="text-sm mt-2">Itch.io</span>
            </div>
            <div className="flex flex-col items-center">
                <a href="https://devpost.com/jwt2706" target="_blank" rel="noopener noreferrer" className="icon">
                    <SiDevpost />
                </a>
                <span className="text-sm mt-2">Devpost</span>
            </div>
            <div className="flex flex-col items-center">
                <a href="mailto:hey@jwt2706.ca" className="icon">
                    <FaEnvelope />
                </a>
                <span className="text-sm mt-2">Email</span>
            </div>
            <div className="flex flex-col items-center">
                <a href="https://jwt2706.github.io/jwt2706_public.key" target="_blank" rel="noopener noreferrer" className="icon">
                    <SiGnuprivacyguard />
                </a>
                <span className="text-sm mt-2">GPG Key</span>
            </div>
        </div>
    );
};

export default Logos;