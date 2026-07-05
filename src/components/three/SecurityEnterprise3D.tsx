"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Line, Text } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const OPX_BLUE = 0x4f7dff;
const OPX_CYAN = 0x55d7ff;
const OPX_WHITE = 0xf7f7f8;

const modules = [
  { label: "RBAC", angle: 0, color: OPX_BLUE },
  { label: "SOC2", angle: (Math.PI * 2) / 3, color: OPX_CYAN },
  { label: "SSO", angle: (Math.PI * 4) / 3, color: OPX_BLUE },
];

function CoreVault() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += delta * 0.32;
    groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.35) * 0.08;
  });

  return (
    <Float speed={1.2} floatIntensity={0.22} rotationIntensity={0.1}>
      <group ref={groupRef}>
        <mesh>
          <dodecahedronGeometry args={[0.86, 0]} />
          <meshStandardMaterial
            color={OPX_WHITE}
            emissive={OPX_BLUE}
            emissiveIntensity={0.38}
            metalness={0.86}
            roughness={0.18}
          />
        </mesh>
        <mesh>
          <dodecahedronGeometry args={[1.06, 0]} />
          <meshBasicMaterial color={OPX_CYAN} wireframe transparent opacity={0.2} />
        </mesh>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.5, 0.01, 8, 128]} />
          <meshBasicMaterial color={OPX_CYAN} transparent opacity={0.42} />
        </mesh>
        <mesh rotation={[Math.PI / 2.35, 0, Math.PI / 4]}>
          <torusGeometry args={[1.95, 0.008, 8, 128]} />
          <meshBasicMaterial color={OPX_BLUE} transparent opacity={0.28} />
        </mesh>
      </group>
    </Float>
  );
}

function SecurityModule({
  angle,
  color,
  label,
}: {
  angle: number;
  color: number;
  label: string;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const radius = 3.05;

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime * 0.26 + angle;
    groupRef.current.position.set(Math.cos(t) * radius, Math.sin(t * 1.4) * 0.28, Math.sin(t) * radius);
    groupRef.current.rotation.y = -t + Math.PI / 2;
  });

  return (
    <group ref={groupRef}>
      <mesh>
        <boxGeometry args={[0.92, 0.52, 0.18]} />
        <meshStandardMaterial
          color={0x101827}
          emissive={color}
          emissiveIntensity={0.34}
          metalness={0.74}
          roughness={0.22}
        />
      </mesh>
      <mesh position={[0, 0, 0.11]}>
        <boxGeometry args={[1.05, 0.66, 0.02]} />
        <meshBasicMaterial color={color} transparent opacity={0.18} />
      </mesh>
      <Text
        position={[0, -0.58, 0.12]}
        fontSize={0.18}
        letterSpacing={0.04}
        color="#f7f7f8"
        anchorX="center"
        anchorY="middle"
      >
        {label}
      </Text>
    </group>
  );
}

function Connections() {
  const groupRef = useRef<THREE.Group>(null);
  const angles = useMemo(() => modules.map((item) => item.angle), []);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.children.forEach((child, index) => {
      const line = child as THREE.Line;
      const t = state.clock.elapsedTime * 0.26 + angles[index];
      const positions = (line.geometry.attributes.position as THREE.BufferAttribute).array as Float32Array;
      positions[3] = Math.cos(t) * 3.05;
      positions[4] = Math.sin(t * 1.4) * 0.28;
      positions[5] = Math.sin(t) * 3.05;
      line.geometry.attributes.position.needsUpdate = true;
    });
  });

  return (
    <group ref={groupRef}>
      {modules.map((item) => (
        <Line
          key={item.label}
          points={[[0, 0, 0], [3.05, 0, 0]]}
          color={item.color}
          lineWidth={1.2}
          transparent
          opacity={0.44}
          dashed
          dashScale={18}
          gapSize={4}
        />
      ))}
    </group>
  );
}

function PulseField() {
  return (
    <group position={[0, -1.24, 0]}>
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[1.15, 3.7, 160]} />
        <meshBasicMaterial color={OPX_BLUE} transparent opacity={0.1} side={THREE.DoubleSide} />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[3.9, 4.0, 160]} />
        <meshBasicMaterial color={OPX_CYAN} transparent opacity={0.16} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.42} />
      <directionalLight position={[3.6, 4.4, 4.8]} intensity={1.4} color={OPX_WHITE} />
      <pointLight position={[-3.2, 1.4, 2.8]} intensity={1.5} color={OPX_BLUE} />
      <pointLight position={[3.2, -0.8, -2.8]} intensity={1.1} color={OPX_CYAN} />
      <PulseField />
      <CoreVault />
      <Connections />
      {modules.map((item) => (
        <SecurityModule key={item.label} {...item} />
      ))}
    </>
  );
}

export default function SecurityEnterprise3D({ height = 460 }: { height?: number }) {
  return (
    <div className="opx-security-enterprise-3d" style={{ height }}>
      <div className="opx-security-enterprise-3d-grid" aria-hidden />
      <Canvas
        camera={{ position: [0, 1.15, 6.7], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        dpr={[1, 1.75]}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
