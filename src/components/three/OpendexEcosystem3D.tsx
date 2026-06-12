"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Line, Text } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const nodes = [
  { label: "IDENTITY", color: "#f6821f", angle: 0 },
  { label: "FACTUR", color: "#ff500a", angle: (Math.PI * 2) / 3 },
  { label: "KIOSKO", color: "#ff9910", angle: (Math.PI * 4) / 3 },
];

function Core() {
  const group = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.38;
    group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.4) * 0.08;
  });

  return (
    <Float speed={1.4} floatIntensity={0.35} rotationIntensity={0.16}>
      <group ref={group}>
        <mesh>
          <icosahedronGeometry args={[0.92, 2]} />
          <meshStandardMaterial
            color="#fff3e0"
            emissive="#f6821f"
            emissiveIntensity={0.28}
            roughness={0.32}
            metalness={0.72}
            transparent
            opacity={0.92}
          />
        </mesh>
        <mesh>
          <icosahedronGeometry args={[1.18, 1]} />
          <meshBasicMaterial color="#f6821f" wireframe transparent opacity={0.22} />
        </mesh>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.44, 0.012, 8, 96]} />
          <meshBasicMaterial color="#f6821f" transparent opacity={0.34} />
        </mesh>
        <mesh rotation={[Math.PI / 2.25, 0, Math.PI / 6]}>
          <torusGeometry args={[1.86, 0.008, 8, 128]} />
          <meshBasicMaterial color="#ff9910" transparent opacity={0.24} />
        </mesh>
      </group>
    </Float>
  );
}

function ProductNode({ angle, color, label }: { angle: number; color: string; label: string }) {
  const group = useRef<THREE.Group>(null);
  const radius = 3.1;

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime * 0.32 + angle;
    group.current.position.set(Math.cos(t) * radius, Math.sin(t * 1.35) * 0.34, Math.sin(t) * radius);
    group.current.rotation.y = -t + Math.PI / 2;
  });

  return (
    <group ref={group}>
      <mesh>
        <boxGeometry args={[0.74, 0.74, 0.74]} />
        <meshStandardMaterial color="#fffaf3" emissive={color} emissiveIntensity={0.18} roughness={0.22} metalness={0.58} />
      </mesh>
      <mesh>
        <boxGeometry args={[0.9, 0.9, 0.9]} />
        <meshBasicMaterial color={color} wireframe transparent opacity={0.24} />
      </mesh>
      <mesh position={[0, 0.72, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.34, 0.01, 6, 48]} />
        <meshBasicMaterial color={color} transparent opacity={0.5} />
      </mesh>
      <Text
        position={[0, -0.86, 0]}
        fontSize={0.18}
        letterSpacing={0.08}
        color="#4a4a47"
        anchorX="center"
        anchorY="middle"
      >
        {label}
      </Text>
    </group>
  );
}

function Connections() {
  const lineGroup = useRef<THREE.Group>(null);
  const angles = useMemo(() => nodes.map((node) => node.angle), []);

  useFrame((state) => {
    if (!lineGroup.current) return;
    lineGroup.current.children.forEach((child, index) => {
      const line = child as THREE.Line;
      const t = state.clock.elapsedTime * 0.32 + angles[index];
      const x = Math.cos(t) * 3.1;
      const y = Math.sin(t * 1.35) * 0.34;
      const z = Math.sin(t) * 3.1;
      const positions = (line.geometry.attributes.position as THREE.BufferAttribute).array as Float32Array;
      positions[3] = x;
      positions[4] = y;
      positions[5] = z;
      line.geometry.attributes.position.needsUpdate = true;
    });
  });

  return (
    <group ref={lineGroup}>
      {nodes.map((node) => (
        <Line
          key={node.label}
          points={[[0, 0, 0], [3.1, 0, 0]]}
          color={node.color}
          lineWidth={1}
          transparent
          opacity={0.36}
          dashed
          dashScale={18}
          gapSize={5}
        />
      ))}
    </group>
  );
}

function DataPackets() {
  const group = useRef<THREE.Group>(null);
  const packets = useMemo(
    () => nodes.flatMap((node) => [0, 0.5].map((offset) => ({ ...node, offset }))),
    []
  );

  useFrame((state) => {
    if (!group.current) return;
    group.current.children.forEach((child, index) => {
      const mesh = child as THREE.Mesh;
      const packet = packets[index];
      const t = state.clock.elapsedTime * 0.32 + packet.angle;
      const target = new THREE.Vector3(Math.cos(t) * 3.1, Math.sin(t * 1.35) * 0.34, Math.sin(t) * 3.1);
      const travel = (state.clock.elapsedTime * 0.72 + packet.offset) % 1;
      mesh.position.copy(target.lerp(new THREE.Vector3(0, 0, 0), travel));
      mesh.scale.setScalar(Math.max(Math.sin(travel * Math.PI) * 0.09, 0.018));
    });
  });

  return (
    <group ref={group}>
      {packets.map((packet, index) => (
        <mesh key={`${packet.label}-${index}`}>
          <sphereGeometry args={[1, 10, 10]} />
          <meshBasicMaterial color={packet.color} transparent opacity={0.82} />
        </mesh>
      ))}
    </group>
  );
}

function HologramBase() {
  return (
    <group position={[0, -1.32, 0]}>
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[1.6, 3.8, 128]} />
        <meshBasicMaterial color="#f6821f" transparent opacity={0.08} side={THREE.DoubleSide} />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[3.8, 128]} />
        <meshBasicMaterial color="#fff3e0" transparent opacity={0.12} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.72} />
      <directionalLight position={[4, 6, 4]} intensity={1.1} color="#fff3e0" />
      <pointLight position={[-4, 2.5, -3]} intensity={0.7} color="#ff9910" />
      <HologramBase />
      <Core />
      <Connections />
      <DataPackets />
      {nodes.map((node) => (
        <ProductNode key={node.label} {...node} />
      ))}
    </>
  );
}

export default function OpendexEcosystem3D({ height = 360 }: { height?: number }) {
  return (
    <div style={{ height }} className="opx-ecosystem-3d relative w-full overflow-hidden">
      <div className="opx-ecosystem-3d-grid" aria-hidden />
      <Canvas
        camera={{ position: [0, 1.25, 6.5], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        dpr={[1, 1.75]}
      >
        <Scene />
      </Canvas>
      <div className="opx-ecosystem-3d-caption" aria-hidden>
        <span>ecosystem</span>
        <strong>identity · invoice · kiosko</strong>
      </div>
    </div>
  );
}
