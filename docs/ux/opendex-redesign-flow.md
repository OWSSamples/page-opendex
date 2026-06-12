# Opendex Redesign — Flow Specification

## Entry Point
Usuario llega a `/` desde búsqueda, recomendación, demo comercial o enlace directo.

## Flow Steps
1. **Global nav oscuro**
   - Logo oficial.
   - Menú de productos con descripción y estado.
   - CTA visible: Comenzar gratis.

2. **Hero**
   - Mensaje principal: capa operativa para SaaS en México.
   - CTAs: Empezar gratis / Ver documentación.
   - Métricas de confianza.
   - Vista de control plane con escena 3D.

3. **Social proof**
   - Logos ficticios de referencia para reforzar escala.

4. **Product suite**
   - Auth, Invoice, Kiosko.
   - Cada tarjeta comunica estado, valor y métrica.

5. **Operations proof**
   - Dashboard de telemetría.
   - Eventos live y estados saludables.

6. **Developer proof**
   - Snippet TypeScript.
   - Lista de capacidades técnicas.

7. **Trust + CTA**
   - Seguridad, compliance y cierre comercial.

## Accessibility Requirements
- Todos los enlaces tienen texto visible o `aria-label`.
- Estados `focus-visible` en CTAs principales.
- Contraste alto sobre fondo oscuro.
- No se depende solo del color: badges y texto acompañan estados.
- Layout responsive con CTA accesible en mobile.

## Design Notes
- Mantener dark premium como tema dominante.
- Azul eléctrico: energía de marca y logo.
- Rojo `#dc2626`: acento tipo Trae para llamadas de atención.
- Bordes blancos con baja opacidad para glassmorphism sobrio.
