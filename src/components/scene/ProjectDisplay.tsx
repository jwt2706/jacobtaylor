import { useEffect, useState } from 'react';
import { Text } from '@react-three/drei';
import { RoundedBox } from '@react-three/drei';

interface Project {
    title: string;
    description: string;
    link: string;
    githubPagesLink: string;
    languages: string[];
}

interface ProjectDisplayProps {
    projects: Project[];
    PROJECT_SPACING: number;
}

const ProjectDisplay: React.FC<ProjectDisplayProps> = ({ projects, PROJECT_SPACING }) => {
    return (
        <>
            {projects.map((project, index) => {
                const xOffset = (index % 2 === 0) ? -7 : 7;
                const zPosition = -(index + 1) * PROJECT_SPACING;
                const rotationY = (index % 2 === 0) ? Math.PI / 8 : -Math.PI / 8;

                return (
                    <group key={index} position={[xOffset, 7, zPosition]} rotation={[0, rotationY, 0]}>
                        {/* Background with rounded corners */}
                        <RoundedBox 
                            args={[8, 4, 0.1]} // Increased size
                            radius={0.3} 
                            smoothness={4}
                            position={[0, 0, 0]}
                        >
                            <meshStandardMaterial color="#085985" transparent opacity={0.85} />
                        </RoundedBox>

                        {/* Title */}
                        <Text
                            position={[0, 1.2, 0.11]}
                            fontSize={0.7}
                            color="white"
                            anchorX="center"
                            anchorY="middle"
                        >
                            {project.title}
                        </Text>

                        {/* Description */}
                        <Text
                            position={[0, 0.5, 0.11]}
                            fontSize={0.3}
                            color="white"
                            anchorX="center"
                            anchorY="middle"
                        >
                            {project.description}
                        </Text>

                        {/* Languages */}
                        <Text
                            position={[0, 0, 0.11]}
                            fontSize={0.2}
                            color="white"
                            anchorX="center"
                            anchorY="middle"
                        >
                            {project.languages.join(', ')}
                        </Text>

                        {/* Project Link */}
                        <mesh position={[-2, -0.8, 0.11]} onClick={() => window.open(project.link, '_blank')}>
                            <Text
                                fontSize={0.4}
                                color="white"
                                anchorX="center"
                                anchorY="middle"
                            >
                                See Project Pages
                            </Text>
                        </mesh>

                        {/* GitHub Link */}
                        <mesh position={[2, -0.8, 0.11]} onClick={() => window.open(project.githubPagesLink, '_blank')}>
                            <Text
                                fontSize={0.4}
                                color="white"
                                anchorX="center"
                                anchorY="middle"
                            >
                                See GitHub
                            </Text>
                        </mesh>
                    </group>
                );
            })}
        </>
    );
};

export default ProjectDisplay;
