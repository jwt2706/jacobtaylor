import React from "react";
import { motion, useTransform } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface Project {
  title: string;
  description: string;
  link: string;
  github: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
  x: any; // Motion value for x position
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, x }) => {
  const cardX = useTransform(x, (value: number) => value + index * 200);
  //const scale = useTransform(cardX, [-200, 0, 200], [0.8, 1.2, 0.8]); and put 'style={{ scale }}' in the motion.div

  return (
    <motion.div
      className="w-96 h-80 bg-white dark:bg-neutral-800 rounded-lg shadow-lg p-4 flex flex-col items-center justify-center"
      
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        {project.description}
      </p>
      <div className="flex space-x-4">
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          <FaExternalLinkAlt size={20} />
        </a>
        <a href={project.github} target="_blank" rel="noopener noreferrer">
          <FaGithub size={20} />
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;