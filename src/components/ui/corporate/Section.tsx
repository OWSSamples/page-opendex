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
  dark = false,
  light = false,
  id,
  maxWidth = 'lg',
}: SectionProps) {
  const bgColor = dark
    ? 'bg-[#0F1923] text-white'
    : light
      ? 'bg-gray-50 text-gray-900'
      : 'bg-white text-gray-900'

  const widthClasses = {
    sm: 'max-w-2xl',
    md: 'max-w-3xl',
    lg: 'max-w-4xl',
    xl: 'max-w-6xl',
  }[maxWidth]

  return (
    <section id={id} className={cn('opx-corporate-section py-16 md:py-24', bgColor, className)}>
      <div className={cn('mx-auto px-6 md:px-8', widthClasses)}>
        {children}
      </div>
    </section>
  )
}
