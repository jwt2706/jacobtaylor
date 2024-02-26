import React, { useState, useEffect } from "react";
import "../assets/styles/terminal.scss";

const commands = [
  "Hey!",
  "Try to drag me around",
  "Check out my projects",
  "And my github",
  "Send me mail!",
  // Add more commands here
];

function Terminal() {
  const [isOpen, setIsOpen] = useState(true);
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0);
  const [currentCommand, setCurrentCommand] = useState("");

  useEffect(() => {
    let commandInterval;
    let typingInterval;

    typingInterval = setInterval(() => {
      if (currentCommand.length < commands[currentCommandIndex].length) {
        setCurrentCommand(
          commands[currentCommandIndex].substr(0, currentCommand.length + 1)
        );
      } else {
        clearInterval(typingInterval);

        commandInterval = setInterval(() => {
          setCurrentCommandIndex((prevIndex) => {
            const newIndex = prevIndex + 1;
            if (newIndex < commands.length) {
              setCurrentCommand("");
              return newIndex;
            } else {
              clearInterval(commandInterval);
              return prevIndex;
            }
          });
        }, 1000);
      }
    }, 100);

    return () => {
      clearInterval(typingInterval);
      clearInterval(commandInterval);
    }; // Clean up on unmount
  }, [currentCommand, currentCommandIndex]);

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="terminal">
      <button onClick={handleClose} className="close-button">
        x
      </button>
      <div className="input">
        <span className="prompt">root@jwt2706.ca:~$ </span>
        <span className="command">
          {currentCommand.length < commands[currentCommandIndex].length
            ? currentCommand + "_"
            : currentCommand}
        </span>
      </div>
    </div>
  );
}

export default Terminal;
