import { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import Image from 'next/image'

interface CardProps {
  children?: ReactNode
  className?: string
  hover?: boolean
  image?: string
  imageAlt?: string
  title?: string
  subtitle?: string
}

export default function CorporateCard({
  children,
  className,
  hover = true,
  image,
  imageAlt,
  title,
  subtitle,
}: CardProps) {
  return (
    <div
      className={cn(
        'opx-corporate-card rounded-lg border border-gray-200 bg-white p-6',
        hover && 'opx-corporate-card-hover',
        className
      )}
    >
      {image && (
        <div className="relative overflow-hidden rounded-t-lg mb-4">
          <Image
            src={image}
            alt={imageAlt || ''}
            width={400}
            height={250}
            className="w-full h-auto object-cover"
            quality={85}
          />
        </div>
      )}
      {title && (
        <h3 className="text-lg font-bold mb-3 text-gray-900">{title}</h3>
      )}
      {subtitle && (
        <p className="text-gray-600 text-sm mb-4">{subtitle}</p>
      )}
      {children}
    </div>
  )
}
