"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

/** Terminal POS con productos orbitando y un ticket apareciendo en el receipt */
function POSTerminal() {
  return (
    <group>
      {/* base */}
      <mesh position={[0, -0.4, 0]}>
        <boxGeometry args={[1.8, 0.2, 1.4]} />
        <meshStandardMaterial color="#18181b" metalness={0.7} roughness={0.3} />
      </mesh>
      {/* pantalla */}
      <mesh position={[0, 0.4, -0.3]} rotation={[-0.2, 0, 0]}>
        <boxGeometry args={[1.5, 1, 0.08]} />
        <meshStandardMaterial color="#0f0f12" metalness={0.5} roughness={0.4} />
      </mesh>
      {/* pantalla glow */}
      <mesh position={[0, 0.4, -0.255]} rotation={[-0.2, 0, 0]}>
        <planeGeometry args={[1.35, 0.85]} />
        <meshBasicMaterial color="#7c3aed" transparent opacity={0.6} />
      </mesh>
    </group>
  );
}

function Product({ angle, color, height }: { angle: number; color: string; height: number }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime * 0.5 + angle;
    const radius = 1.8;
    ref.current.position.x = Math.cos(t) * radius;
    ref.current.position.z = Math.sin(t) * radius;
    ref.current.position.y = 0.2 + Math.sin(t * 2) * 0.15;
    ref.current.rotation.x = state.clock.elapsedTime * 0.5;
    ref.current.rotation.y = state.clock.elapsedTime * 0.7;
  });
  return (
    <mesh ref={ref}>
      <boxGeometry args={[0.3, height, 0.3]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.4} metalness={0.6} roughness={0.4} />
    </mesh>
  );
}

function Receipt() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const t = ((state.clock.elapsedTime * 0.5) % 3);
    ref.current.position.y = THREE.MathUtils.lerp(-0.3, 1.5, t / 3);
    const mat = ref.current.material as THREE.MeshStandardMaterial;
    mat.opacity = Math.sin((t / 3) * Math.PI);
  });
  return (
    <mesh ref={ref} position={[1.1, -0.3, 0]} rotation={[0, 0, 0]}>
      <planeGeometry args={[0.5, 0.9]} />
      <meshStandardMaterial color="#fafafa" transparent opacity={0.9} side={THREE.DoubleSide} />
    </mesh>
  );
}

export default function KioskoFlow3D({ height = 320 }: { height?: number }) {
  const products = [
    { angle: 0, color: "#f59e0b", h: 0.5 },
    { angle: Math.PI * 0.5, color: "#10b981", h: 0.4 },
    { angle: Math.PI, color: "#7c3aed", h: 0.6 },
    { angle: Math.PI * 1.5, color: "#06b6d4", h: 0.35 },
    { angle: Math.PI * 0.25, color: "#ec4899", h: 0.45 },
    { angle: Math.PI * 1.25, color: "#3b82f6", h: 0.55 },
  ];
  return (
    <div style={{ height }} className="w-full">
      <Canvas camera={{ position: [0, 1.5, 4.5], fov: 50 }} gl={{ antialias: true, alpha: true }} dpr={[1, 2]}>
        <ambientLight intensity={0.5} />
        <pointLight position={[3, 4, 4]} intensity={1.2} color="#fbbf24" />
        <pointLight position={[-3, 2, 2]} intensity={0.7} color="#a78bfa" />
        <Float floatIntensity={0.2} rotationIntensity={0.08} speed={1.2}>
          <POSTerminal />
        </Float>
        {products.map((p, i) => (
          <Product key={i} angle={p.angle} color={p.color} height={p.h} />
        ))}
        <Receipt />
      </Canvas>
    </div>
  );
}
