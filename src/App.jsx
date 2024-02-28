import React, { useState } from "react";
import Galaxy from "./components/Galaxy";
import Terminal from "./components/Terminal";
import Draggable from "./components/Draggable";
import ProjectCard from "./components/ProjectCard";

import { LinksCard } from "./components/LinksCard";

import AnimatedCursor from "react-animated-cursor";
import favicon from "./assets/icons/planet-512.png";
import image1 from "./assets/images/a.jpg";
import "./assets/styles/app.scss";
import "./assets/styles/tailwind.css";

function App() {
  const [terminals, setTerminals] = useState([]);
  const createTerminal = () => {
    console.log(window.innerHeight, window.innerWidth);
    const top = Math.random() * window.innerHeight;
    const left = Math.random() * window.innerWidth;

    setTerminals((prevTerminals) => [
      ...prevTerminals,
      <Draggable key={prevTerminals.length} initialPos={{ x: left, y: top }}>
        <Terminal />
      </Draggable>,
    ]);
  };

  return (
    <div className="app flex flex-col min-h-screen text-white">
      <main className="scrollable flex-grow overflow-y-auto">
        <AnimatedCursor
          innerSize={20}
          outerSize={16}
          color="265, 265, 265"
          outerAlpha={0.2}
          innerScale={0.7}
          outerScale={5}
          clickables={[
            "a",
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            "label[for]",
            "select",
            "textarea",
            "button",
            ".link",
            {
              target: ".custom",
              options: {
                innerSize: 12,
                outerSize: 12,
                color: "255, 255, 255",
                outerAlpha: 0.3,
                innerScale: 0.7,
                outerScale: 5,
              },
            },
          ]}
        />
        <div>
          <div
            className="logo flex justify-center items-center"
            alt="favicon logo"
          >
            <img
              src={favicon}
              className="w-24 h-24 rounded-full shadow-lg"
              alt="favicon logo"
            />
          </div>
          <br></br>
          <h1>
            <span className="underline-animation">Hey, I'm Jacob</span>
          </h1>
          <br></br>
          <p>
            <code className="text-highlight">I write code.</code>
          </p>
          <div className="block terminal-button">
            <button
              onClick={createTerminal}
              className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            >
              Open terminal ({terminals.length})
            </button>
          </div>
        </div>
        <div>{terminals}</div>
        <LinksCard />
        <div className="projects grid">
          <h2 className="projects-title underline-animation">Things I Built</h2>
          <ProjectCard
            title="Project 1"
            description="This is a description of Project 1."
            imageUrl={image1}
          />
          <ProjectCard
            title="Project 2"
            description="This is a description of Project 2."
            imageUrl={image1}
          />
          {/* Add more ProjectCards as needed */}
        </div>
      </main>
      <footer className="text-highlight">
        <code>Made with &lt;3 (c) jwt2706 {new Date().getFullYear()}</code>
      </footer>
      <Galaxy className="background" />
    </div>
  );
}

export default App;
