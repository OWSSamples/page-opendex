"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

/** Stack de documentos XML/CFDI viajando hacia PAC y SAT */
function DocumentStack({ position, color }: { position: [number, number, number]; color: string }) {
  const ref = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.4;
  });
  return (
    <group ref={ref} position={position}>
      {[0, 0.12, 0.24, 0.36].map((y, i) => (
        <mesh key={i} position={[0, y, 0]}>
          <boxGeometry args={[0.8, 0.04, 1]} />
          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={0.4 - i * 0.08}
            metalness={0.6}
            roughness={0.3}
          />
        </mesh>
      ))}
    </group>
  );
}

function SealStamp({ position, active }: { position: [number, number, number]; active: number }) {
  const ref = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const pulse = (Math.sin(state.clock.elapsedTime * 2 - active) + 1) / 2;
    ref.current.scale.setScalar(0.9 + pulse * 0.25);
    ref.current.rotation.z = state.clock.elapsedTime * 0.5;
  });
  return (
    <group ref={ref} position={position}>
      <mesh>
        <torusGeometry args={[0.5, 0.06, 16, 48]} />
        <meshStandardMaterial color="#f59e0b" emissive="#fbbf24" emissiveIntensity={0.8} metalness={0.9} roughness={0.2} />
      </mesh>
      <mesh>
        <torusGeometry args={[0.32, 0.04, 16, 48]} />
        <meshStandardMaterial color="#f59e0b" emissive="#fbbf24" emissiveIntensity={0.6} metalness={0.9} roughness={0.2} />
      </mesh>
      <mesh>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial color="#fbbf24" emissive="#fde047" emissiveIntensity={1.5} />
      </mesh>
    </group>
  );
}

function FlyingPacket({ from, to, color, delay }: {
  from: [number, number, number];
  to: [number, number, number];
  color: string;
  delay: number;
}) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const t = ((state.clock.elapsedTime + delay) % 2.4) / 2.4;
    ref.current.position.x = THREE.MathUtils.lerp(from[0], to[0], t);
    ref.current.position.y = THREE.MathUtils.lerp(from[1], to[1], t) + Math.sin(t * Math.PI) * 0.5;
    ref.current.position.z = THREE.MathUtils.lerp(from[2], to[2], t);
    ref.current.rotation.x = t * Math.PI * 2;
    ref.current.rotation.y = t * Math.PI * 2;
    const s = Math.sin(t * Math.PI) * 0.2;
    ref.current.scale.setScalar(Math.max(s, 0.03));
  });
  return (
    <mesh ref={ref}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.8} metalness={0.7} roughness={0.3} />
    </mesh>
  );
}

export default function InvoiceFlow3D({ height = 320 }: { height?: number }) {
  return (
    <div style={{ height }} className="w-full">
      <Canvas camera={{ position: [0, 2, 5.5], fov: 50 }} gl={{ antialias: true, alpha: true }} dpr={[1, 2]}>
        <ambientLight intensity={0.55} />
        <pointLight position={[4, 5, 5]} intensity={1.2} color="#06b6d4" />
        <pointLight position={[-4, -2, 3]} intensity={0.7} color="#f59e0b" />
        <Float floatIntensity={0.4} rotationIntensity={0.15} speed={1.4}>
          <DocumentStack position={[-2.5, 0, 0]} color="#06b6d4" />
          <SealStamp position={[0, 0.3, 0]} active={0.5} />
          <DocumentStack position={[2.5, 0, 0]} color="#10b981" />
        </Float>
        {[0, 0.5, 1, 1.5].map((d) => (
          <FlyingPacket
            key={`a-${d}`}
            from={[-2.5, 0.4, 0]}
            to={[0, 0.3, 0]}
            color="#06b6d4"
            delay={d}
          />
        ))}
        {[0.2, 0.7, 1.2, 1.7].map((d) => (
          <FlyingPacket
            key={`b-${d}`}
            from={[0, 0.3, 0]}
            to={[2.5, 0.4, 0]}
            color="#10b981"
            delay={d}
          />
        ))}
      </Canvas>
    </div>
  );
}
