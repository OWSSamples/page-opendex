# Opendex Elite UI Design System

## PRIMARY OBJECTIVE
Generate visually striking, modern, and highly polished frontend components for the Opendex platform. Prioritize aesthetics, creative layout, sophisticated styling, and smooth micro-interactions. Structure code with separation of concerns for maintainability.

---

## MODULE 1: OVERALL THEME & MOOD

**Core Feeling:** Clean & Trustworthy with Modern SaaS Sophistication

**Visual Inspiration:**
- Vercel.com — clean gradients, large headlines, center-aligned hero
- Clerk.dev — trust stats bars, feature cards with subtle animations
- Linear.app — announcement pills, dark code sections, precise spacing
- Auth0.com — bento grids, code integration showcases

**Key Characteristics:**
- Professional but approachable
- Enterprise-grade with startup energy
- Technical precision with visual elegance
- Data-driven but human-centric

---

## MODULE 2: LAYOUT & SPACING

**Layout Approach:**
- Center-aligned hero sections with maximum impact
- Bento grid layouts for product showcases
- Asymmetrical content blocks for visual interest
- Full-width dark sections for contrast
- Generous negative space between major sections

**Section/Component Separation:**
- Alternating background colors (white → cream → white pattern)
- Subtle border separators (`border-dashed border-[#e7e4dc]`)
- Dark sections for dramatic contrast
- Seamless transitions with shared padding rhythm

**Content Width:**
- Standard max-width: `max-w-[1400px]` for hero/products
- Narrow max-width: `max-w-[1200px]` for content sections
- Reading width: `max-w-[700px]` for centered text blocks
- Full-bleed for backgrounds and visual effects

**Spacing Scale:**
- Section vertical padding: `py-24 md:py-32` (96px → 128px)
- Component gaps: `gap-6` to `gap-16` depending on hierarchy
- Card padding: `p-8` for standard cards
- Generous whitespace philosophy — let content breathe

---

## MODULE 3: COLOR PALETTE

**Primary Colors:**
- Orange Primary: `#f6821f` — main brand color, CTAs, accents
- Orange Mid: `#ff9910` — gradients, secondary accents
- Orange Deep: `#ff500a` — gradient endpoints, hover states

**Neutral Palette:**
- Background Base: `#faf8f4` — warm cream, main background
- White: `#ffffff` — card backgrounds, alternating sections
- Cream Light: `#fffaf3` — subtle section backgrounds
- Cream Warm: `#fafaf9` — card gradient endpoints

**Text Colors:**
- Primary Text: `#1a1a18` — headlines, strong emphasis
- Secondary Text: `#55524c` — body copy, descriptions
- Muted Text: `#9a9890` — labels, captions, metadata
- Subtle Text: `#4a4a47` — secondary descriptions

**Border Colors:**
- Standard: `#e8e6e0` — card borders, dividers
- Light: `#e7e4dc` — subtle separators
- Contrast: `#d8d4c8` — hover states

**Dark Mode (Code Sections):**
- Background: `#0a0a0d` — deep dark for code/CTA sections
- Surface: `#0e0e0c` — elevated surfaces in dark mode
- Text: `#ffffff` — primary text on dark
- Text Muted: `white/60` to `white/35` — opacity variants

**Gradient Usage:**
- Hero text gradients: `from-[#ff500a] via-[#f6821f] to-[#ff9910]`
- Button hover glows: `shadow-[0_4px_24px_rgba(246,130,31,0.5)]`
- Background accents: `radial-gradient(circle, rgba(246,130,31,0.08))`
- Decorative blobs: `radial-gradient with blur-3xl`

---

## MODULE 4: TYPOGRAPHY

**Headline Font:** Geist Sans (default system font)

**Headline Styles:**
- Hero H1: `text-[56px] md:text-[72px] lg:text-[84px]` — massive, center-aligned
- Section H2: `text-[42px] md:text-[52px]` — bold, tight leading
- Card H3: `text-[24px] md:text-[32px]` — component headlines
- Weight: `font-bold` (700)
- Tracking: `tracking-[-0.04em]` for large sizes
- Leading: `leading-[1.08]` for tight, impactful headlines

**Body Font:** Geist Sans

**Body Styles:**
- Large body: `text-[16px] md:text-[18px]` — hero descriptions
- Standard body: `text-[15px] md:text-[16px]` — section descriptions
- Small body: `text-[14px] md:text-[15px]` — card content
- Weight: `font-normal` (400) or `font-medium` (500)
- Leading: `leading-[1.7]` for readability

**Monospace Font:** Geist Mono

**Monospace Usage:**
- Labels: `font-mono text-[11px] uppercase tracking-[0.14em]`
- Code blocks: `font-mono text-[12px] md:text-[13px]`
- Metadata: `font-mono text-[10px] text-[#9a9890]`

**Hierarchy:**
- Clear visual separation using size, weight, and color
- Gradient text for key phrases: `bg-gradient-to-r bg-clip-text text-transparent`
- Accent color for important terms

---

## MODULE 5: IMAGERY & ICONS

**Image Style:**
- 3D visualizations: Clean, modern renders with soft lighting
- UI mockups: Browser chrome with subtle shadows
- Floating cards: Overlapping elements with depth
- Placeholder approach: Use actual component renders (OpendexEcosystem3D)

**Icon Style:** Fluent UI Icons (`@fluentui/react-icons`)

**Icon Usage:**
- Standard size: `h-4 w-4` or `h-5 w-5`
- Large icons in badges: `h-6 w-6` or `h-7 w-7`
- Consistent stroke width
- Color matches context: brand orange for accents, text color otherwise
- Icon badges: rounded backgrounds with subtle borders

**Icon Implementation:**
```tsx
import { FingerprintRegular } from "@fluentui/react-icons";

// Standard usage
<FingerprintRegular className="h-4 w-4 text-[#f6821f]" />

// In badge
<div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f6821f]/10 border border-[#f6821f]/25">
  <FingerprintRegular className="h-6 w-6 text-[#f6821f]" />
</div>
```

---

## MODULE 6: INTERACTIVITY & ANIMATION

**Hover Effects:**
- Cards: `hover:border-[#d8d4c8] hover:shadow-[0_8px_40px_rgba(29,29,27,0.08)]`
- Buttons: `hover:bg-[#e8700f] hover:shadow-[0_6px_32px_rgba(246,130,31,0.6)]`
- Links: `hover:text-[#f6821f] transition-colors duration-200`
- Scale effects: `hover:scale-[1.02] active:scale-[0.98]`
- Transform arrows: `group-hover:translate-x-1 transition-transform duration-200`

**Transition Standards:**
- Standard duration: `duration-200` (200ms)
- Smooth duration: `duration-300` (300ms)
- Easing: Default tailwind easing (ease-in-out)

**Scroll Animations:**
- Fade-in on scroll: Use subtle opacity transitions
- Keep animations minimal and professional
- Avoid excessive motion

**Button Interactions:**
```tsx
className="inline-flex items-center gap-2 rounded-xl bg-[#f6821f] px-6 py-3 
  text-[15px] font-semibold text-white 
  shadow-[0_4px_24px_rgba(246,130,31,0.5)] 
  transition-all duration-200 
  hover:bg-[#e8700f] hover:shadow-[0_6px_32px_rgba(246,130,31,0.6)]
  active:scale-[0.98]"
```

**Gradient Reveals:**
- Top accent lines: `opacity-0 group-hover:opacity-100 transition-opacity duration-300`
- Decorative blobs: `opacity-[0.15] group-hover:opacity-25 transition-opacity duration-500`

---

## MODULE 7: FILE STRUCTURE & COMPONENT STRATEGY

**Directory Structure:**
```
src/
├── app/
│   ├── page.tsx                    # Homepage
│   ├── productos/
│   │   ├── page.tsx               # Products listing
│   │   ├── auth/page.tsx          # Identity product
│   │   ├── invoice/page.tsx       # Factur product
│   │   └── kiosko/page.tsx        # Kiosko product
│   ├── contacto/page.tsx          # Contact page
│   └── layout.tsx
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx            # Main navigation
│   │   ├── Footer.tsx            # Site footer
│   │   └── LanguageSelector.tsx  # Language dropdown
│   ├── ui/                        # shadcn components
│   │   ├── button.tsx
│   │   ├── dropdown-menu.tsx
│   │   ├── text-effect.tsx
│   │   └── glow-effect.tsx
│   ├── sections/                  # Page sections
│   │   ├── HeroSection.tsx
│   │   ├── ProductsGrid.tsx
│   │   ├── BenefitsGrid.tsx
│   │   └── StepsSection.tsx
│   ├── common/                    # Reusable elements
│   │   ├── IconBadge.tsx
│   │   ├── GradientCard.tsx
│   │   └── StatsBar.tsx
│   └── three/                     # 3D components
│       └── OpendexEcosystem3DClient.tsx
├── lib/
│   └── utils.ts                   # cn() helper
└── styles/
    └── globals.css                # Global styles
```

**Component Granularity:**
- Break large sections into focused components
- Create reusable UI patterns (IconBadge, GradientCard)
- Keep page files thin — they orchestrate components
- Extract repeated patterns into common components

**Client Components:**
- Add `'use client'` only when needed for interactivity
- Dropdowns, modals, carousels require client directive
- Keep layouts and static sections as Server Components
- Motion/Framer Motion components need 'use client'

**Props & Types:**
```tsx
// Always define prop interfaces
interface ProductCardProps {
  name: string;
  href: string;
  eyebrow: string;
  desc: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  color: string;
  features: string[];
}

// Use type imports
import type { LucideIcon } from "@/components/icons";
```

---

## MODULE 8: COMPONENT STYLING PATTERNS

### Buttons

**Primary CTA:**
```tsx
<Link
  href="/contacto"
  className="inline-flex items-center gap-2 rounded-xl 
    bg-[#1a1a18] px-6 py-3 text-[15px] font-semibold text-white 
    shadow-[0_4px_20px_rgba(26,26,24,0.2)] 
    transition-all duration-200 
    hover:bg-[#2d2d2a] hover:shadow-[0_6px_28px_rgba(26,26,24,0.3)]
    active:scale-[0.98]"
>
  Hablar con el equipo
  <ArrowRightRegular className="h-4 w-4" />
</Link>
```

**Secondary CTA:**
```tsx
<Link
  href="/productos"
  className="inline-flex items-center gap-2 rounded-xl 
    border-2 border-[#e7e4dc] bg-white/80 px-6 py-3 
    text-[15px] font-semibold text-[#1a1a18] backdrop-blur-sm 
    transition-all duration-200 
    hover:border-[#d8d4c8] hover:bg-white 
    hover:shadow-[0_2px_12px_rgba(29,29,27,0.08)]"
>
  Ver productos
</Link>
```

**Orange Accent Button:**
```tsx
<Link
  href="/contacto"
  className="inline-flex items-center gap-2 rounded-xl 
    bg-[#f6821f] px-6 py-3 text-[15px] font-semibold text-white 
    shadow-[0_4px_24px_rgba(246,130,31,0.5)]
    transition-all duration-200 
    hover:bg-[#e8700f] hover:shadow-[0_6px_32px_rgba(246,130,31,0.6)]"
>
  Comenzar gratis
  <ArrowRightRegular className="h-4 w-4" />
</Link>
```

### Cards

**Standard Feature Card:**
```tsx
<div className="group relative overflow-hidden rounded-2xl 
  border border-[#e8e6e0] 
  bg-gradient-to-br from-white to-[#fafaf9] 
  p-8 
  shadow-[0_2px_16px_rgba(29,29,27,0.04)] 
  transition-all duration-300 
  hover:border-[#d8d4c8] 
  hover:shadow-[0_6px_32px_rgba(29,29,27,0.08)]">
  
  {/* Top accent line */}
  <div className="absolute inset-x-0 top-0 h-1 
    bg-gradient-to-r from-[#f6821f] via-[#ff9910] to-transparent 
    opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
  
  {/* Content */}
  <div className="flex h-14 w-14 items-center justify-center rounded-2xl 
    border border-[#f6821f]/25 bg-[#f6821f]/10">
    <Icon className="h-6 w-6 text-[#f6821f]" />
  </div>
  
  <h3 className="mt-6 text-[20px] font-bold text-[#1a1a18]">
    Card Title
  </h3>
  
  <p className="mt-3 text-[14.5px] leading-7 text-[#55524c]">
    Card description goes here
  </p>
</div>
```

**Bento Grid Product Card:**
```tsx
<Link
  href="/productos/auth"
  className="group relative overflow-hidden rounded-3xl 
    border border-[#e8e6e0] 
    bg-gradient-to-br from-white to-[#fafaf9] 
    p-8 
    shadow-[0_4px_24px_rgba(29,29,27,0.04)] 
    transition-all duration-300 
    hover:border-[#d8d4c8]
    hover:shadow-[0_8px_40px_rgba(29,29,27,0.08)]
    lg:row-span-2">
  
  {/* Gradient accent */}
  <div className="absolute inset-x-0 top-0 h-1 
    opacity-0 transition-opacity duration-300 group-hover:opacity-100"
    style={{ background: `linear-gradient(90deg, #f6821f, transparent)` }} />
  
  {/* Icon badge */}
  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl 
    border" style={{
      background: `#f6821f15`,
      borderColor: `#f6821f30`,
      color: '#f6821f'
    }}>
    <Icon className="h-6 w-6" />
  </div>
  
  {/* Decorative blob */}
  <div className="pointer-events-none absolute -bottom-12 -right-12 
    h-48 w-48 rounded-full opacity-[0.15] blur-3xl 
    transition-opacity duration-500 group-hover:opacity-25"
    style={{ background: `radial-gradient(circle, #f6821f, transparent 70%)` }} />
</Link>
```

### Badges & Pills

**Announcement Pill (Vercel style):**
```tsx
<Link href="/productos/auth" 
  className="group inline-flex items-center gap-2.5 rounded-full 
    border border-[#e7e4dc] bg-white/90 px-4 py-2 text-[13px] 
    shadow-[0_2px_8px_rgba(29,29,27,0.04)] backdrop-blur-md 
    transition-all duration-300 
    hover:border-[#f6821f]/50 
    hover:shadow-[0_4px_16px_rgba(246,130,31,0.15)]">
  
  <span className="flex h-5 w-5 items-center justify-center rounded-full 
    bg-gradient-to-br from-[#f6821f] to-[#ff9910]">
    <SparkleRegular className="h-3 w-3 text-white" />
  </span>
  
  <span className="font-semibold text-[#1a1a18]">
    Introducing Opendex Identity Platform
  </span>
  
  <span className="text-[#9a9890]">—</span>
  
  <span className="font-medium text-[#f6821f] group-hover:text-[#e8700f]">
    Ver producto
  </span>
  
  <ArrowRightRegular className="h-3.5 w-3.5 text-[#f6821f] 
    transition-transform duration-200 group-hover:translate-x-0.5" />
</Link>
```

**Status Badge:**
```tsx
<span className="inline-flex items-center gap-2 rounded-full 
  border border-[#f6821f]/25 bg-[#f6821f]/10 
  px-3 py-1 font-mono text-[11px] font-semibold uppercase 
  tracking-[0.14em] text-[#f6821f]">
  <span className="h-1.5 w-1.5 rounded-full bg-[#f6821f]" />
  Live System
</span>
```

**Metadata Label:**
```tsx
<span className="font-mono text-[11px] font-semibold uppercase 
  tracking-[0.14em] text-[#9a9890]">
  Identity · Platform
</span>
```

### Stats Bars

**Horizontal Stats (Clerk style):**
```tsx
<div className="inline-flex items-center divide-x divide-[#e7e4dc] 
  overflow-hidden rounded-xl border border-[#e7e4dc] 
  bg-white/70 shadow-[0_4px_20px_rgba(29,29,27,0.08)] backdrop-blur-sm">
  {stats.map((stat) => (
    <div key={stat.label} className="px-8 py-5">
      <div className="text-[24px] font-bold tracking-tight text-[#1a1a18]">
        {stat.value}
      </div>
      <div className="mt-1 text-[12px] font-medium uppercase tracking-wider text-[#9a9890]">
        {stat.label}
      </div>
    </div>
  ))}
</div>
```

**Large Trust Stats:**
```tsx
<div className="grid gap-px overflow-hidden rounded-2xl 
  border border-[#e8e6e0] bg-[#e8e6e0] sm:grid-cols-3">
  <div className="group relative overflow-hidden bg-white px-8 py-10 
    transition-colors duration-200 hover:bg-[#fffaf3]">
    
    {/* Top accent line */}
    <div className="absolute inset-x-0 top-0 h-0.5 
      opacity-0 transition-opacity duration-200 group-hover:opacity-100"
      style={{ background: `linear-gradient(to right, #f6821f, transparent)` }} />
    
    <div className="flex items-baseline gap-1">
      <span className="font-mono text-[52px] font-bold leading-none 
        tracking-[-0.04em] text-[#f6821f]">
        99.97
      </span>
      <span className="font-mono text-[22px] font-semibold text-[#f6821f]">
        %
      </span>
    </div>
    
    <p className="mt-2 text-[15px] font-semibold text-[#1a1a18]">
      uptime garantizado
    </p>
    <p className="mt-1 text-[13px] text-[#9a9890]">
      Infraestructura de misión crítica
    </p>
  </div>
</div>
```

### Code Windows

**Dark Code Block:**
```tsx
<div className="overflow-hidden rounded-2xl 
  border border-white/[0.08] 
  bg-[#0e0e0c] 
  shadow-[0_32px_80px_rgba(0,0,0,0.5)]">
  
  {/* Chrome header */}
  <div className="flex items-center justify-between 
    border-b border-white/[0.07] px-5 py-3">
    <div className="flex items-center gap-3">
      <span className="flex gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
      </span>
      <span className="font-mono text-[12px] text-white/40">
        middleware.ts
      </span>
    </div>
  </div>
  
  {/* Code content */}
  <pre className="overflow-x-auto py-6 px-6 font-mono text-[13px] 
    leading-7 text-white/90">
    <code>{codeContent}</code>
  </pre>
</div>
```

---

## MODULE 9: DESIGN PATTERNS

### Hero Sections

**Center-Aligned Hero (Vercel style):**

```tsx
<section className="relative isolate overflow-hidden 
  bg-gradient-to-b from-white via-[#faf8f4] to-[#faf8f4]">
  
  {/* Background effects */}
  <div className="absolute inset-0 
    bg-[radial-gradient(circle_at_50%_-20%,rgba(246,130,31,0.08),transparent_50%)]" />
  
  <div className="relative mx-auto max-w-[1400px] px-6 py-24 md:px-8 lg:py-32">
    {/* Announcement pill */}
    <div className="mb-12 flex justify-center">
      {/* ... pill component ... */}
    </div>
    
    {/* Headline */}
    <div className="mx-auto max-w-[1100px] text-center">
      <h1 className="text-[56px] md:text-[72px] lg:text-[84px] 
        font-bold leading-[1.08] tracking-[-0.04em] text-[#1a1a18]">
        Infraestructura de identidad que{" "}
        <span className="bg-gradient-to-r from-[#f6821f] via-[#ff9910] to-[#ff500a] 
          bg-clip-text text-transparent">
          escala con tu producto
        </span>
      </h1>
      
      <p className="mx-auto mt-8 max-w-[720px] text-[18px] md:text-[20px] 
        leading-[1.7] text-[#55524c]">
        Autenticación, sesiones y decisiones de riesgo sin deuda técnica.
      </p>
      
      {/* CTAs */}
      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        {/* ... buttons ... */}
      </div>
      
      {/* Stats bar */}
      <div className="mt-16">
        {/* ... horizontal stats ... */}
      </div>
    </div>
    
    {/* Floating preview */}
    <div className="relative mx-auto mt-20 max-w-[1100px]">
      {/* ... UI preview card ... */}
    </div>
  </div>
</section>
```

### Bento Grid Products

**Layout Pattern:**
- First product: `lg:row-span-2` (tall card)
- Other products: Standard grid items
- Grid: `grid gap-6 lg:grid-cols-2 lg:grid-rows-[auto_auto]`

**Features:**
- Dynamic product color via CSS variables
- Icon badges with product-specific colors
- Feature lists with checkmarks
- Gradient decorative blobs
- Hover state reveals accent line

### Big Numbered Steps

**Pattern:**
```tsx
<div className="space-y-16 lg:space-y-24">
  {steps.map((step, index) => (
    <div key={step.id} className="relative grid gap-8 lg:grid-cols-[144px_1fr]">
      {/* LEFT — Big circle */}
      <div className="flex items-start justify-center lg:justify-start">
        <div className="relative">
          {/* Number circle 144px */}
          <div className="relative z-10 flex h-[144px] w-[144px] 
            items-center justify-center rounded-full border-4"
            style={{ 
              background: `linear-gradient(135deg, #f6821f15, white)`,
              borderColor: '#f6821f'
            }}>
            <span className="font-mono text-[64px] font-bold text-[#f6821f]">
              01
            </span>
          </div>
          
          {/* Icon badge overlay */}
          <div className="absolute -bottom-3 -right-3 
            flex h-16 w-16 items-center justify-center rounded-full 
            border-4 border-white bg-[#f6821f] shadow-lg">
            <Icon className="h-7 w-7 text-white" />
          </div>
        </div>
      </div>
      
      {/* RIGHT — Content */}
      <div className="lg:py-8">
        {/* ... step content ... */}
      </div>
    </div>
  ))}
</div>

{/* Connecting line (desktop only) */}
<div className="absolute left-[72px] top-[72px] hidden 
  h-[calc(100%-144px)] w-0.5 
  bg-gradient-to-b from-[#f6821f] via-[#ff9910] to-[#ff500a] 
  lg:block" />
```

### Dark CTA Sections

**Full-bleed dark section pattern:**
```tsx
<section className="relative overflow-hidden bg-[#0a0a0d]">
  {/* Background grid */}
  <div className="pointer-events-none absolute inset-0"
    style={{
      backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), 
                       linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
      backgroundSize: '72px 72px'
    }} />
  
  {/* Radial glow */}
  <div className="pointer-events-none absolute left-1/2 top-1/2 
    h-[800px] w-[1000px] -translate-x-1/2 -translate-y-1/2"
    style={{ 
      background: 'radial-gradient(ellipse at center, rgba(246,130,31,0.08) 0%, transparent 60%)'
    }} />
  
  <div className="relative mx-auto max-w-[1200px] px-6 py-28 md:px-8 lg:py-36">
    {/* Center content */}
    <div className="text-center">
      <h2 className="text-[52px] md:text-[68px] font-bold 
        leading-[1.0] tracking-[-0.045em] text-white">
        Empieza gratis.
        <br />
        <span className="text-[#f6821f]">Escala cuando estés listo.</span>
      </h2>
      
      <p className="mx-auto mt-6 max-w-xl text-[17px] leading-8 text-white/45">
        Despliega en minutos. Sin configuración de infraestructura.
      </p>
      
      {/* CTAs */}
    </div>
  </div>
</section>
```

---

## MODULE 10: TECHNICAL IMPLEMENTATION

**Tech Stack:**
- Next.js 14+ with App Router
- React Server Components by default
- TypeScript strict mode
- Tailwind CSS for styling
- Fluent UI Icons (`@fluentui/react-icons`)
- Motion/Framer Motion for animations (when needed)

**Best Practices:**

1. **Use Server Components by default**
```tsx
// app/page.tsx - Server Component
export default function HomePage() {
  return <main>...</main>;
}
```

2. **Add 'use client' only when needed**
```tsx
// components/Dropdown.tsx
'use client';

import { useState } from 'react';
```

3. **Type all props**
```tsx
interface CardProps {
  title: string;
  description: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
}

export function Card({ title, description, icon: Icon }: CardProps) {
  return <div>...</div>;
}
```

4. **Use the cn() utility**
```tsx
import { cn } from "@/lib/utils";

<div className={cn(
  "base-classes",
  condition && "conditional-classes",
  className
)} />
```

5. **Responsive design patterns**
```tsx
// Mobile first approach
className="text-[42px] md:text-[52px] lg:text-[68px]"
className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
className="px-6 md:px-8 lg:px-12"
```

6. **Accessibility essentials**
```tsx
// Semantic HTML
<section aria-labelledby="products-heading">
  <h2 id="products-heading">Products</h2>
</section>

// ARIA for decorative elements
<div aria-hidden className="decorative-blob" />

// Icon accessibility
<Icon className="h-4 w-4" aria-hidden />
<span className="sr-only">Screen reader text</span>
```

7. **Performance optimization**
```tsx
// Next.js Image component
import Image from 'next/image';

<Image
  src="/hero-image.png"
  alt="Product preview"
  width={1200}
  height={800}
  priority // for above-fold images
/>

// Dynamic imports for heavy components
const HeavyChart = dynamic(() => import('@/components/HeavyChart'), {
  loading: () => <Skeleton />
});
```

---

## MODULE 11: COMMON PATTERNS & RECIPES

### Pattern: Section Container

**Standard section wrapper:**
```tsx
<section className="relative overflow-hidden bg-white">
  {/* Background decoration */}
  <div aria-hidden className="absolute inset-0 
    bg-[radial-gradient(circle_at_50%_0%,rgba(246,130,31,0.03),transparent_50%)]" />
  
  {/* Content container */}
  <div className="relative mx-auto max-w-[1400px] px-6 py-24 md:px-8 lg:py-32">
    {/* Section content */}
  </div>
</section>
```

### Pattern: Gradient Text

**Brand gradient on text:**
```tsx
<span className="bg-gradient-to-r from-[#ff500a] via-[#f6821f] to-[#ff9910] 
  bg-clip-text text-transparent">
  Gradient Text
</span>
```

### Pattern: Floating Cards

**Overlapping UI preview cards:**
```tsx
<div className="relative mx-auto max-w-[1100px]">
  {/* Main center card */}
  <div className="relative z-10 rounded-2xl border border-[#e7e4dc] 
    bg-white shadow-[0_24px_60px_rgba(29,29,27,0.12)]">
    <MainContent />
  </div>
  
  {/* Left floating card */}
  <div className="absolute left-0 top-12 z-0 w-[280px] rounded-xl 
    border border-[#e7e4dc] bg-white 
    shadow-[0_12px_40px_rgba(29,29,27,0.1)] 
    hidden lg:block">
    <SideContent />
  </div>
  
  {/* Right floating card */}
  <div className="absolute right-0 top-32 z-0 w-[240px] rounded-xl 
    border border-[#e7e4dc] bg-white 
    shadow-[0_12px_40px_rgba(29,29,27,0.1)] 
    hidden lg:block">
    <SideContent />
  </div>
  
  {/* Glow behind */}
  <div aria-hidden className="absolute inset-x-12 -bottom-12 -z-10 
    h-48 bg-gradient-to-b from-[#f6821f]/20 via-[#ff9910]/10 
    to-transparent blur-3xl" />
</div>
```

### Pattern: Icon with Label

**Consistent icon + label pattern:**
```tsx
<div className="flex items-center gap-2">
  <div className="flex h-8 w-8 items-center justify-center rounded-lg 
    bg-[#f6821f]/15">
    <Icon className="h-4 w-4 text-[#f6821f]" />
  </div>
  <span className="text-[14px] font-medium text-[#1a1a18]">
    Label Text
  </span>
</div>
```

### Pattern: Feature List with Checkmarks

**Standard feature list:**
```tsx
<ul className="space-y-3">
  {features.map((feature) => (
    <li key={feature} className="flex items-start gap-2.5">
      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center 
        rounded-md bg-[#f6821f]/15">
        <CheckCircle2 className="h-3 w-3 text-[#f6821f]" />
      </span>
      <span className="text-[13.5px] leading-6 text-[#4a4a47]">
        {feature}
      </span>
    </li>
  ))}
</ul>
```

### Pattern: Grid with Stagger

**Staggered animation delays:**
```tsx
<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
  {items.map((item, index) => (
    <div 
      key={item.id}
      className="opacity-0 animate-fade-in"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Card content */}
    </div>
  ))}
</div>
```

---

## MODULE 12: DO's and DON'Ts

### ✅ DO

1. **Use generous whitespace** — sections need room to breathe
2. **Apply subtle animations** — smooth transitions enhance polish
3. **Maintain hierarchy** — clear size/weight differences between levels
4. **Use brand colors strategically** — orange for accents, not everything
5. **Add hover states** — every interactive element should respond
6. **Write semantic HTML** — proper heading levels, sections, articles
7. **Optimize images** — use Next.js Image component with proper sizing
8. **Test responsiveness** — mobile-first, then enhance for desktop
9. **Keep accessibility in mind** — ARIA labels, keyboard navigation
10. **Structure components** — break down large pages into reusable pieces

### ❌ DON'T

1. **Don't use too many colors** — stick to the defined palette
2. **Don't make everything bold** — reserve bold for emphasis
3. **Don't over-animate** — subtle is better than distracting
4. **Don't ignore spacing consistency** — use Tailwind spacing scale
5. **Don't nest too deeply** — flatten component structure when possible
6. **Don't use inline styles** — use Tailwind classes or CSS modules
7. **Don't forget dark mode sections** — use them for visual contrast
8. **Don't make tiny clickable areas** — minimum 44x44px touch targets
9. **Don't use client components everywhere** — default to Server Components
10. **Don't skip TypeScript types** — type all props and functions

---

## MODULE 13: QUICK START CHECKLIST

When creating a new page/component:

- [ ] Choose appropriate background color (white, cream, dark)
- [ ] Set up section container with proper padding (`py-24 md:py-32`)
- [ ] Add background decoration if needed (gradient, grid, dots)
- [ ] Use proper heading hierarchy (H1 for page, H2 for sections)
- [ ] Apply brand gradient to key phrases in headlines
- [ ] Add announcement pill if introducing something new
- [ ] Include CTAs with proper button styling and hover effects
- [ ] Add icons from Fluent UI with consistent sizing
- [ ] Use proper text sizes (body: 14-16px, headlines: 42-84px)
- [ ] Implement hover states on all interactive elements
- [ ] Add aria-hidden to decorative elements
- [ ] Test responsive behavior at all breakpoints
- [ ] Verify color contrast for accessibility
- [ ] Add proper TypeScript types for all props
- [ ] Structure with reusable components
- [ ] Use Server Components unless client features needed

---

## EXAMPLE: Complete Product Card Component

```tsx
import Link from "next/link";
import type { ComponentType, SVGProps } from "react";
import { CheckCircle2, ArrowRight } from "@fluentui/react-icons";

interface ProductCardProps {
  name: string;
  href: string;
  eyebrow: string;
  description: string;
  features: string[];
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  color: string;
  featured?: boolean;
}

export function ProductCard({
  name,
  href,
  eyebrow,
  description,
  features,
  icon: Icon,
  color,
  featured = false,
}: ProductCardProps) {
  return (
    <Link
      href={href}
      className={`group relative overflow-hidden rounded-3xl 
        border border-[#e8e6e0] bg-gradient-to-br from-white to-[#fafaf9] 
        p-8 shadow-[0_4px_24px_rgba(29,29,27,0.04)] 
        transition-all duration-300 
        hover:border-[#d8d4c8] hover:shadow-[0_8px_40px_rgba(29,29,27,0.08)]
        ${featured ? "lg:row-span-2" : ""}`}
    >
      {/* Top gradient accent */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-1 opacity-0 
          transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `linear-gradient(90deg, ${color}, transparent)`,
        }}
      />

      {/* Icon badge */}
      <div
        className="inline-flex h-14 w-14 items-center justify-center 
          rounded-2xl border"
        style={{
          background: `${color}15`,
          borderColor: `${color}30`,
          color: color,
        }}
      >
        <Icon className="h-6 w-6" aria-hidden />
      </div>

      {/* Label */}
      <div className="mt-6 flex items-center gap-2">
        <span className="font-mono text-[11px] font-semibold uppercase 
          tracking-[0.14em] text-[#9a9890]">
          {eyebrow}
        </span>
      </div>

      {/* Title */}
      <h3 className="mt-4 text-[24px] font-bold leading-tight 
        tracking-[-0.03em] text-[#1a1a18]">
        {name}
      </h3>

      {/* Description */}
      <p className="mt-3 text-[15px] leading-7 text-[#55524c]">
        {description}
      </p>

      {/* Features */}
      <ul className="mt-6 space-y-2.5">
        {features.slice(0, featured ? 3 : 2).map((feature) => (
          <li key={feature} className="flex items-start gap-2.5">
            <span
              className="mt-0.5 flex h-5 w-5 shrink-0 items-center 
                justify-center rounded-md"
              style={{ background: `${color}15` }}
            >
              <CheckCircle2 
                className="h-3 w-3" 
                style={{ color }} 
                aria-hidden 
              />
            </span>
            <span className="text-[13.5px] leading-6 text-[#4a4a47]">
              {feature}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <div className="mt-8 flex items-center gap-2 font-medium 
        text-[#1a1a18] transition-colors duration-200 
        group-hover:text-[#f6821f]">
        <span className="text-[14px]">Explorar producto</span>
        <ArrowRight 
          className="h-4 w-4 transition-transform duration-200 
            group-hover:translate-x-1" 
          aria-hidden 
        />
      </div>

      {/* Decorative gradient blob */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-12 -right-12 
          h-48 w-48 rounded-full opacity-[0.15] blur-3xl 
          transition-opacity duration-500 group-hover:opacity-25"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 70%)`,
        }}
      />
    </Link>
  );
}
```

---

## PRODUCTION DESIGN SYSTEM LOCKS

These rules translate the expert frontend prompt into concrete Opendex decisions. They override generic prompt defaults when working in this repository.

### Actual Stack
- Framework: Next.js App Router with TypeScript.
- Styling: Tailwind CSS v4 plus project CSS tokens in `src/styles/globals.css`.
- Icons: use the local `src/components/icons.ts` Fluent UI wrapper. Do not introduce `lucide-react` unless the dependency is explicitly approved.
- Components: prefer local reusable primitives such as `src/components/Button.tsx` before creating one-off button classes.

### Token Discipline
- Core tokens live under `--opx-*` and `--cf-*` in `src/styles/globals.css`.
- New surfaces, buttons, focus rings and shadows should reference those tokens first.
- Avoid random hardcoded colors. If a new color is necessary, add it as a token and document why.

### Content Integrity
- Do not invent production claims: no fake MAU numbers, uptime, latency, SOC certifications, SDK versions or availability states.
- If something is not publicly available, label it as `prelanzamiento`, `preparacion`, `beta privada`, `draft` or `conceptual`.
- Code windows must be marked clearly when they are conceptual examples and not installable public SDKs.

### Component State Requirements
- Buttons must support default, hover, focus-visible, active, disabled and loading states.
- Use semantic links for navigation and buttons for actions.
- Every icon-only control needs an accessible label.
- Respect `prefers-reduced-motion` for any spinner, reveal, cursor, grid, scanline or ambient animation.

### Visual Direction
- Opendex should feel enterprise, technical and trustworthy: warm off-white surfaces, burnt-orange accent, restrained motion and precise spacing.
- Avoid generic AI purple gradients, fake glass everywhere, repeated three-card sections and decorative effects that hide information.
- Keep background motion subtle and non-fixed. Do not use a dotted-grid background globally unless the user explicitly restores it.

---

## CLOSING NOTES

This design system creates a modern, trustworthy, and sophisticated visual identity for Opendex. The key is **consistency** — use the same patterns, spacing, colors, and interactions across all pages.

Remember:
- **Large, bold headlines** create impact
- **Generous spacing** improves readability
- **Subtle animations** add polish
- **Strategic color use** draws attention
- **Clear hierarchy** guides the eye
- **Responsive design** works everywhere

When in doubt, reference the actual implementation in `src/app/page.tsx` for real-world examples of these patterns in action.

---

**Version:** 1.0  
**Last Updated:** June 2026  
**Maintained By:** Opendex Design Team
