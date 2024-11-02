import { useEffect, useState } from 'react';
import { Text } from '@react-three/drei';

interface ProjectDisplayProps {
    projects: any;
    PROJECT_SPACING: number;
}

const ProjectDisplay: React.FC<ProjectDisplayProps> = ({ projects, PROJECT_SPACING }) => {
    const [isInView, setIsInView] = useState(false);

    const handleScroll = () => {
        const scrollY = window.scrollY;
        const triggerHeight = 100;
        if (scrollY > triggerHeight) {
            setIsInView(true);
        } else {
            setIsInView(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        console.log("ASDasd")
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            {projects.map((project, index) => {
                const xOffset = (index % 2 === 0) ? -7 : 7;
                const zPosition = -(index + 1) * PROJECT_SPACING;
                const rotationY = (index % 2 === 0) ? Math.PI / 8 : -Math.PI / 8;

                const animatedPosition = isInView ? [xOffset, 7, zPosition] : [0, 7, zPosition];

                return (
                    <group key={index} position={animatedPosition} rotation={[0, rotationY, 0]}>
                        <mesh>
                            <planeGeometry args={[6, 2]} />
                            <meshStandardMaterial color="black" transparent opacity={0.9} />
                        </mesh>

                        <Text
                            position={[0, 0, 0.1]}
                            fontSize={1}
                            color="white"
                        >
                            {project.title}
                        </Text>
                    </group>
                );
            })}
        </>
    );
};

export default ProjectDisplay;
