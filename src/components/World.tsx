import React, { useRef, useEffect, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Text } from '@react-three/drei';
import { Noise } from 'noisejs';
import ProjectFetcher from './ProjectFetcher'

const PROJECT_SPACING = 10; // distance between each project
const NOISE = new Noise(Math.random());

interface Project {
    title: string;
    description: string;
    link: string;
    githubPagesLink?: string;
    languages?: string[];
    createdAt: string;
}

const World: React.FC<{ projects: Project[] }> = ({ projects }) => {
    const groupRef = useRef<THREE.Group>(null);
    const sunRef = useRef<THREE.Mesh>(null);

    const [sunPosition, setSunPosition] = useState([-30, 20, -30]);
    const [targetPosition, setTargetPosition] = useState(0);
    const worldSize = (projects.length) * PROJECT_SPACING + 100;

    const minScrollLimit = 0;
    const maxScrollLimit = worldSize;

    const terrain = useMemo(() => {
        const divisions = 32 * (PROJECT_SPACING / 4);
        const geometry = new THREE.PlaneGeometry(worldSize, worldSize, divisions, divisions);
        const vertices = geometry.attributes.position.array;
        const scale = 0.1;
        const height = 6;

        for (let i = 0, j = 0; i < vertices.length; i += 3, j++) {
            const x = (j % divisions) / divisions * worldSize;
            const y = Math.floor(j / divisions) / divisions * worldSize;
            vertices[i + 2] = NOISE.perlin2(x * scale, y * scale) * height;
        }

        geometry.attributes.position.needsUpdate = true;
        geometry.computeVertexNormals();
        const material = new THREE.MeshStandardMaterial({ color: 0x228B22, flatShading: true });
        return <mesh geometry={geometry} material={material} rotation-x={-Math.PI / 2} position={[0, 0, (-worldSize / 4)]} />;
    }, [worldSize]);

    const generateWater = () => {
        const size = worldSize;
        const geometry = new THREE.PlaneGeometry(size, size);
        const material = new THREE.MeshStandardMaterial({ color: 0x4BA6FF, transparent: true, opacity: 0.85 });
        return <mesh geometry={geometry} material={material} position={[0, -1, 0]} rotation-x={-Math.PI / 2} />;
    };

    const generateSun = () => {
        const geometry = new THREE.SphereGeometry(3, 16, 16);
        const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
        return (
            <>
                <mesh ref={sunRef} geometry={geometry} material={material} position={sunPosition} />
                <directionalLight position={sunPosition} intensity={5} />
            </>
        );
    };

    useEffect(() => {
        const handleWheel = (event: WheelEvent) => {
            event.preventDefault(); // turn off regular scroll behavior
            // update target position with clamping
            setTargetPosition((prev) => {
                const newPosition = prev + event.deltaY * 0.01;
                return Math.max(minScrollLimit, Math.min(maxScrollLimit, newPosition));
            });

            setSunPosition((prevPos) => [prevPos[0] + event.deltaY * 0.01, prevPos[1], prevPos[2]]);
        };

        window.addEventListener('wheel', handleWheel);
        return () => {
            window.removeEventListener('wheel', handleWheel);
        };
    }, []);

    useFrame(() => {
        if (groupRef.current) {
            groupRef.current.position.z += (targetPosition - groupRef.current.position.z) * 0.1; // smoothly update position
        }
    });

    return (
        <>
            {generateSun()}
            <group ref={groupRef}>
                {terrain}
                {generateWater()}
                {projects.map((project, index) => (
                    <Text
                        key={index}
                        position={[0, 7, -(index + 1) * PROJECT_SPACING]}
                        fontSize={1}
                        color="white"
                        onClick={() => window.open(project.link, '_blank')}
                    >
                        {project.title}
                    </Text>
                ))}
            </group>
        </>
    );
};

const WorldCanvas = () => {
    const [projects, setProjects] = useState<Project[]>([]);

    return (
        <>
            <ProjectFetcher onProjectsFetched={setProjects} />
            <Canvas camera={{ position: [0, 5, 25], fov: 75 }}>
                <ambientLight intensity={1} />
                <World projects={projects} />
            </Canvas>
        </>
    );
};

export default WorldCanvas;
