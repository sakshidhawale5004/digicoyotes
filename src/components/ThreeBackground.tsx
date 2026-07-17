import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Stars } from '@react-three/drei';
import * as THREE from 'three';

const FloatingGeometries = () => {
  const group = useRef<THREE.Group>(null);
  const { mouse, viewport } = useThree();

  // Create random positions for objects
  const objects = useMemo(() => {
    const temp = [];
    for (let i = 0; i < 15; i++) {
      const x = (Math.random() - 0.5) * viewport.width * 2;
      const y = (Math.random() - 0.5) * viewport.height * 2;
      const z = (Math.random() - 1.5) * 10;
      temp.push({ x, y, z });
    }
    return temp;
  }, [viewport]);

  useFrame(() => {
    if (group.current) {
      // Parallax effect based on mouse movement
      group.current.position.x = THREE.MathUtils.lerp(group.current.position.x, (mouse.x * viewport.width) / 20, 0.05);
      group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, (mouse.y * viewport.height) / 20, 0.05);
    }
  });

  return (
    <group ref={group}>
      {objects.map((pos, i) => (
        <Float key={i} speed={2} rotationIntensity={1.5} floatIntensity={2}>
          <mesh position={[pos.x, pos.y, pos.z]} rotation={[Math.random() * Math.PI, Math.random() * Math.PI, 0]}>
            {i % 3 === 0 ? (
              <torusGeometry args={[0.5, 0.2, 16, 100]} />
            ) : i % 3 === 1 ? (
              <octahedronGeometry args={[0.6]} />
            ) : (
              <icosahedronGeometry args={[0.7]} />
            )}
            <MeshDistortMaterial
              color={i % 2 === 0 ? '#3b82f6' : '#a855f7'} // Electric Blue or Neon Purple
              envMapIntensity={1}
              clearcoat={1}
              clearcoatRoughness={0.1}
              metalness={0.8}
              roughness={0.2}
              distort={0.2}
              speed={2}
              transparent
              opacity={0.8}
            />
          </mesh>
        </Float>
      ))}

      {/* Center hero object */}
      <Float speed={3} rotationIntensity={2} floatIntensity={3}>
        <Sphere args={[2, 64, 64]} position={[0, 0, -2]}>
          <MeshDistortMaterial
            color="#000000"
            emissive="#111122"
            distort={0.4}
            speed={2}
            roughness={0}
            metalness={1}
            clearcoat={1}
            clearcoatRoughness={0.1}
          />
        </Sphere>
      </Float>
    </group>
  );
};

const ThreeBackground = () => {
  return (
    <div className="fixed inset-0 w-full h-full z-0 pointer-events-none bg-background">
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
        <color attach="background" args={['#060608']} />
        
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#3b82f6" />
        <directionalLight position={[-10, -10, -5]} intensity={1} color="#a855f7" />
        <pointLight position={[0, 0, 0]} intensity={2} color="#ffffff" distance={10} />
        
        <Stars radius={100} depth={50} count={3000} factor={4} saturation={1} fade speed={1} />
        
        <FloatingGeometries />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;
