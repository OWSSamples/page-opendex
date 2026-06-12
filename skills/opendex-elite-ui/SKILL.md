---
name: opendex-elite-ui
description: Elite UI/UX and motion design requirements for Opendex digital products. Use when designing, reviewing, or implementing the Opendex frontend, especially immersive product experiences, premium SaaS interfaces, motion systems, custom cursors, 3D backgrounds, dashboards, cards, buttons, scroll experiences, and visual polish intended to compete with Linear, Stripe, Vercel, Arc Browser, Raycast, Apple, Figma, Notion, Cloudflare, and Anthropic.
---

# Opendex Elite UI

## Objective

Create an immersive digital product experience, not a traditional SaaS landing page.
The interface must communicate quality, trust, innovation, and technological sophistication.
Every pixel, animation, transition, and interaction should feel like a polished global technology platform.

Use the official Opendex logo asset when present:
`public/BADGES FOR GITLAB (2).png`.

## Design Bar

Aim for the product feel of Stripe, Linear, Vercel, Apple, Raycast, Arc Browser, Figma, Cloudflare, Notion, and Anthropic.

Avoid generic SaaS template patterns. Prefer product-led experiences with real-feeling UI, dense but elegant interaction, refined spacing, strong hierarchy, and restrained visual effects.

## Motion System

Implement a complete motion design system with:

- Framer Motion
- GSAP where timeline-level choreography is useful
- React Three Fiber and Three.js for 3D scenes
- Motion values
- Spring physics
- Scroll-linked animation and scroll timelines

Make animations feel physical, smooth, and natural. Avoid basic fade-ins, generic slides, and repeated effects. Give each section its own interaction personality while keeping the whole page visually connected.

## Smart Cursor

Build and maintain a premium custom cursor for desktop pointer devices.

Required behavior:

- Smooth following
- Magnetic response
- Dynamic distortion based on velocity
- Adaptive glow
- Shape changes by context
- Interactive states
- Realistic spring physics

On buttons:

- Expand the cursor
- Show a dynamic halo
- Trigger energy/ripple feedback

On cards:

- Add magnetic attraction
- Apply 3D tilt
- Track highlights and simulated reflections

Always obey React's Rules of Hooks. Declare motion hooks at component top level before conditional returns.

## Premium Buttons

Buttons must feel like enterprise product controls.

Required states:

- Idle
- Hover
- Focus
- Active
- Loading
- Success
- Error

Required interactions:

- Magnetic hover
- Animated gradients
- Ripple effects
- Intelligent glow
- Dynamic borders
- Subtle particle or energy effects when appropriate
- Progressive elevation
- Advanced loading state

Keep controls legible and stable across desktop and mobile. Do not let hover states resize layouts.

## 3D Interactive Background

Create a performant 3D visual system. Suitable motifs include:

- Global node networks
- Intelligent particles
- Orbital systems
- Infinite grids
- Technology nebulae
- Data streams
- Cloud infrastructure diagrams

Required behavior:

- React to mouse movement
- React to scroll
- Use real depth
- Use dynamic lighting
- Degrade gracefully on slow devices or unsupported WebGL

Keep the primary 3D scene full-bleed or ambient. Do not trap it inside a decorative card.

## Scroll Experience

Make navigation feel cinematic and continuous.

Use:

- Advanced scroll reveal
- Multilayer parallax
- Scroll-linked animation
- Sticky transitions
- Morphing layouts
- Fluid transformations

Sections should visually connect to each other. Avoid isolated, repetitive blocks.

## Next-Generation Cards

Cards should include:

- Premium glassmorphism
- Illuminated borders
- 3D tilt
- Dynamic shadows
- Reactive glow
- Subtle continuous motion
- Simulated reflections

On hover:

- Apply physical tilt
- Track a spotlight from pointer position
- Update gradients dynamically
- Increase perceived depth

Use cards for repeated items or tools, not as wrappers around entire page sections.

## Dashboard Preview

Build the Opendex Auth preview as if it were a real platform.

Include:

- Active users
- Sessions
- MFA
- Logs
- API keys
- Webhooks
- Analytics

Animate:

- Live charts
- Updating data
- Active indicators
- Simulated real-time events

Prefer plausible operational details over marketing filler.

## Advanced Visual Effects

Use subtle, elegant effects:

- Aurora gradients
- Volumetric glow
- Glass layers
- Mesh gradients
- Dynamic blur
- Ambient lights
- Depth layers
- Noise textures
- Animated backgrounds

Effects must support the product feeling, not overpower the interface.

## Microinteractions

Add many small, useful responses:

- Intelligent hover behavior
- Premium tooltips
- Focus animations
- Loading transitions
- Progress indicators
- Animated counters
- Dynamic badges
- Interactive highlights

Every interactive element should respond clearly to the user.

## Performance And Quality

Target:

- Lighthouse Performance above 90
- SEO above 90
- Accessibility above 90
- Best Practices above 90

Optimize with:

- Lazy loading
- Code splitting
- GPU-friendly transforms
- Dynamic imports
- Asset optimization
- Reduced work on mobile and low-power devices

Respect accessibility. Provide focus states, semantic controls, readable contrast, stable layout, and reduced-motion fallbacks when practical.

## Implementation Workflow

1. Inspect the existing design and component patterns before editing.
2. Preserve working interactions and fix console/runtime errors first.
3. Upgrade the experience through focused components: background, cursor, buttons, cards, dashboard, and scroll sections.
4. Verify TypeScript and production build.
5. When visual changes are substantial, run the dev server and inspect desktop and mobile viewports before finalizing.

