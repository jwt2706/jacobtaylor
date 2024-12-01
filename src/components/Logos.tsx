import React, { useEffect } from "react";
import { FaGithub, FaEnvelope, FaKey } from "react-icons/fa";
import { SiHuggingface, SiDevpost } from "react-icons/si";
import gsap from "gsap";

const Logos: React.FC = () => {
    useEffect(() => {
        const icons = document.querySelectorAll(".icon");

        icons.forEach((icon) => {
            icon.addEventListener("mouseenter", () => {
                gsap.to(icon, { rotationZ: 360, duration: 0.6, ease: "power1.out" });
            });

            icon.addEventListener("mouseleave", () => {
                gsap.to(icon, { rotationZ: 360, duration: 0.6, ease: "power1.out" });
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
        <div className="flex justify-center gap-8 mb-16">
            <a href="https://github.com/jwt2706" target="_blank" rel="noopener noreferrer" className="icon text-4xl text-gray-800">
                <FaGithub />
            </a>
            <a href="https://huggingface.co/jwt2706" target="_blank" rel="noopener noreferrer" className="icon text-4xl text-gray-800">
                <SiHuggingface />
            </a>
            <a href="https://devpost.com/jwt2706" target="_blank" rel="noopener noreferrer" className="icon text-4xl text-gray-800">
                <SiDevpost />
            </a>
            <a href="mailto:jwt2706@example.com" className="icon text-4xl text-gray-800">
                <FaEnvelope />
            </a>
            <a href="https://example.com/gpg-key" target="_blank" rel="noopener noreferrer" className="icon text-4xl text-gray-800">
                <FaKey />
            </a>
        </div>
    );
};

export default Logos;