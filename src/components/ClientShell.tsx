"use client";

import { ReactNode } from "react";
import dynamic from "next/dynamic";

// Dynamically import elements that run strictly in the client-side runtime.
const SmartCursor = dynamic(() => import("./SmartCursor"), { ssr: false });

export default function ClientShell({ children }: { children: ReactNode }) {
  return (
    <>
      {/* Smart Spring Cursor */}
      <SmartCursor />
      
      {/* Main page content */}
      {children}
    </>
  );
}
