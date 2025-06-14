// components/StarField.tsx
"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { Suspense, useRef, useMemo } from "react";
import * as THREE from "three";

export default function StarField() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
      </Canvas>
    </div>
  );
}

function Stars() {
  const ref = useRef<THREE.Points>(null!);
  const stars = useMemo(() => {
    const starPositions = [];
    for (let i = 0; i < 2000; i++) {
      const x = (Math.random() - 0.5) * 50;
      const y = (Math.random() - 0.5) * 50;
      const z = -Math.random() * 50;
      starPositions.push(x, y, z);
    }
    return new Float32Array(starPositions);
  }, []);

  useFrame(() => {
    ref.current.rotation.y += 0.0005;
  });

  return (
    <Points ref={ref} positions={stars} stride={3}>
      <PointMaterial
        color="#ffffff"
        size={0.05}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
}
