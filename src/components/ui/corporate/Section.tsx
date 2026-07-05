import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface SectionProps {
  children: ReactNode
  className?: string
  dark?: boolean
  light?: boolean
  id?: string
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl'
}

export default function CorporateSection({
  children,
  className,
  id,
  maxWidth = 'lg',
}: SectionProps) {
  const widthClasses = {
    sm: 'max-w-2xl',
    md: 'max-w-3xl',
    lg: 'max-w-4xl',
    xl: 'max-w-6xl',
  }[maxWidth]

  return (
    <section id={id} className={cn('opx-json-section opx-corporate-section', className)}>
      <div className={cn('mx-auto px-6 md:px-8', widthClasses)}>
        {children}
      </div>
    </section>
  )
}
