
import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Float, MeshDistortMaterial, MeshTransmissionMaterial, Text, PerspectiveCamera, Environment } from '@react-three/drei';
import * as THREE from 'three';
import { WindowType } from '../types';

interface HubNodeProps {
  position: [number, number, number];
  text: string;
  color: string;
  onClick: () => void;
  active?: boolean;
}

const HubNode: React.FC<HubNodeProps> = ({ position, text, color, onClick, active }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHover] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      const t = state.clock.getElapsedTime();
      meshRef.current.position.y = position[1] + Math.sin(t + position[0] * 0.5) * 0.2;
    }
  });

  return (
    <group position={position}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        {/* Fix: Removed className prop from mesh as it is not supported in Three.js JSX elements */}
        <mesh 
          ref={meshRef} 
          onClick={(e) => { e.stopPropagation(); onClick(); }}
          onPointerOver={() => setHover(true)}
          onPointerOut={() => setHover(false)}
        >
          <icosahedronGeometry args={[0.8, 15]} />
          <MeshTransmissionMaterial
            backside
            samples={4}
            thickness={1}
            chromaticAberration={0.05}
            anisotropy={0.1}
            distortion={0.2}
            distortionScale={0.1}
            temporalDistortion={0.1}
            color={hovered || active ? color : "#ffffff"}
          />
        </mesh>
      </Float>
      <Text
        position={[0, -1.2, 0]}
        fontSize={0.3}
        color="white"
        font="https://fonts.gstatic.com/s/firacode/v10/uU9eCBsR6Z2vfEycmqhLmw.woff"
        anchorX="center"
        anchorY="middle"
      >
        {text}
      </Text>
    </group>
  );
};

const CentralCore = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.1;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
    }
  });

  return (
    <Float speed={3} rotationIntensity={1} floatIntensity={0.5}>
      <mesh ref={meshRef}>
        <torusKnotGeometry args={[1.5, 0.4, 128, 32]} />
        <MeshDistortMaterial
          color="#ff00ff"
          speed={2}
          distort={0.3}
          radius={1}
          emissive="#ff00ff"
          emissiveIntensity={0.2}
        />
      </mesh>
    </Float>
  );
};

const Scene3D: React.FC<{ onNavigate?: (id: WindowType) => void, activeZone?: WindowType }> = ({ onNavigate, activeZone }) => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 12]} fov={50} />
        <color attach="background" args={['#050508']} />
        <Environment preset="city" />
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00ffff" />
        <pointLight position={[-10, -10, -10]} intensity={0.8} color="#ff00ff" />
        
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={0.5} />
        
        <CentralCore />

        {/* Home / About */}
        <HubNode 
          position={[-5, 3, 0]} 
          text="THE_MISSION" 
          color="#ff00ff" 
          onClick={() => onNavigate?.(WindowType.HOME)} 
          active={activeZone === WindowType.HOME}
        />
        
        {/* Projects */}
        <HubNode 
          position={[5, 3, 0]} 
          text="EXPERIMENTS" 
          color="#00ffff" 
          onClick={() => onNavigate?.(WindowType.PROJECTS)}
          active={activeZone === WindowType.PROJECTS}
        />

        {/* Journey */}
        <HubNode 
          position={[-5, -3, 0]} 
          text="CHRONICLES" 
          color="#ffff00" 
          onClick={() => onNavigate?.(WindowType.JOURNEY)}
          active={activeZone === WindowType.JOURNEY}
        />

        {/* Contact */}
        <HubNode 
          position={[5, -3, 0]} 
          text="NETWORK" 
          color="#00ff00" 
          onClick={() => onNavigate?.(WindowType.CONTACT)}
          active={activeZone === WindowType.CONTACT}
        />

        {/* Qualifications (New Node) */}
        <HubNode 
          position={[0, -5, 0]} 
          text="CORE_QUALIFICATIONS" 
          color="#ffffff" 
          onClick={() => onNavigate?.(WindowType.QUALIFICATIONS)}
          active={activeZone === WindowType.QUALIFICATIONS}
        />

        <fog attach="fog" args={['#050508', 5, 20]} />
      </Canvas>

      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
    </div>
  );
};

export default Scene3D;