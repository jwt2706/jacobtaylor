import React, { useEffect } from "react";
import gsap from "gsap";

const Title: React.FC = () => {
    useEffect(() => {
        const letters = document.querySelectorAll(".animated-letter");

        letters.forEach((letter) => {
            letter.addEventListener("mouseenter", () => {
                gsap.to(letter, { y: -10, duration: 0.3, ease: "bounce.out" });
            });

            letter.addEventListener("mouseleave", () => {
                gsap.to(letter, { y: 0, duration: 0.3, ease: "bounce.out" });
            });
        });

        return () => {
            letters.forEach((letter) => {
                letter.removeEventListener("mouseenter", () => { });
                letter.removeEventListener("mouseleave", () => { });
            });
        };
    }, []);

    return (
        <h1 className="text-8xl font-bold my-8">
            {Array.from("jwt2706.ca").map((char, index) => (
                <span key={index} className="animated-letter inline-block">
                    {char}
                </span>
            ))}
        </h1>
    );
};

export default Title;