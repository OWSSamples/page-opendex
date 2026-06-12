"use client";

import { useRef, type ReactNode, type CSSProperties } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  brackets?: boolean;
};

export default function TechCard({ children, className = "", style, brackets = true }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    el.style.setProperty("--mx", `${x}%`);
    el.style.setProperty("--my", `${y}%`);
  }

  function handleLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--mx", `50%`);
    el.style.setProperty("--my", `50%`);
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`cf-tech-card ${className}`}
      style={style}
    >
      {brackets && (
        <>
          <span aria-hidden className="cf-tech-bracket cf-tech-bracket-tl" />
          <span aria-hidden className="cf-tech-bracket cf-tech-bracket-tr" />
          <span aria-hidden className="cf-tech-bracket cf-tech-bracket-bl" />
          <span aria-hidden className="cf-tech-bracket cf-tech-bracket-br" />
        </>
      )}
      {children}
    </div>
  );
}
