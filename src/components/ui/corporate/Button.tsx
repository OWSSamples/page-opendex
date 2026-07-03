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
  primary: 'bg-[#6d4df1] text-white hover:bg-[#7456f4] border border-[rgba(91,66,255,0.28)] shadow-sm hover:shadow transition-all duration-200',
  secondary: 'bg-[#6d4df1] text-white hover:bg-[#7456f4] border border-[rgba(91,66,255,0.28)] shadow-sm hover:shadow transition-all duration-200',
  outline: 'bg-transparent text-[#5f3df5] hover:bg-[rgba(109,77,241,0.06)] hover:text-[#4f2ee9] border border-[rgba(91,66,255,0.28)] transition-all duration-200',
  ghost: 'bg-transparent text-[#5f3df5] hover:bg-[rgba(109,77,241,0.06)] hover:text-[#4f2ee9] border border-[rgba(91,66,255,0.28)] transition-all duration-200',
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-[14px] py-0 text-xs min-h-[30px] rounded-[7px]',
  md: 'px-[14px] py-0 text-xs min-h-[30px] rounded-[7px]',
  lg: 'px-[14px] py-0 text-xs min-h-[30px] rounded-[7px]',
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
