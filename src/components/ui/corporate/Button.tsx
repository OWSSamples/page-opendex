'use client'
import { type MouseEvent, type ReactNode } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps {
  children: ReactNode
  href?: string
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
  onClick?: (event: MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  icon?: ReactNode
  iconPosition?: 'start' | 'end'
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'opx-json-button-primary',
  secondary: 'opx-json-button-secondary',
  outline: 'opx-json-button-secondary',
  ghost: 'opx-json-button-secondary',
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: '',
  md: '',
  lg: '',
}

const iconSizeMap = {
  sm: 'h-3 w-3',
  md: 'h-3 w-3',
  lg: 'h-3 w-3',
}

export default function CorporateButton({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className,
  onClick,
  type = 'button',
  disabled = false,
  icon,
  iconPosition = 'end',
}: ButtonProps) {
  const isDisabled = disabled
  const base = cn(
    'opx-json-button opx-corporate-button disabled:opacity-50 disabled:pointer-events-none',
    variantStyles[variant],
    sizeStyles[size],
    isDisabled && 'pointer-events-none opacity-50',
    className
  )

  const iconSize = iconSizeMap[size]

  if (href) {
    return (
      <Link
        href={href}
        className={base}
        onClick={onClick}
        aria-disabled={isDisabled || undefined}
        tabIndex={isDisabled ? -1 : undefined}
      >
        {icon && iconPosition === 'start' && <span className={iconSize}>{icon}</span>}
        {children}
        {icon && iconPosition === 'end' && <span className={iconSize}>{icon}</span>}
      </Link>
    )
  }

  return (
    <button
      type={type}
      className={base}
      onClick={onClick}
      disabled={isDisabled}
      aria-busy={false}
      aria-disabled={isDisabled || undefined}
    >
      {icon && iconPosition === 'start' && <span className={iconSize}>{icon}</span>}
      {children}
      {icon && iconPosition === 'end' && <span className={iconSize}>{icon}</span>}
    </button>
  )
}
