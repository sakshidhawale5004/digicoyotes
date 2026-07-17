import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, Suspense, useMemo, useState, useEffect } from "react";
import * as THREE from "three";

/**
 * Holographic neon-wire hero background.
 * - Large wireframe icosahedron with additive holo glow
 * - Torus knot (signature 3D centerpiece) with counter rotation
 * - Slim orbiting ring
 * - Dot cloud + subtle scanline overlay applied outside
 */

const HoloIcosa = () => {
  const ref = useRef<THREE.Group>(null);
  const [wire, glow] = useMemo(() => {
    const g = new THREE.IcosahedronGeometry(2.3, 2);
    return [new THREE.EdgesGeometry(g), g];
  }, []);
  useFrame((_, dt) => {
    if (!ref.current) return;
    ref.current.rotation.x += dt * 0.08;
    ref.current.rotation.y += dt * 0.1;
  });
  return (
    <group ref={ref} position={[2.6, 0.3, 0]}>
      <lineSegments geometry={wire}>
        <lineBasicMaterial color="#ff7a2a" transparent opacity={0.85} />
      </lineSegments>
      <mesh geometry={glow} scale={1.02}>
        <meshBasicMaterial
          color="#ff3d00"
          transparent
          opacity={0.06}
          blending={THREE.AdditiveBlending}
          side={THREE.BackSide}
        />
      </mesh>
    </group>
  );
};

const HoloKnot = () => {
  const ref = useRef<THREE.Group>(null);
  const [wire] = useMemo(() => {
    const g = new THREE.TorusKnotGeometry(1.1, 0.32, 128, 16);
    return [new THREE.WireframeGeometry(g)];
  }, []);
  useFrame((_, dt) => {
    if (!ref.current) return;
    ref.current.rotation.x -= dt * 0.15;
    ref.current.rotation.y += dt * 0.2;
  });
  return (
    <group ref={ref} position={[-2.8, -0.4, -0.5]}>
      <lineSegments geometry={wire}>
        <lineBasicMaterial color="#ffb37a" transparent opacity={0.55} />
      </lineSegments>
    </group>
  );
};

const OrbitRing = () => {
  const ref = useRef<THREE.LineSegments>(null);
  const geo = useMemo(() => {
    const g = new THREE.TorusGeometry(3.6, 0.008, 4, 160);
    return new THREE.EdgesGeometry(g);
  }, []);
  useFrame((_, dt) => {
    if (ref.current) {
      ref.current.rotation.x += dt * 0.05;
      ref.current.rotation.z += dt * 0.03;
    }
  });
  return (
    <lineSegments ref={ref} geometry={geo} rotation={[1.2, 0.4, 0]}>
      <lineBasicMaterial color="#ff7a2a" transparent opacity={0.25} />
    </lineSegments>
  );
};

const Dots = () => {
  const positions = useMemo(() => {
    const arr = new Float32Array(140 * 3);
    for (let i = 0; i < 140; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 12;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 7;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 5 - 1;
    }
    return arr;
  }, []);
  const ref = useRef<THREE.Points>(null);
  useFrame((_, dt) => {
    if (ref.current) ref.current.rotation.y += dt * 0.03;
  });
  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#ff9248" size={0.045} transparent opacity={0.75} sizeAttenuation />
    </points>
  );
};

const FloatingShapes = () => {
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    setEnabled(mq.matches && !reduced.matches);
    const handler = () => setEnabled(mq.matches && !reduced.matches);
    mq.addEventListener("change", handler);
    reduced.addEventListener("change", handler);
    const onVis = () => setVisible(!document.hidden);
    document.addEventListener("visibilitychange", onVis);
    return () => {
      mq.removeEventListener("change", handler);
      reduced.removeEventListener("change", handler);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div className="absolute inset-0 pointer-events-none opacity-95 mix-blend-screen">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
        frameloop={visible ? "always" : "never"}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.7} />
          <pointLight position={[3, 2, 4]} color="#ff7a2a" intensity={1.2} />
          <HoloIcosa />
          <HoloKnot />
          <OrbitRing />
          <Dots />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default FloatingShapes;
