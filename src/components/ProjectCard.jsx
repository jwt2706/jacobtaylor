import React, { useEffect, useRef } from "react";
import "../assets/styles/card.scss";

function ProjectCard({ title, description, imageUrl }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Here, entry.isIntersecting will be true if the element is in the viewport
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        } else {
          entry.target.classList.remove("animate");
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    // Clean up the observer when the component unmounts
    return () => observer.unobserve(cardRef.current);
  }, []);

  return (
    <div className="card" ref={cardRef}>
      <img src={imageUrl} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default ProjectCard;
