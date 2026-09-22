# OCOF — Home Override

This page override preserves the approved OCOF brand direction when it differs from the generated master recommendation.

## Visual thesis

A black-velvet editorial stage inspired by the supplied DESIGN.md: pure black canvas, weight-400 sculptural typography, very generous negative space and a procedural constellation of violet, amber, teal and blue triangular particles. The OCOF content and brand mark remain the source of truth.

## Palette

- Background: `#000000`
- Primary text: `#FFFFFF`
- Secondary text: `#BDBDBD`
- Muted text: `#9A9A9A`
- Primary action: `#8052FF`
- Editorial accent: `#FFB829`
- Secondary accent: `#15846E`
- Focus ring: `#FFB829`

## Typography

- Display, headings and body: Manrope variable, already bundled locally, as the closest local substitute for PP Neue Montreal.
- Headings use weight 400 and `-0.04em` tracking; hierarchy comes from scale, not boldness.
- Body uses weight 300 for an airy editorial rhythm.
- Avoid external font requests and preserve fast local rendering.

## Motion

- Framer Motion is the primary animation layer.
- Cinematic section reveals may retain the approved five-second duration.
- Direct interactions (hover, tap, accordion feedback) must remain responsive at 180–600ms.
- Animate opacity and transforms; avoid layout-thrashing properties.
- Pause continuous WebGL motion while offscreen or when the document is hidden.
- Render final readable states under `prefers-reduced-motion`.

## Surfaces

- No visible divider lines, framed cards, heavy shadows or gray section fills.
- Create separation with typography, scale and whitespace on a pure black canvas.
- Use violet only for singular primary actions and interaction emphasis.
- Keep text contrast at or above 4.5:1 for reading content.

## Responsive

- The mobile experience must preserve the same narrative and background language as desktop.
- Reduce WebGL pixel density on narrow screens and remove nonessential blur.
- Touch targets remain at least 44×44px, with no horizontal overflow.
