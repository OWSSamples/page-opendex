import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export default function Card({ children, className, hover = false }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-lg border border-[var(--corp-card-border,#E2E8F0)] bg-[var(--corp-card-bg,#F1F5F9)] p-6',
        hover && 'transition-all duration-250 ease-out hover:-translate-y-1 hover:shadow-lg',
        className
      )}
    >
      {children}
    </div>
  )
}
