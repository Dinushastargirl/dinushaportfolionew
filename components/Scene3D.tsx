
import React, { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Float, MeshDistortMaterial, MeshTransmissionMaterial, Text, PerspectiveCamera, Points, PointMaterial } from '@react-three/drei';
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
      meshRef.current.rotation.y += 0.02;
      meshRef.current.rotation.x += 0.01;
      const t = state.clock.getElapsedTime();
      meshRef.current.position.y = position[1] + Math.sin(t + position[0]) * 0.1;
    }
  });

  return (
    <group position={position}>
      <mesh 
        ref={meshRef} 
        onClick={(e) => { e.stopPropagation(); onClick(); }}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
      >
        <octahedronGeometry args={[0.7, 0]} />
        <meshBasicMaterial 
          color={active || hovered ? color : "#1a1a1a"} 
          wireframe 
          transparent 
          opacity={0.8}
        />
        {/* Glow inner */}
        <mesh scale={[0.6, 0.6, 0.6]}>
           <octahedronGeometry args={[0.7, 0]} />
           <meshBasicMaterial color={color} transparent opacity={hovered ? 0.4 : 0.1} />
        </mesh>
      </mesh>
      <Text
        position={[0, -1, 0]}
        fontSize={0.2}
        color={active || hovered ? color : "#ffffff"}
        font="https://fonts.gstatic.com/s/firacode/v10/uU9eCBsR6Z2vfEycmqhLmw.woff"
        anchorX="center"
        anchorY="middle"
      >
        {text}
      </Text>
    </group>
  );
};

const DataConstellation = () => {
  const count = 2000;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 40;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 40;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 40;
    }
    return pos;
  }, []);

  const pointsRef = useRef<THREE.Points>(null);
  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#00ff41"
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </Points>
  );
};

const CentralMatrix = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.z = state.clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={0.5}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[2, 1]} />
        <meshBasicMaterial color="#00ff41" wireframe transparent opacity={0.15} />
      </mesh>
    </Float>
  );
};

const Scene3D: React.FC<{ onNavigate?: (id: WindowType) => void, activeZone?: WindowType }> = ({ onNavigate, activeZone }) => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={50} />
        <color attach="background" args={['#020203']} />
        
        <ambientLight intensity={0.1} />
        
        <DataConstellation />
        <CentralMatrix />

        {/* Home / About */}
        <HubNode 
          position={[-4, 2, 0]} 
          text="ROOT_ACCESS" 
          color="#00ff41" 
          onClick={() => onNavigate?.(WindowType.HOME)} 
          active={activeZone === WindowType.HOME}
        />
        
        {/* Projects */}
        <HubNode 
          position={[4, 2, 0]} 
          text="REPOSITORIES" 
          color="#00ff41" 
          onClick={() => onNavigate?.(WindowType.PROJECTS)}
          active={activeZone === WindowType.PROJECTS}
        />

        {/* Journey */}
        <HubNode 
          position={[-4, -2, 0]} 
          text="HISTORY_LOG" 
          color="#00ff41" 
          onClick={() => onNavigate?.(WindowType.JOURNEY)}
          active={activeZone === WindowType.JOURNEY}
        />

        {/* Contact */}
        <HubNode 
          position={[4, -2, 0]} 
          text="UPLINK" 
          color="#00ff41" 
          onClick={() => onNavigate?.(WindowType.CONTACT)}
          active={activeZone === WindowType.CONTACT}
        />

        {/* Qualifications */}
        <HubNode 
          position={[0, -4, 0]} 
          text="CERT_ARCHIVE" 
          color="#ffffff" 
          onClick={() => onNavigate?.(WindowType.QUALIFICATIONS)}
          active={activeZone === WindowType.QUALIFICATIONS}
        />

        <fog attach="fog" args={['#020203', 5, 25]} />
      </Canvas>
    </div>
  );
};

export default Scene3D;
