import React from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Text } from '@react-three/drei';
import { useRef } from 'react';
import { Noise } from 'noisejs';

const Terrain = () => {
    const terrainRef = useRef<THREE.Mesh>(null);
    const noise = new Noise(Math.random());
    
    const generateTerrain = () => {
        const size = 100;
        const divisions = 32;
        const geometry = new THREE.PlaneGeometry(size, size, divisions, divisions);
        const vertices = geometry.attributes.position.array;
        const scale = 0.1;
        const height = 8;

        for (let i = 0, j = 0; i< vertices.length; i+=3, j++) {
            const x = (j % divisions) / divisions * size;
            const y = Math.floor(j / divisions) / divisions * size;
            vertices[i + 2] = noise.perlin2(x * scale, y * scale) * height;
        }

        geometry.attributes.position.needsUpdate = true;
        geometry.computeVertexNormals();
        const material = new THREE.MeshStandardMaterial({ color: 0x228B22, flatShading: true });
        return <mesh ref={terrainRef} geometry={geometry} material={material} rotation-x={-Math.PI / 2} />;  
    };

  useFrame(() => {
    if (terrainRef.current) {
      terrainRef.current.position.z += 0.1; // simulating scroll
    }
  });

  return (
    <>
      {generateTerrain()}
      <Text position={[0, 5, -30]} fontSize={1} color="white">
        My Project 1
      </Text>
      <Text position={[0, 5, -50]} fontSize={1} color="white">
        My Project 2
      </Text>
      <Text position={[0, 5, -70]} fontSize={1} color="white">
        My Project 3
      </Text>
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
