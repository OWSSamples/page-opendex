import { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import ScrollReveal from './ScrollReveal'

interface SectionProps {
  children: ReactNode
  className?: string
  dark?: boolean
  id?: string
  reveal?: boolean
}

export default function Section({ children, className, dark = false, id, reveal = true }: SectionProps) {
  const content = (
    <section
      id={id}
      className={cn(
        'opx-json-section',
        dark && 'opx-json-section',
        className
      )}
    >
      {children}
    </section>
  )

  if (reveal) {
    return <ScrollReveal>{content}</ScrollReveal>
  }

  return content
}
