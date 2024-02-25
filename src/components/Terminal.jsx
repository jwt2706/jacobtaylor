import React, { useState, useEffect } from "react";
import "../assets/styles/terminal.scss";

const commands = [
  "cd projects",
  "ls",
  "cd my-project",
  "npm start",
  // Add more commands here
];

function Terminal() {
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCommandIndex((prevIndex) => prevIndex + 1);
    }, 1000); // Change command every 1 second

    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  return (
    <div className="terminal">
      <div className="input">
        <span className="prompt">root@jwt2706.ca:~$ </span>
        <span className="command">{commands[currentCommandIndex]}</span>
      </div>
    </div>
  );
}

export default Terminal;
