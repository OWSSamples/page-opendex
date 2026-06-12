"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

/** Visualiza el flujo de autenticación: dispositivo -> passkey challenge -> token JWT -> sesión */
function FlowStage({
  position,
  color,
  shape,
  label,
  phase,
}: {
  position: [number, number, number];
  color: string;
  shape: "device" | "key" | "token" | "session";
  label: string;
  phase: number;
}) {
  const ref = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    const active = (Math.sin(t - phase) + 1) / 2;
    ref.current.scale.setScalar(0.9 + active * 0.2);
    const mat = (ref.current.children[0] as THREE.Mesh).material as THREE.MeshStandardMaterial;
    mat.emissiveIntensity = 0.3 + active * 0.8;
  });

  return (
    <group ref={ref} position={position}>
      {shape === "device" && (
        <mesh>
          <boxGeometry args={[0.6, 1, 0.08]} />
          <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} metalness={0.8} roughness={0.2} />
        </mesh>
      )}
      {shape === "key" && (
        <mesh rotation={[0, 0, Math.PI / 4]}>
          <torusGeometry args={[0.3, 0.08, 16, 32]} />
          <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} metalness={0.8} roughness={0.2} />
        </mesh>
      )}
      {shape === "token" && (
        <mesh>
          <octahedronGeometry args={[0.4, 0]} />
          <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} metalness={0.8} roughness={0.2} />
        </mesh>
      )}
      {shape === "session" && (
        <mesh>
          <sphereGeometry args={[0.4, 24, 24]} />
          <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} metalness={0.7} roughness={0.3} />
        </mesh>
      )}
    </group>
  );
}

function FlowPacket({
  from,
  to,
  color,
  delay,
}: {
  from: [number, number, number];
  to: [number, number, number];
  color: string;
  delay: number;
}) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const t = ((state.clock.elapsedTime + delay) % 2) / 2;
    ref.current.position.x = THREE.MathUtils.lerp(from[0], to[0], t);
    ref.current.position.y = THREE.MathUtils.lerp(from[1], to[1], t) + Math.sin(t * Math.PI) * 0.3;
    ref.current.position.z = THREE.MathUtils.lerp(from[2], to[2], t);
    const s = Math.sin(t * Math.PI) * 0.15;
    ref.current.scale.setScalar(Math.max(s, 0.02));
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[1, 12, 12]} />
      <meshBasicMaterial color={color} />
    </mesh>
  );
}

export default function AuthFlow3D({ height = 320 }: { height?: number }) {
  const stages: Array<{
    pos: [number, number, number];
    color: string;
    shape: "device" | "key" | "token" | "session";
    label: string;
    phase: number;
  }> = [
    { pos: [-3, 0, 0], color: "#a78bfa", shape: "device", label: "Cliente", phase: 0 },
    { pos: [-1, 0, 0], color: "#7c3aed", shape: "key", label: "Passkey", phase: 0.5 },
    { pos: [1, 0, 0], color: "#06b6d4", shape: "token", label: "JWT", phase: 1 },
    { pos: [3, 0, 0], color: "#10b981", shape: "session", label: "Sesión", phase: 1.5 },
  ];

  return (
    <div style={{ height }} className="w-full">
      <Canvas camera={{ position: [0, 1, 5], fov: 50 }} gl={{ antialias: true, alpha: true }} dpr={[1, 2]}>
        <ambientLight intensity={0.5} />
        <pointLight position={[3, 5, 5]} intensity={1} color="#a78bfa" />
        <pointLight position={[-3, -2, 3]} intensity={0.6} color="#06b6d4" />
        <Float floatIntensity={0.3} rotationIntensity={0.1} speed={1.2}>
          {stages.map((s, i) => (
            <FlowStage key={i} position={s.pos} color={s.color} shape={s.shape} label={s.label} phase={s.phase} />
          ))}
        </Float>
        {stages.slice(0, -1).map((s, i) => (
          <FlowPacket
            key={i}
            from={s.pos}
            to={stages[i + 1].pos}
            color={s.color}
            delay={i * 0.5}
          />
        ))}
      </Canvas>
    </div>
  );
}
