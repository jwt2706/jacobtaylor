import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import ProjectCard from "./ProjectCard";

interface Project {
  title: string;
  description: string;
  link: string;
  github: string;
}

const projects: Project[] = [
  {
    title: "Project 1",
    description: "Description for project 1",
    link: "https://example.com/project1",
    github: "https://github.com/jwt2706/project1",
  },
  {
    title: "Project 2",
    description: "Description for project 2",
    link: "https://example.com/project2",
    github: "https://github.com/jwt2706/project2",
  },
  {
    title: "Project 3",
    description: "Description for project 3",
    link: "https://example.com/project3",
    github: "https://github.com/jwt2706/project3",
  },
  {
    title: "Project 4",
    description: "Description for project 4",
    link: "https://example.com/project4",
    github: "https://github.com/jwt2706/project4",
  },
  {
    title: "Project 5",
    description: "Description for project 5",
    link: "https://example.com/project5",
    github: "https://github.com/jwt2706/project5",
  },
  {
    title: "Project 6",
    description: "Description for project 6",
    link: "https://example.com/project6",
    github: "https://github.com/jwt2706/project6",
  },
  {
    title: "Project 7",
    description: "Description for project 7",
    link: "https://example.com/project7",
    github: "https://github.com/jwt2706/project7",
  },
  {
    title: "Project 8",
    description: "Description for project 8",
    link: "https://example.com/project8",
    github: "https://github.com/jwt2706/project8",
  },
  {
    title: "Project 9",
    description: "Description for project 9",
    link: "https://example.com/project9",
    github: "https://github.com/jwt2706/project9",
  },
  {
    title: "Project 10",
    description: "Description for project 10",
    link: "https://example.com/project10",
    github: "https://github.com/jwt2706/project10",
  },
];

const Carousel: React.FC = () => {
  const x = useMotionValue(0);
  const xRange = [-200 * projects.length, 200 * projects.length];
  const xTransform = useTransform(x, xRange, xRange);

  return (
    <div className="relative w-full h-96 overflow-hidden flex justify-center items-center">
      <motion.div
        className="flex space-x-4"
        style={{ x: xTransform }}
        drag="x"
        dragConstraints={{ left: -200 * (projects.length - 1), right: 200 * (projects.length - 1) }}
      >
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} x={x} />
        ))}
      </motion.div>
    </div>
  );
};

export default Carousel;