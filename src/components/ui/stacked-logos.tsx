"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface StackedLogosProps {
  logoGroups: React.ReactNode[][];
  duration?: number;
  stagger?: number;
  logoWidth?: string;
  className?: string;
}

export function StackedLogos({
  logoGroups,
  duration = 30,
  stagger = 0,
  logoWidth = "200px",
  className,
}: StackedLogosProps) {
  const itemCount = logoGroups[0]?.length || 0;
  const columns = logoGroups.length;
  const containerRef = React.useRef<HTMLDivElement>(null);
  const gridRef = React.useRef<HTMLDivElement>(null);

  const handleMouseMove = React.useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || !gridRef.current) return;

    const rect = gridRef.current.getBoundingClientRect();
    containerRef.current.style.setProperty("--mouse-x", `${event.clientX - rect.left}px`);
    containerRef.current.style.setProperty("--mouse-y", `${event.clientY - rect.top}px`);
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn("stacked-logos relative w-auto", className)}
      style={
        {
          "--duration": duration,
          "--items": itemCount,
          "--lists": columns,
          "--stagger": stagger,
          "--logo-width": logoWidth,
        } as React.CSSProperties
      }
      onMouseMove={handleMouseMove}
    >
      <div
        ref={gridRef}
        className="relative mx-auto grid w-fit"
        style={{ gridTemplateColumns: `repeat(${columns}, ${logoWidth})` }}
      >
        <div className="stacked-logos__glow pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300" />
        <div className="stacked-logos__border-glow pointer-events-none absolute inset-0 z-20 opacity-0 transition-opacity duration-300" />
        {logoGroups.map((logos, groupIndex) => (
          <div
            key={groupIndex}
            className="stacked-logos__cell relative grid"
            style={
              {
                "--index": groupIndex,
                gridTemplate: "1fr / 1fr",
              } as React.CSSProperties
            }
          >
            {logos.map((logo, logoIndex) => (
              <div
                key={logoIndex}
                className="stacked-logos__item col-start-1 row-start-1 grid place-items-center"
                data-logo
                style={
                  {
                    "--i": logoIndex,
                    animationDelay: `${((duration / Math.max(itemCount, 1)) * logoIndex + groupIndex * stagger) * -1}s`,
                  } as React.CSSProperties
                }
              >
                <div className="stacked-logos__logo flex h-8 w-full items-center justify-center">
                  {logo}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default StackedLogos;
