import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface ContainerProps {
  children: ReactNode
  className?: string
  narrow?: boolean
}

export default function Container({ children, className, narrow = false }: ContainerProps) {
  return (
    <div
      className={cn(
        'mx-auto px-6 md:px-8',
        narrow ? 'max-w-[720px]' : 'max-w-[1100px]',
        className
      )}
    >
      {children}
    </div>
  )
}
