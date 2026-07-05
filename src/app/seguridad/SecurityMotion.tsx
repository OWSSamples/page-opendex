"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { type ReactNode, useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function SecurityMotion({ children }: { children: ReactNode }) {
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const ctx = gsap.context(() => {
      const revealGroups = gsap.utils.toArray<HTMLElement>(
        [
          ".opx-page-header-copy",
          ".opx-security-proof-title",
          ".opx-security-proof-media",
          ".opx-security-proof-copy",
          ".opx-security-enterprise-head",
          ".opx-security-enterprise-copy",
          ".opx-security-enterprise-visual-suite",
          ".opx-trust-section-heading",
          ".opx-trust-operating-copy",
          ".opx-trust-docs-copy",
          ".opx-trust-docs-board",
          ".opx-trust-cta-inner > div",
        ].join(", "),
        root
      );

      gsap.set(revealGroups, {
        autoAlpha: 0,
        y: 28,
        filter: "blur(10px)",
      });

      revealGroups.forEach((element) => {
        gsap.to(element, {
          autoAlpha: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 84%",
            once: true,
          },
        });
      });

      const staggerGroups = [
        ".opx-security-proof-signal",
        ".opx-security-proof-item",
        ".opx-security-enterprise-capabilities > div",
        ".opx-trust-resource-tile",
        ".opx-trust-operating-card",
        ".opx-trust-doc-row",
      ];

      staggerGroups.forEach((selector) => {
        const items = gsap.utils.toArray<HTMLElement>(selector, root);
        if (!items.length) return;

        gsap.set(items, {
          autoAlpha: 0,
          y: 22,
          scale: 0.985,
          filter: "blur(8px)",
        });

        gsap.to(items, {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: 0.72,
          ease: "power3.out",
          stagger: {
            each: 0.06,
            from: "start",
          },
          scrollTrigger: {
            trigger: items[0].parentElement ?? items[0],
            start: "top 82%",
            once: true,
          },
        });
      });

      gsap.to(".opx-security-proof-media-frame", {
        yPercent: -5,
        ease: "none",
        scrollTrigger: {
          trigger: ".opx-security-proof-section",
          start: "top bottom",
          end: "bottom top",
          scrub: 0.8,
        },
      });

      gsap.to(".opx-security-enterprise-3d", {
        y: -18,
        ease: "none",
        scrollTrigger: {
          trigger: ".opx-security-enterprise-docs",
          start: "top bottom",
          end: "bottom top",
          scrub: 0.9,
        },
      });

      gsap.to(".opx-trust-operating-suite", {
        yPercent: -3,
        ease: "none",
        scrollTrigger: {
          trigger: ".opx-trust-operating-section",
          start: "top bottom",
          end: "bottom top",
          scrub: 0.8,
        },
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={rootRef} className="opx-security-page">
      {children}
    </main>
  );
}
