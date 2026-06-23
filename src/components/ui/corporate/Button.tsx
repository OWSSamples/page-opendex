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
  primary: 'bg-[#0F1923] text-white hover:bg-[#1a2a3a] border-2 border-transparent shadow-sm hover:shadow transition-all duration-200',
  secondary: 'bg-[#5B21B6] text-white hover:bg-[#4C1D95] border-2 border-transparent shadow-sm hover:shadow transition-all duration-200',
  outline: 'bg-transparent text-[#0F1923] border-2 border-[#0F1923] hover:bg-[#0F1923] hover:text-white transition-all duration-200',
  ghost: 'bg-transparent text-[#0F1923] hover:bg-[#F1F5F9] transition-all duration-200',
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm min-h-[36px] rounded',
  md: 'px-6 py-3 text-sm min-h-[44px] rounded-lg',
  lg: 'px-8 py-4 text-base min-h-[48px] rounded-lg',
}

const iconSizeMap = {
  sm: 'h-4 w-4',
  md: 'h-5 w-5',
  lg: 'h-5 w-5',
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
    'opx-corporate-button inline-flex items-center justify-center gap-2 font-semibold disabled:opacity-50 disabled:pointer-events-none',
    'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5B21B6]',
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
