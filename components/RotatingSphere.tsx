// components/SimpleSphere.tsx
"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";

export default function SimpleSphere() {
  return (
    <div className="w-full h-64 mb-6 flex items-center justify-center">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.7} />
          <directionalLight position={[3, 3, 3]} intensity={1} />
          <LowPolySphere />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5} />
        </Suspense>
      </Canvas>
    </div>
  );
}

function LowPolySphere() {
  const sphereRef = useRef<THREE.Mesh>(null!);

  useFrame(() => {
    sphereRef.current.rotation.y += 0.003; // Smooth rotation
  });

  return (
    <mesh ref={sphereRef} position={[0, 0, 0]}>
      {/* Lower segments: 8 width, 8 height for a minimal mesh */}
      <sphereGeometry args={[1.5, 8, 8]} />
      <meshStandardMaterial color="#ffffff" wireframe />
    </mesh>
  );
}
