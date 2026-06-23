'use client'
import { ReactNode } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

type ButtonVariant = 'primary' | 'outline' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps {
  children: ReactNode
  href?: string
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit'
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-[var(--corp-accent,#5B21B6)] text-white hover:bg-[#4C1D95] border-2 border-transparent',
  outline: 'bg-transparent text-[var(--corp-accent,#5B21B6)] border-2 border-[var(--corp-accent,#5B21B6)] hover:bg-[var(--corp-accent,#5B21B6)] hover:text-white',
  ghost: 'bg-transparent text-[var(--corp-fg,#0F1923)] border-2 border-transparent hover:bg-[var(--corp-card-bg,#F1F5F9)]',
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm min-h-[36px]',
  md: 'px-5 py-3 text-sm min-h-[44px]',
  lg: 'px-7 py-4 text-base min-h-[48px]',
}

export default function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className,
  onClick,
  type = 'button',
}: ButtonProps) {
  const base = cn(
    'inline-flex items-center justify-center gap-2 rounded-lg font-semibold',
    'transition-all duration-200 ease-out',
    'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--corp-accent,#5B21B6)]',
    variantStyles[variant],
    sizeStyles[size],
    className
  )

  if (href) {
    return (
      <Link href={href} className={base}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} className={base} onClick={onClick}>
      {children}
    </button>
  )
}
