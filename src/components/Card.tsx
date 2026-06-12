"use client";

import React, { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: "blue" | "cyan" | "green" | "purple" | "white";
  tiltAmount?: number;
}

export default function Card({
  children,
  className = "",
  glowColor = "cyan",
  tiltAmount = 10,
}: CardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Position motion values for mouse relative to card
  const rotateXVal = useMotionValue(0);
  const rotateYVal = useMotionValue(0);
  const spotlightXVal = useMotionValue(0);
  const spotlightYVal = useMotionValue(0);

  // Spring physics for smooth rotations
  const rotateX = useSpring(rotateXVal, { stiffness: 150, damping: 20 });
  const rotateY = useSpring(rotateYVal, { stiffness: 150, damping: 20 });
  const spotlightX = useSpring(spotlightXVal, { stiffness: 300, damping: 30 });
  const spotlightY = useSpring(spotlightYVal, { stiffness: 300, damping: 30 });

  const glowColorMap = {
    blue: "rgba(11, 37, 255, 0.15)",
    cyan: "rgba(10, 247, 244, 0.15)",
    green: "rgba(70, 187, 39, 0.15)",
    purple: "rgba(47, 88, 255, 0.15)",
    white: "rgba(255, 255, 255, 0.08)",
  };

  const borderGlowMap = {
    blue: "group-hover:border-stratos-500/30",
    cyan: "group-hover:border-atoll-400/30",
    green: "group-hover:border-feijoa-400/30",
    purple: "group-hover:border-stratos-400/30",
    white: "group-hover:border-white/20",
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Set spotlight center coordinates
    spotlightXVal.set(x);
    spotlightYVal.set(y);

    // Calculate rotation angles based on mouse position relative to card center
    const width = rect.width;
    const height = rect.height;
    const centerX = width / 2;
    const centerY = height / 2;
    
    // Map bounds to tilt range
    const tiltX = -((y - centerY) / centerY) * tiltAmount;
    const tiltY = ((x - centerX) / centerX) * tiltAmount;

    rotateXVal.set(tiltX);
    rotateYVal.set(tiltY);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    rotateXVal.set(0);
    rotateYVal.set(0);
  };

  // Convert spotlight positions into radial gradients
  const background = useTransform(
    [spotlightX, spotlightY],
    ([x, y]) => `radial-gradient(circle 250px at ${x}px ${y}px, ${glowColorMap[glowColor]}, transparent 80%)`
  );

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: rotateX,
        rotateY: rotateY,
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      className={`
        group relative w-full rounded-lg bg-black-950/42 backdrop-blur-xl border border-white/6 card-lit-border transition-colors duration-500 overflow-hidden
        ${borderGlowMap[glowColor]}
        ${className}
      `}
    >
      {/* Dynamic spotlight tracking overlay */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: background,
          opacity: isHovered ? 1 : 0,
          transition: "opacity 0.5s ease",
        }}
      />

      {/* Internal Content (Pushed above overlay so it remains readable/clickable) */}
      <div 
        className="relative z-10 w-full h-full"
        style={{ transform: "translateZ(20px)" }} // 3D depth pop effect for card contents
      >
        {children}
      </div>
    </motion.div>
  );
}
