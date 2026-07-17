import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';

const WebGLShaderMaterial = {
  uniforms: {
    uTexture: { value: null },
    uTime: { value: 0 },
    uMouse: { value: new THREE.Vector2(0.5, 0.5) },
    uHover: { value: 0 },
    uAspect: { value: 1.0 },
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform sampler2D uTexture;
    uniform float uTime;
    uniform vec2 uMouse;
    uniform float uHover;
    uniform float uAspect;
    varying vec2 vUv;
    
    void main() {
      vec2 uv = vUv;
      vec2 center = uMouse;
      
      // Aspect ratio correction for distance
      vec2 d = uv - center;
      d.x *= uAspect;
      
      float dist = length(d);
      
      // Sine wave distortion
      float wave = sin(dist * 20.0 - uTime * 5.0) * 0.05 * uHover;
      
      // Dampen effect based on distance
      float damp = smoothstep(0.6, 0.0, dist);
      
      vec2 displacedUv = uv + (d / max(dist, 0.0001)) * wave * damp;
      
      // Boundary check to avoid wrapping
      displacedUv = clamp(displacedUv, 0.001, 0.999);
      
      vec4 color = texture2D(uTexture, displacedUv);
      
      // Slightly darken the image overall so text remains readable
      color.rgb *= 0.6;
      
      gl_FragColor = color;
    }
  `
};

const ImageMesh = ({ imageSrc }: { imageSrc: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const texture = useTexture(imageSrc);
  
  // Set texture wrapping just in case, though we clamped UVs
  texture.wrapS = THREE.ClampToEdgeWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  
  const { size, viewport } = useThree();
  
  // Mouse state
  const mouse = useRef(new THREE.Vector2(0.5, 0.5));
  const targetHover = useRef(0);
  const currentHover = useRef(0);
  
  const uniforms = useMemo(() => ({
    uTexture: { value: texture },
    uTime: { value: 0 },
    uMouse: { value: new THREE.Vector2(0.5, 0.5) },
    uHover: { value: 0 },
    uAspect: { value: size.width / size.height },
  }), [texture, size]);

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.getElapsedTime();
      
      // Interpolate hover
      currentHover.current += (targetHover.current - currentHover.current) * 0.05;
      materialRef.current.uniforms.uHover.value = currentHover.current;
      
      // Interpolate mouse
      const currentMouse = materialRef.current.uniforms.uMouse.value;
      currentMouse.x += (mouse.current.x - currentMouse.x) * 0.1;
      currentMouse.y += (mouse.current.y - currentMouse.y) * 0.1;
      
      // Update aspect
      materialRef.current.uniforms.uAspect.value = size.width / size.height;
    }
  });

  const handlePointerMove = (e: any) => {
    if (e.uv) {
      mouse.current.set(e.uv.x, e.uv.y);
    }
  };

  return (
    <mesh 
      ref={meshRef}
      onPointerOver={() => targetHover.current = 1}
      onPointerOut={() => targetHover.current = 0}
      onPointerMove={handlePointerMove}
      scale={[viewport.width, viewport.height, 1]}
    >
      <planeGeometry args={[1, 1, 32, 32]} />
      <shaderMaterial 
        ref={materialRef}
        args={[WebGLShaderMaterial]}
        uniforms={uniforms}
      />
    </mesh>
  );
};

const WebGLHero = ({ imageSrc }: { imageSrc: string }) => {
  return (
    <div className="absolute inset-0 w-full h-full -z-10 overflow-hidden bg-surface-dark">
      <Canvas>
        <React.Suspense fallback={null}>
          <ImageMesh imageSrc={imageSrc} />
        </React.Suspense>
      </Canvas>
      {/* Fallback/gradient overlay to blend edges into the page */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background pointer-events-none"></div>
    </div>
  );
};

export default WebGLHero;
