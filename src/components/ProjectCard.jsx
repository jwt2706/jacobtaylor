import React, { useEffect, useRef } from "react";
import "../assets/styles/card.scss";

function ProjectCard({ title, description, imageUrl }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // entry.isIntersecting will be true if the element is in the viewport
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

    // clean up the observer when the component unmounts
    return () => observer.unobserve(cardRef.current);
  }, []);

  return (
    <div
      className="card relative text-white p-4 rounded-lg shadow-lg transform transition duration-500 ease-in-out hover:rotate-3 w-64 group animate-enter"
      style={{ paddingBottom: "100%" }}
      ref={cardRef}
    >
      <img
        src={imageUrl}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover rounded-lg"
      />
      <div className="absolute inset-0 p-4 flex flex-col justify-between">
        <h2 className="text-2xl font-bold transition duration-500 ease-in-out transform group-hover:scale-125">
          {title}
        </h2>
        <p className="mt-2 opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out">
          {description}
        </p>
      </div>
    </div>
  );
}

export default ProjectCard;
