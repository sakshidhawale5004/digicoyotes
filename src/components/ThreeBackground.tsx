import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Stars } from '@react-three/drei';
import * as THREE from 'three';

const BarChart = ({ position, rotation }: { position: [number, number, number], rotation: [number, number, number] }) => {
  return (
    <group position={position} rotation={rotation}>
      <mesh position={[-0.8, -0.5, 0]}>
        <boxGeometry args={[0.4, 1, 0.4]} />
        <meshStandardMaterial color="#333333" metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[0.4, 2, 0.4]} />
        <meshStandardMaterial color="#f97316" metalness={0.5} roughness={0.1} emissive="#ea580c" emissiveIntensity={0.5} />
      </mesh>
      <mesh position={[0.8, 0.5, 0]}>
        <boxGeometry args={[0.4, 3, 0.4]} />
        <meshStandardMaterial color="#ffffff" metalness={0.9} roughness={0.1} />
      </mesh>
    </group>
  );
};

const TargetBullseye = ({ position, rotation }: { position: [number, number, number], rotation: [number, number, number] }) => {
  return (
    <group position={position} rotation={rotation}>
      <mesh>
        <torusGeometry args={[1.5, 0.15, 16, 64]} />
        <meshStandardMaterial color="#f97316" metalness={0.8} roughness={0.2} emissive="#ea580c" emissiveIntensity={0.4} />
      </mesh>
      <mesh>
        <torusGeometry args={[1.0, 0.15, 16, 64]} />
        <meshStandardMaterial color="#333333" metalness={0.9} roughness={0.1} />
      </mesh>
      <mesh>
        <torusGeometry args={[0.5, 0.15, 16, 64]} />
        <meshStandardMaterial color="#ffffff" metalness={0.5} roughness={0.1} />
      </mesh>
      <mesh>
        <sphereGeometry args={[0.25, 32, 32]} />
        <meshStandardMaterial color="#f97316" emissive="#ea580c" emissiveIntensity={1} />
      </mesh>
    </group>
  );
};

const DigitalNode = ({ position, rotation }: { position: [number, number, number], rotation: [number, number, number] }) => {
  return (
    <group position={position} rotation={rotation}>
      <mesh>
        <octahedronGeometry args={[0.6]} />
        <MeshDistortMaterial
          color="#f97316"
          envMapIntensity={1}
          clearcoat={1}
          clearcoatRoughness={0.1}
          metalness={0.8}
          roughness={0.2}
          distort={0.3}
          speed={3}
          transparent
          opacity={0.9}
        />
      </mesh>
    </group>
  );
};

const FloatingMarketingObjects = () => {
  const group = useRef<THREE.Group>(null);
  const { mouse, viewport } = useThree();

  // Create random positions for background nodes
  const nodes = useMemo(() => {
    const temp = [];
    for (let i = 0; i < 8; i++) {
      const x = (Math.random() - 0.5) * viewport.width * 1.5;
      const y = (Math.random() - 0.5) * viewport.height * 1.5;
      const z = (Math.random() - 1.5) * 8;
      temp.push({ x, y, z });
    }
    return temp;
  }, [viewport]);

  useFrame(() => {
    if (group.current) {
      // Parallax effect based on mouse movement
      group.current.position.x = THREE.MathUtils.lerp(group.current.position.x, (mouse.x * viewport.width) / 25, 0.05);
      group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, (mouse.y * viewport.height) / 25, 0.05);
    }
  });

  return (
    <group ref={group}>
      {nodes.map((pos, i) => (
        <Float key={i} speed={2} rotationIntensity={1.5} floatIntensity={2}>
          <DigitalNode 
            position={[pos.x, pos.y, pos.z]} 
            rotation={[Math.random() * Math.PI, Math.random() * Math.PI, 0]} 
          />
        </Float>
      ))}

      {/* Main Marketing Objects */}
      <Float speed={2.5} rotationIntensity={1} floatIntensity={2}>
        <BarChart position={[-4, 1, -2]} rotation={[0.2, 0.5, 0]} />
      </Float>

      <Float speed={2} rotationIntensity={1.5} floatIntensity={1.5}>
        <TargetBullseye position={[4, -1, -3]} rotation={[-0.3, -0.6, 0]} />
      </Float>
    </group>
  );
};

const ThreeBackground = () => {
  return (
    <div className="fixed inset-0 w-full h-full z-0 pointer-events-none bg-background">
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
        <color attach="background" args={['#0a0a0a']} />
        
        <ambientLight intensity={0.4} />
        {/* Warm Orange/Amber lighting setup */}
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ea580c" />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#fb923c" />
        <pointLight position={[0, 0, 0]} intensity={1.5} color="#ffffff" distance={15} />
        
        <Stars radius={100} depth={50} count={2500} factor={3} saturation={1} fade speed={0.5} />
        
        <FloatingMarketingObjects />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;
