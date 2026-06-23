import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { DOMAttributes, HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

export const cardVariants = cva("opx-card", {
  variants: {
    tone: {
      neutral: "",
      accent: "opx-card-accent",
      dark: "opx-card-dark",
    },
    density: {
      comfortable: "opx-card-comfortable",
      compact: "opx-card-compact",
      none: "",
    },
    interactive: {
      true: "opx-card-interactive",
      false: "",
    },
  },
  defaultVariants: {
    density: "comfortable",
    interactive: false,
    tone: "neutral",
  },
});

type SafeCardAttributes = Omit<HTMLAttributes<HTMLDivElement>, keyof DOMAttributes<HTMLDivElement>>;

export type CardProps = SafeCardAttributes & {
  children: ReactNode;
  asChild?: boolean;
} & VariantProps<typeof cardVariants>;

export default function Card({
  asChild = false,
  children,
  className,
  density = "comfortable",
  interactive = false,
  tone = "neutral",
  ...props
}: CardProps) {
  const Comp = asChild ? Slot : "div";

  return (
    <Comp
      className={cn(cardVariants({ density, interactive, tone }), className)}
      data-interactive={interactive ? "true" : undefined}
      {...props}
    >
      {children}
    </Comp>
  );
}
