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
  "opx-notched-btn inline-flex items-center justify-center gap-2 font-semibold transition select-none whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-iris-500/60 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

const sizeMap: Record<Size, string> = {
  sm: "h-9 px-3.5 text-[13px]",
  base: "h-10 px-4 text-[13.5px]",
  lg: "h-12 px-6 text-[15px]",
};

const variantMap: Record<Variant, string> = {
  primary:
    "opx-notched-btn-filled",
  outline:
    "opx-notched-btn-outline backdrop-blur",
  secondary:
    "opx-notched-btn-outline bg-ink-100",
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
      className={`inline-flex items-center gap-1 rounded-full bg-ink-100 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-ink-700 ring-1 ring-ink-200 ${className}`}
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
      className={`rounded-2xl border border-ink-200 bg-white p-6 shadow-sm ${className}`}
    >
      {children}
    </div>
  );
}

const inputBase =
  "w-full rounded-xl border border-ink-200 bg-white px-3.5 py-2.5 text-[14px] text-ink-950 placeholder:text-ink-400 transition focus:border-iris-400 focus:outline-none focus:ring-4 focus:ring-iris-100";

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
      className={`${inputBase} min-h-[100px] resize-y ${className}`}
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
    <label className={`text-[12.5px] font-semibold text-ink-700 ${className}`}>
      {children}
      {required && <span className="ml-0.5 text-iris-600">*</span>}
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
    <div className={`grid gap-1.5 ${className}`}>
      {label && <KumoLabel required={required}>{label}</KumoLabel>}
      {children}
      {description && (
        <span className="text-[11.5px] text-ink-500">{description}</span>
      )}
    </div>
  );
}
