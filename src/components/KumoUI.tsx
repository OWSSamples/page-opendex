"use client";

import Link from "next/link";
import type {
  ButtonHTMLAttributes,
  InputHTMLAttributes,
  ReactNode,
  TextareaHTMLAttributes,
} from "react";

type Variant = "primary" | "outline" | "secondary";
type Size = "sm" | "base" | "lg";

const buttonBase =
  "opx-json-button select-none whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed";

const sizeMap: Record<Size, string> = {
  sm: "",
  base: "",
  lg: "",
};

const variantMap: Record<Variant, string> = {
  primary: "opx-json-button-primary",
  outline: "opx-json-button-secondary",
  secondary: "opx-json-button-secondary",
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
};

export function KumoButton({
  variant = "primary",
  size = "base",
  className = "",
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      {...rest}
      className={`${buttonBase} ${sizeMap[size]} ${variantMap[variant]} ${className}`}
    >
      {children}
    </button>
  );
}

type LinkButtonProps = {
  href: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
  target?: string;
  rel?: string;
};

export function KumoLinkButton({
  href,
  variant = "primary",
  size = "base",
  className = "",
  children,
  target,
  rel,
}: LinkButtonProps) {
  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      className={`${buttonBase} ${sizeMap[size]} ${variantMap[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}

export function KumoBadge({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`opx-json-badge ${className}`}
    >
      {children}
    </span>
  );
}

export function KumoCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`opx-json-card ${className}`}
    >
      {children}
    </div>
  );
}

const inputBase =
  "opx-json-input";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export function KumoInput({ className = "", ...rest }: InputProps) {
  return <input {...rest} className={`${inputBase} ${className}`} />;
}

export function KumoInputArea({ className = "", ...rest }: InputProps) {
  return <input {...rest} className={`${inputBase} ${className}`} />;
}

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

export function KumoTextarea({ className = "", ...rest }: TextareaProps) {
  return (
    <textarea
      {...rest}
      className={`${inputBase} opx-json-textarea ${className}`}
    />
  );
}

export function KumoLabel({
  children,
  required,
  className = "",
}: {
  children: ReactNode;
  required?: boolean;
  className?: string;
}) {
  return (
    <label className={`opx-json-label ${className}`}>
      {children}
      {required && <span className="opx-json-status-accent">*</span>}
    </label>
  );
}

export function KumoField({
  label,
  required,
  description,
  children,
  className = "",
}: {
  label?: ReactNode;
  required?: boolean;
  description?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`opx-json-field ${className}`}>
      {label && <KumoLabel required={required}>{label}</KumoLabel>}
      {children}
      {description && (
        <span className="opx-json-label">{description}</span>
      )}
    </div>
  );
}
