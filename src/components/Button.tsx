import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  DOMAttributes,
  ReactNode,
} from "react";
import { cn } from "@/lib/utils";

type IconPosition = "start" | "end";

export const buttonVariants = cva("opx-button", {
  variants: {
    variant: {
      primary: "opx-button-primary",
      secondary: "opx-button-secondary",
      ghost: "opx-button-ghost",
      accent: "opx-button-accent",
      inverse: "opx-button-inverse",
      destructive: "opx-button-destructive",
    },
    size: {
      sm: "opx-button-sm",
      md: "opx-button-md",
      lg: "opx-button-lg",
    },
  },
  defaultVariants: {
    size: "md",
    variant: "primary",
  },
});

type SharedButtonProps = {
  children: ReactNode;
  icon?: ReactNode;
  iconPosition?: IconPosition;
  loading?: boolean;
} & VariantProps<typeof buttonVariants>;

type SafeButtonAttributes = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  keyof DOMAttributes<HTMLButtonElement>
>;

type SafeAnchorAttributes = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  keyof DOMAttributes<HTMLAnchorElement> | "href"
>;

export type OpendexButtonProps = SafeButtonAttributes &
  SharedButtonProps & {
    asChild?: boolean;
  };

export type OpendexButtonLinkProps = SafeAnchorAttributes &
  SharedButtonProps & {
    href: string;
    disabled?: boolean;
  };

function ButtonContent({
  children,
  icon,
  iconPosition = "end",
  loading,
}: Pick<SharedButtonProps, "children" | "icon" | "iconPosition" | "loading">) {
  const spinner = loading ? <span aria-hidden className="opx-button-spinner" /> : null;
  const visualIcon = spinner ?? icon;

  return (
    <>
      {iconPosition === "start" ? visualIcon : null}
      <span className="opx-button-label">{children}</span>
      {iconPosition === "end" ? visualIcon : null}
    </>
  );
}

export function Button({
  asChild = false,
  children,
  className,
  disabled,
  icon,
  iconPosition,
  loading = false,
  size,
  type = "button",
  variant,
  ...props
}: OpendexButtonProps) {
  if (asChild) {
    return (
      <Slot
        className={cn(buttonVariants({ size, variant }), className)}
        aria-busy={loading ? true : undefined}
        aria-disabled={disabled || loading ? true : undefined}
        data-loading={loading ? "true" : undefined}
        data-disabled={disabled || loading ? "true" : undefined}
        {...props}
      >
        {children}
      </Slot>
    );
  }

  return (
    <button
      type={type}
      className={cn(buttonVariants({ size, variant }), className)}
      disabled={disabled || loading}
      aria-busy={loading ? true : undefined}
      data-loading={loading ? "true" : undefined}
      {...props}
    >
      <ButtonContent icon={icon} iconPosition={iconPosition} loading={loading}>
        {children}
      </ButtonContent>
    </button>
  );
}

export function ButtonLink({
  children,
  className,
  disabled = false,
  href,
  icon,
  iconPosition,
  loading = false,
  size,
  tabIndex,
  variant,
  ...props
}: OpendexButtonLinkProps) {
  const isUnavailable = disabled || loading;

  if (isUnavailable) {
    return (
      <span
        aria-disabled="true"
        className={cn(buttonVariants({ size, variant }), className)}
        data-disabled="true"
        data-loading={loading ? "true" : undefined}
        aria-busy={loading ? true : undefined}
        tabIndex={-1}
      >
        <ButtonContent icon={icon} iconPosition={iconPosition} loading={loading}>
          {children}
        </ButtonContent>
      </span>
    );
  }

  return (
    <Button asChild className={className} disabled={disabled} loading={loading} size={size} variant={variant}>
      <Link href={href} tabIndex={tabIndex} {...props}>
        <ButtonContent icon={icon} iconPosition={iconPosition} loading={loading}>
          {children}
        </ButtonContent>
      </Link>
    </Button>
  );
}

export default Button;
