"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Line, OrbitControls } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const PRODUCTS = [
  { name: "Auth", color: "#7c3aed", angle: 0 },
  { name: "Invoice", color: "#06b6d4", angle: (Math.PI * 2) / 3 },
  { name: "Kiosko", color: "#f59e0b", angle: (Math.PI * 4) / 3 },
];

function Core() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, dt) => {
    if (!ref.current) return;
    ref.current.rotation.x += dt * 0.3;
    ref.current.rotation.y += dt * 0.4;
  });
  return (
    <Float floatIntensity={0.6} rotationIntensity={0.3} speed={1.5}>
      <mesh ref={ref}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#1e1b4b"
          emissive="#7c3aed"
          emissiveIntensity={0.6}
          wireframe
        />
      </mesh>
      <mesh>
        <icosahedronGeometry args={[0.7, 0]} />
        <meshStandardMaterial
          color="#7c3aed"
          emissive="#a78bfa"
          emissiveIntensity={0.9}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
}

function OrbitingNode({ angle, color }: { angle: number; color: string }) {
  const ref = useRef<THREE.Group>(null);
  const dataRef = useRef<THREE.Mesh>(null);
  const radius = 3.2;

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime * 0.35 + angle;
    ref.current.position.x = Math.cos(t) * radius;
    ref.current.position.z = Math.sin(t) * radius;
    ref.current.position.y = Math.sin(t * 2) * 0.3;
    ref.current.rotation.y = -t;
    if (dataRef.current) {
      const pulse = (Math.sin(state.clock.elapsedTime * 2 + angle) + 1) / 2;
      dataRef.current.scale.setScalar(0.08 + pulse * 0.12);
    }
  });

  return (
    <group ref={ref}>
      <mesh>
        <boxGeometry args={[0.7, 0.7, 0.7]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} metalness={0.6} roughness={0.3} />
      </mesh>
      <mesh ref={dataRef} position={[0, 0.6, 0]}>
        <sphereGeometry args={[1, 16, 16]} />
        <meshBasicMaterial color={color} transparent opacity={0.7} />
      </mesh>
      <Label color={color} />
    </group>
  );
}

function Label({ color }: { color: string }) {
  return (
    <mesh position={[0, -0.7, 0]}>
      <planeGeometry args={[1.2, 0.3]} />
      <meshBasicMaterial color={color} transparent opacity={0.15} />
      {/* Drei Html could be used but keeping zero text deps */}
      <mesh>
        <ringGeometry args={[0.45, 0.5, 32]} />
        <meshBasicMaterial color={color} />
      </mesh>
      <meshBasicMaterial attach="material" color={color} transparent opacity={0.3} />
    </mesh>
  );
}

function ConnectionLines() {
  const ref = useRef<THREE.Group>(null);
  const points = useMemo(() => {
    return PRODUCTS.map((p) => p.angle);
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.children.forEach((child, i) => {
      const line = child as THREE.Line;
      const t = state.clock.elapsedTime * 0.35 + points[i];
      const x = Math.cos(t) * 3.2;
      const z = Math.sin(t) * 3.2;
      const y = Math.sin(t * 2) * 0.3;
      const positions = (line.geometry.attributes.position as THREE.BufferAttribute).array as Float32Array;
      positions[3] = x;
      positions[4] = y;
      positions[5] = z;
      line.geometry.attributes.position.needsUpdate = true;
    });
  });

  return (
    <group ref={ref}>
      {PRODUCTS.map((p, i) => (
        <Line
          key={i}
          points={[
            [0, 0, 0],
            [3.2, 0, 0],
          ]}
          color={p.color}
          lineWidth={1.5}
          transparent
          opacity={0.5}
          dashed
          dashScale={20}
          gapSize={4}
        />
      ))}
    </group>
  );
}

function DataPackets() {
  const groupRef = useRef<THREE.Group>(null);
  const packets = useMemo(
    () =>
      PRODUCTS.flatMap((p) =>
        [0, 0.33, 0.66].map((offset) => ({ color: p.color, baseAngle: p.angle, offset }))
      ),
    []
  );

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.children.forEach((child, i) => {
      const m = child as THREE.Mesh;
      const { baseAngle, offset } = packets[i];
      const orbitT = state.clock.elapsedTime * 0.35 + baseAngle;
      const x = Math.cos(orbitT) * 3.2;
      const z = Math.sin(orbitT) * 3.2;
      const y = Math.sin(orbitT * 2) * 0.3;
      const travel = (state.clock.elapsedTime * 0.6 + offset) % 1;
      m.position.x = THREE.MathUtils.lerp(x, 0, travel);
      m.position.y = THREE.MathUtils.lerp(y, 0, travel);
      m.position.z = THREE.MathUtils.lerp(z, 0, travel);
      const scale = Math.sin(travel * Math.PI) * 0.1;
      m.scale.setScalar(Math.max(scale, 0.02));
    });
  });

  return (
    <group ref={groupRef}>
      {packets.map((p, i) => (
        <mesh key={i}>
          <sphereGeometry args={[1, 8, 8]} />
          <meshBasicMaterial color={p.color} />
        </mesh>
      ))}
    </group>
  );
}

export default function CoreScene3D({ height = 480 }: { height?: number }) {
  return (
    <div style={{ height }} className="w-full">
      <Canvas
        camera={{ position: [0, 1.5, 7], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} intensity={1.2} color="#a78bfa" />
        <pointLight position={[-5, -3, -3]} intensity={0.8} color="#22d3ee" />
        <Core />
        <ConnectionLines />
        <DataPackets />
        {PRODUCTS.map((p) => (
          <OrbitingNode key={p.name} angle={p.angle} color={p.color} />
        ))}
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
}
