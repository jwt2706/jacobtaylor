import React from "react";
import Galaxy from "./components/Galaxy";
import Sidebar from "./components/Sidebar";
import AnimatedCursor from "react-animated-cursor";
import favicon from "./assets/icons/planet-512.png";
import { LinksCard } from "./components/LinksCard";
import "./assets/styles/app.scss";
import "./assets/styles/tailwind.css";

function App() {
  return (
    <div className="app flex flex-col min-h-screen text-white">
      <Sidebar />
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
          <div className="flex justify-center items-center" alt="favicon logo">
            <img
              src={favicon}
              className="favicon w-24 h-24 rounded-full shadow-lg"
              alt="favicon logo"
            />
          </div>
          <br></br>
          <h1>
            <span className="text-4xl underline-animation">Hey, I'm Jacob</span>
          </h1>
          <br></br>

          <code className="text-gray-400">Software engineering undergrad.</code>
        </div>
        <LinksCard />
      </main>
      <footer>
        <code>Coded with care. (c) jwt2706 {new Date().getFullYear()}</code>
      </footer>
      <Galaxy className="background" />
    </div>
  );
}

export default App;
