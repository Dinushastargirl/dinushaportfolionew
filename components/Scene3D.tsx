
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, PerspectiveCamera, Environment, MeshTransmissionMaterial } from '@react-three/drei';
import * as THREE from 'three';

const Crystal = ({ position, rotationSpeed, scale = 1 }: any) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005 * rotationSpeed;
      meshRef.current.rotation.y += 0.008 * rotationSpeed;
      meshRef.current.position.y += Math.sin(state.clock.getElapsedTime() * rotationSpeed) * 0.002;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <icosahedronGeometry args={[1, 0]} />
        <MeshTransmissionMaterial
          backside
          samples={4}
          thickness={1}
          chromaticAberration={0.05}
          anisotropy={0.1}
          distortion={0.1}
          distortionScale={0.1}
          temporalDistortion={0.1}
          color="#ffccd5"
          transparent
          opacity={0.3}
        />
      </mesh>
    </Float>
  );
};

const Background = () => {
  return (
    <mesh scale={100}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshBasicMaterial color="#fff9fa" side={THREE.BackSide} />
    </mesh>
  );
};

const Scene3D: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none opacity-60">
      <Canvas dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={40} />
        
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} color="#ffccd5" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ff4d6d" />

        <Crystal position={[-6, 2, -2]} rotationSpeed={0.5} scale={1.2} />
        <Crystal position={[5, -3, 0]} rotationSpeed={0.8} scale={0.8} />
        <Crystal position={[2, 4, -5]} rotationSpeed={0.3} scale={1.5} />
        
        <Background />
        
        <fog attach="fog" args={['#fff9fa', 10, 30]} />
      </Canvas>
    </div>
  );
};

export default Scene3D;
