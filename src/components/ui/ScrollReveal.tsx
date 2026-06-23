'use client'

import { type ReactNode, useEffect, useRef, useState } from 'react'

type ScrollRevealProps = {
  children: ReactNode
}

export default function ScrollReveal({ children }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(() =>
    typeof window === 'undefined' ? false : window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )

  useEffect(() => {
    const node = ref.current
    if (!node) return

    if (visible) {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.12 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [visible])

  return (
    <div ref={ref} className={`reveal ${visible ? 'revealed' : ''}`}>
      {children}
    </div>
  )
}
