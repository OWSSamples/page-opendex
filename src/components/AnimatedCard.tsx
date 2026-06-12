import { ReactNode } from "react";

export default function AnimatedCard({ children }: { children: ReactNode }) {
  return (
    <div className="transition-transform duration-300 hover:scale-105 hover:shadow-2xl rounded-xl">
      {children}
    </div>
  );
}
