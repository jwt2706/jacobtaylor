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

        const periodicAnimation = () => {
            const tl = gsap.timeline();
            icons.forEach((icon, index) => {
                tl.to(icon, { y: -10, duration: 0.3, ease: "bounce.out" }, index * 0.1)
                    .to(icon, { y: 0, duration: 0.3, ease: "bounce.out" }, index * 0.1 + 0.3);
            });
        };

        const timeoutId = setTimeout(periodicAnimation, 3250);

        return () => {
            clearTimeout(timeoutId);
            icons.forEach((icon) => {
                icon.removeEventListener("mouseenter", () => { });
                icon.removeEventListener("mouseleave", () => { });
            });
        };
    }, []);

    return (
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 sm:gap-8 text-3xl sm:text-4xl text-green-500">
            <div className="flex flex-col items-center">
                <a href="https://github.com/jwt2706" target="_blank" rel="noopener noreferrer" className="icon" aria-label="GitHub">
                    <FaGithub />
                </a>
                <span className="text-sm mt-2">GitHub</span>
            </div>
            <div className="flex flex-col items-center">
                <a href="https://huggingface.co/jwt2706" target="_blank" rel="noopener noreferrer" className="icon" aria-label="HuggingFace">
                    <SiHuggingface />
                </a>
                <span className="text-sm mt-2">HuggingFace</span>
            </div>
            <div className="flex flex-col items-center">
                <a href="https://jwt2706.itch.io" target="_blank" rel="noopener noreferrer" className="icon" aria-label="Itch.io">
                    <SiItchdotio />
                </a>
                <span className="text-sm mt-2">Itch.io</span>
            </div>
            <div className="flex flex-col items-center">
                <a href="https://devpost.com/jwt2706" target="_blank" rel="noopener noreferrer" className="icon" aria-label="Devpost">
                    <SiDevpost />
                </a>
                <span className="text-sm mt-2">Devpost</span>
            </div>
            <div className="flex flex-col items-center">
                <a href="mailto:hey@jthome.net" className="icon" aria-label="Email">
                    <FaEnvelope />
                </a>
                <span className="text-sm mt-2">Email</span>
            </div>
            <div className="flex flex-col items-center">
                <a href="https://jwt2706.github.io/jwt2706_public.key" target="_blank" rel="noopener noreferrer" className="icon" aria-label="GPG Key">
                    <SiGnuprivacyguard />
                </a>
                <span className="text-sm mt-2">GPG Key</span>
            </div>
        </div>
    );
};

export default Logos;
