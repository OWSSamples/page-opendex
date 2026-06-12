"use client";

// Component adapted from React Bits — github.com/ansh-dhanani
// mathjs dependency is not required: all math is implemented inline.

import React, { useEffect, useRef, useState, useMemo } from "react";
import "./GradualBlur.css";

/* ─── Types ──────────────────────────────────────────────────────────── */

type Position = "top" | "bottom" | "left" | "right";
type Curve = "linear" | "bezier" | "ease-in" | "ease-out" | "ease-in-out";
type Animated = boolean | "scroll";
type Target = "parent" | "page";
type PresetKey =
  | "top" | "bottom" | "left" | "right"
  | "subtle" | "intense" | "smooth" | "sharp"
  | "header" | "footer" | "sidebar"
  | "page-header" | "page-footer";

export interface GradualBlurProps {
  position?: Position;
  strength?: number;
  height?: string;
  width?: string;
  divCount?: number;
  exponential?: boolean;
  curve?: Curve;
  opacity?: number;
  animated?: Animated;
  duration?: string;
  easing?: string;
  hoverIntensity?: number;
  target?: Target;
  preset?: PresetKey;
  responsive?: boolean;
  zIndex?: number;
  onAnimationComplete?: () => void;
  className?: string;
  style?: React.CSSProperties;
}

/* ─── Constants ──────────────────────────────────────────────────────── */

const DEFAULT_CONFIG: Required<Omit<GradualBlurProps, "width" | "hoverIntensity" | "preset" | "onAnimationComplete">> = {
  position: "bottom",
  strength: 2,
  height: "6rem",
  divCount: 5,
  exponential: false,
  zIndex: 1000,
  animated: false,
  duration: "0.3s",
  easing: "ease-out",
  opacity: 1,
  curve: "linear",
  responsive: false,
  target: "parent",
  className: "",
  style: {},
};

const PRESETS: Record<PresetKey, Partial<GradualBlurProps>> = {
  top:           { position: "top",    height: "6rem" },
  bottom:        { position: "bottom", height: "6rem" },
  left:          { position: "left",   height: "6rem" },
  right:         { position: "right",  height: "6rem" },
  subtle:        { height: "4rem",  strength: 1,   opacity: 0.8, divCount: 3 },
  intense:       { height: "10rem", strength: 4,   divCount: 8,  exponential: true },
  smooth:        { height: "8rem",  curve: "bezier", divCount: 10 },
  sharp:         { height: "5rem",  curve: "linear", divCount: 4 },
  header:        { position: "top",    height: "8rem", curve: "ease-out" },
  footer:        { position: "bottom", height: "8rem", curve: "ease-out" },
  sidebar:       { position: "left",   height: "6rem", strength: 2.5 },
  "page-header": { position: "top",    height: "10rem", target: "page", strength: 3 },
  "page-footer": { position: "bottom", height: "10rem", target: "page", strength: 3 },
};

const CURVE_FUNCTIONS: Record<Curve, (p: number) => number> = {
  linear:       (p) => p,
  bezier:       (p) => p * p * (3 - 2 * p),
  "ease-in":    (p) => p * p,
  "ease-out":   (p) => 1 - Math.pow(1 - p, 2),
  "ease-in-out":(p) => p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2,
};

const getGradientDirection = (position: Position): string =>
  ({ top: "to top", bottom: "to bottom", left: "to left", right: "to right" })[position];

const debounce = <T extends unknown[]>(fn: (...args: T) => void, wait: number) => {
  let t: ReturnType<typeof setTimeout>;
  return (...args: T) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...args), wait);
  };
};

/* ─── Hooks ──────────────────────────────────────────────────────────── */

function useResponsiveDimension(responsive: boolean, value: string | undefined): string | undefined {
  const [current, setCurrent] = useState(value);
  useEffect(() => {
    if (!responsive) return;
    const calc = () => setCurrent(value);
    const debounced = debounce(calc, 100);
    calc();
    window.addEventListener("resize", debounced);
    return () => window.removeEventListener("resize", debounced);
  }, [responsive, value]);
  return responsive ? current : value;
}

function useIntersectionObserver(ref: React.RefObject<Element | null>, shouldObserve: boolean): boolean {
  const [isVisible, setIsVisible] = useState(!shouldObserve);
  useEffect(() => {
    if (!shouldObserve || !ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, shouldObserve]);
  return isVisible;
}

/* ─── Component ──────────────────────────────────────────────────────── */

function GradualBlur(props: GradualBlurProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const config = useMemo(() => {
    const presetConfig = props.preset && PRESETS[props.preset] ? PRESETS[props.preset] : {};
    return { ...DEFAULT_CONFIG, ...presetConfig, ...props } as Required<GradualBlurProps>;
  }, [props]);

  const responsiveHeight = useResponsiveDimension(config.responsive, config.height);
  const responsiveWidth  = useResponsiveDimension(config.responsive, config.width);
  const isVisible = useIntersectionObserver(containerRef, config.animated === "scroll");

  /* Blur layers */
  const blurDivs = useMemo(() => {
    const divs: React.ReactNode[] = [];
    const increment = 100 / config.divCount;
    const currentStrength =
      isHovered && config.hoverIntensity
        ? config.strength * config.hoverIntensity
        : config.strength;
    const curveFunc = CURVE_FUNCTIONS[config.curve as Curve] ?? CURVE_FUNCTIONS.linear;

    for (let i = 1; i <= config.divCount; i++) {
      let progress = i / config.divCount;
      progress = curveFunc(progress);

      const blurValue = config.exponential
        ? Math.pow(2, progress * 4) * 0.0625 * currentStrength
        : 0.0625 * (progress * config.divCount + 1) * currentStrength;

      const p1 = Math.round((increment * i - increment) * 10) / 10;
      const p2 = Math.round(increment * i * 10) / 10;
      const p3 = Math.round((increment * i + increment) * 10) / 10;
      const p4 = Math.round((increment * i + increment * 2) * 10) / 10;

      let gradient = `transparent ${p1}%, black ${p2}%`;
      if (p3 <= 100) gradient += `, black ${p3}%`;
      if (p4 <= 100) gradient += `, transparent ${p4}%`;

      const direction = getGradientDirection(config.position as Position);
      const divStyle: React.CSSProperties = {
        position: "absolute",
        inset: "0",
        maskImage: `linear-gradient(${direction}, ${gradient})`,
        WebkitMaskImage: `linear-gradient(${direction}, ${gradient})`,
        backdropFilter: `blur(${blurValue.toFixed(3)}rem)`,
        WebkitBackdropFilter: `blur(${blurValue.toFixed(3)}rem)`,
        opacity: config.opacity,
        transition:
          config.animated && config.animated !== "scroll"
            ? `backdrop-filter ${config.duration} ${config.easing}`
            : undefined,
      };

      divs.push(<div key={i} style={divStyle} />);
    }
    return divs;
  }, [config, isHovered]);

  /* Container style */
  const containerStyle = useMemo((): React.CSSProperties => {
    const isVertical   = ["top", "bottom"].includes(config.position);
    const isHorizontal = ["left", "right"].includes(config.position);
    const isPageTarget = config.target === "page";

    const base: React.CSSProperties = {
      position: isPageTarget ? "fixed" : "absolute",
      pointerEvents: config.hoverIntensity ? "auto" : "none",
      opacity: isVisible ? 1 : 0,
      transition: config.animated ? `opacity ${config.duration} ${config.easing}` : undefined,
      zIndex: isPageTarget ? config.zIndex + 100 : config.zIndex,
      ...config.style,
    };

    if (isVertical) {
      base.height = responsiveHeight;
      base.width  = responsiveWidth ?? "100%";
      if (config.position === "top")    { base.top = 0; }
      if (config.position === "bottom") { base.bottom = 0; }
      base.left  = 0;
      base.right = 0;
    } else if (isHorizontal) {
      base.width  = responsiveWidth ?? responsiveHeight;
      base.height = "100%";
      if (config.position === "left")  { base.left = 0; }
      if (config.position === "right") { base.right = 0; }
      base.top    = 0;
      base.bottom = 0;
    }

    return base;
  }, [config, responsiveHeight, responsiveWidth, isVisible]);

  /* Scroll animation callback */
  useEffect(() => {
    if (isVisible && config.animated === "scroll" && config.onAnimationComplete) {
      const ms = parseFloat(config.duration) * 1000;
      const t  = setTimeout(() => config.onAnimationComplete?.(), ms);
      return () => clearTimeout(t);
    }
  }, [isVisible, config]);

  return (
    <div
      ref={containerRef}
      className={[
        "gradual-blur",
        config.target === "page" ? "gradual-blur-page" : "gradual-blur-parent",
        config.className,
      ].filter(Boolean).join(" ")}
      style={containerStyle}
      onMouseEnter={config.hoverIntensity ? () => setIsHovered(true)  : undefined}
      onMouseLeave={config.hoverIntensity ? () => setIsHovered(false) : undefined}
    >
      <div
        className="gradual-blur-inner"
        style={{ position: "relative", width: "100%", height: "100%" }}
      >
        {blurDivs}
      </div>
    </div>
  );
}

const GradualBlurMemo = React.memo(GradualBlur);
GradualBlurMemo.displayName = "GradualBlur";

export default GradualBlurMemo;
