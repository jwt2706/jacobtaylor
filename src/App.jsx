import React, { useState } from "react";
import Galaxy from "./components/Galaxy";
import Terminal from "./components/Terminal";
import Draggable from "./components/Draggable";
import ProjectCard from "./components/ProjectCard";
import AnimatedCursor from "react-animated-cursor";
import favicon from "./assets/icons/planet-512.png";
import image1 from "./assets/images/a.jpg";
import "./assets/styles/app.scss";

function App() {
  const [showTerminal, setShowTerminal] = useState(false);

  const createTerminal = () => {
    setShowTerminal(true); // Show the Terminal when the button is clicked
  };

  return (
    <div className="app">
      <main className="scrollable">
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
          <img src={favicon} className="logo" alt="favicon logo" />
        </div>
        <h1>
          <span className="underline-animation">Hey, I'm Jacob</span>
        </h1>
        <p>
          <code className="text-highlight">I write code.</code>
        </p>
        <div className="block">
          <button onClick={createTerminal}>Open terminal</button>
        </div>
        <p className="scroll-prompt">
          <span className="down-arrows">↓</span> Checkout my stuff!
          <span className="down-arrows"> ↓</span>
        </p>
        {showTerminal && ( // Only render the Terminal if showTerminal is true
          <Draggable>
            <Terminal />
          </Draggable>
        )}
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
