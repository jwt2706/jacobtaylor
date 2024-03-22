import React from "react";
import Galaxy from "./Galaxy";
import Sidebar from "./Sidebar";
import favicon from "../assets/icons/planet-512.png";
import AnimatedCursor from "react-animated-cursor";
import { LinksCard } from "./LinksCard";
import { motion } from "framer-motion";
import { LuCopyright } from "react-icons/lu";
import "../assets/styles/app.scss";
import "../assets/styles/tailwind.css";

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
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
            <div
              className="flex justify-center items-center"
              alt="favicon logo"
            >
              <img
                src={favicon}
                className="favicon w-24 h-24 rounded-full shadow-lg"
                alt="favicon logo"
              />
            </div>
            <br></br>
            <h1>
              <span className="text-4xl underline-animation">
                Hey, I'm Jacob
              </span>
            </h1>
            <br></br>

            <code className="text-gray-400">
              Software engineering undergrad.
            </code>
          </div>
          <LinksCard />
        </main>
        <footer>
          <code>
            Coded with care. <LuCopyright style={{ display: "inline" }} />{" "}
            jwt2706 {new Date().getFullYear()}
          </code>
        </footer>
        <Galaxy className="background" />
      </div>
    </motion.div>
  );
}

export default Home;
