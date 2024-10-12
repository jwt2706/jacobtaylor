import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Text } from '@react-three/drei';
import { Noise } from 'noisejs';

const Terrain = () => {
    const groupRef = useRef<THREE.Group>(null);
    const noise = new Noise(Math.random());

    const generateTerrain = () => {
        const size = 100;
        const divisions = 32;
        const geometry = new THREE.PlaneGeometry(size, size, divisions, divisions);
        const vertices = geometry.attributes.position.array;
        const scale = 0.07;
        const height = 8;

        for (let i = 0, j = 0; i < vertices.length; i += 3, j++) {
            const x = (j % divisions) / divisions * size;
            const y = Math.floor(j / divisions) / divisions * size;
            vertices[i + 2] = noise.perlin2(x * scale, y * scale) * height;
        }

        geometry.attributes.position.needsUpdate = true;
        geometry.computeVertexNormals();
        const material = new THREE.MeshStandardMaterial({ color: 0x228B22, flatShading: true });
        return <mesh geometry={geometry} material={material} rotation-x={-Math.PI / 2} />;
    };

    const generateWater = () => {
        const size = 100;
        const geometry = new THREE.PlaneGeometry(size, size);
        const material = new THREE.MeshStandardMaterial({ color: 0x4BA6FF, transparent: true, opacity: 0.8 });
        return <mesh geometry={geometry} material={material} position={[0, -2, 0]} rotation-x={-Math.PI / 2} />;
    };

    const generateSun = () => {
        const geometry = new THREE.SphereGeometry(3, 32, 32);
        const material = new THREE.MeshBasicMaterial({ color: 0xffff00, emissive: 0xffff00 });
        const sun = <mesh geometry={geometry} material={material} position={[-30, 20, -30]} />;
        return sun;
    };

    useFrame(() => {
        if (groupRef.current) {
            groupRef.current.position.z += 0.1; // simulating scroll
        }
    });

    return (
        <>
        {generateSun()}
        <group ref={groupRef}>
            {generateTerrain()}
            {generateWater()}
            
            <Text position={[0, 5, -10]} fontSize={1} color="white">
                My Project 1
            </Text>
            <Text position={[0, 5, -20]} fontSize={1} color="white">
                My Project 2
            </Text>
            <Text position={[0, 5, -40]} fontSize={1} color="white">
                My Project 3
            </Text>
        </group>
        </>
    );
};

const TerrainCanvas = () => {
    return (
        <Canvas camera={{ position: [0, 10, 25], fov: 75 }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[0, 10, 30]} />
            <Terrain />
        </Canvas>
    );
};

export default TerrainCanvas;
