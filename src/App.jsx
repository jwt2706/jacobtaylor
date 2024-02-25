import React, { useState } from "react";
import Galaxy from "./components/Galaxy";
import Terminal from "./components/Terminal";
import Draggable from "./components/Draggable";
import favicon from "./assets/icons/planet-512.png";
import "./assets/styles/app.scss";

function App() {
  const [count, setCount] = useState(0);
  const [showTerminal, setShowTerminal] = useState(false); // Add this line

  const createTerminal = () => {
    setShowTerminal(true); // Show the Terminal when the button is clicked
  };

  return (
    <>
      <div>
        <img src={favicon} className="logo" alt="favicon logo" />
      </div>
      <h1>Hey, I'm Jacob</h1>
      <p>
        <code>I write code.</code>
      </p>
      <div className="card">
        <button onClick={createTerminal}>Open terminal</button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      {showTerminal && ( // Only render the Terminal if showTerminal is true
        <Draggable>
          <Terminal />
        </Draggable>
      )}
      <Galaxy className="background" />
    </>
  );
}

export default App;
