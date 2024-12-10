import React, { useEffect, useRef } from "react";
import "../assets/styles/tailwind.css";
import ProjectFetcher from "./ProjectFetcher";
import Title from "./Title";
import Logos from "./Logos";
import Intro from "./Intro";
import Footer from "./Footer";
import Background from "./Background";
import gsap from "gsap";

const Home: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const elements = containerRef.current.querySelectorAll("h2, p, h3, hr, div:not(.overlay)");
      gsap.fromTo(elements,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.1, ease: "power4.out" }
      );
    }

    if (overlayRef.current) {
      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 1,
        ease: "power1.out",
        onComplete: () => {
          if (overlayRef.current) {
            overlayRef.current.style.display = "none";
          }
        }
      });
    }
  }, []);

  return (
    <div className="relative min-h-screen bg-gray-800 flex flex-col items-center overflow-x-hidden" ref={containerRef}>
      <Background />
      <div ref={overlayRef} className="overlay absolute inset-0 bg-black flex items-center justify-center z-50">
        <p className="text-white text-2xl">Loading...</p>
      </div>
      <div className="w-full text-black text-green-500 max-w-2xl px-4 z-10">
        <Title />
        <Logos />
        <hr className="my-8 border-t-2 border-green-500 w-full" />
        <Intro />
        <hr className="my-8 border-t-2 border-green-500 w-full" />
        <div className="font-bold mb-8 text-center">
          <h2 className="text-2xl">Here are a few of my projects:</h2>
          <div className="text-sm flex items-center justify-center space-x-2">
            <p className="animate-bounce">↓</p>
            <p>scroll down</p>
            <p className="animate-bounce">↓</p>
          </div>
        </div>
        <ProjectFetcher />
        <Footer />
      </div>
    </div>
  );
};

export default Home;