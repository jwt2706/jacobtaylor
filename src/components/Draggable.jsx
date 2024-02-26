import React, { useState, useEffect } from "react";

function Draggable({ children, initialPos }) {
  const [pos, setPos] = useState({
    x: initialPos ? initialPos.x : window.innerWidth / 2,
    y: initialPos ? initialPos.y : window.innerHeight / 2,
  });
  const [dragging, setDragging] = useState(false);
  const [rel, setRel] = useState(null); // position relative to the cursor

  const onMouseDown = (e) => {
    if (e.button !== 0) return; // only left mouse button
    var posX = e.pageX - pos.x;
    var posY = e.pageY - pos.y;
    setDragging(true);
    setRel({ x: posX, y: posY });
    e.stopPropagation();
    e.preventDefault();
  };

  const onMouseUp = (e) => {
    setDragging(false);
    e.stopPropagation();
    e.preventDefault();
  };

  const onMouseMove = (e) => {
    if (!dragging) return;
    setPos({
      x: e.pageX - rel.x,
      y: e.pageY - rel.y,
    });
    e.stopPropagation();
    e.preventDefault();
  };

  useEffect(() => {
    setPos({
      x: initialPos ? initialPos.x : window.innerWidth / 2,
      y: initialPos ? initialPos.y : window.innerHeight / 2,
    });
  }, [initialPos]);

  return (
    <div
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
      style={{ position: "absolute", left: pos.x, top: pos.y }}
    >
      {children}
    </div>
  );
}

export default Draggable;
