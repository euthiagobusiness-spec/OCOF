# OCOF — Home Override

This page override preserves the approved OCOF brand direction when it differs from the generated master recommendation.

## Visual thesis

An executive, cinematic growth narrative: near-black environments, restrained warm-gold light, generous negative space and liquid-glass surfaces that feel substantial rather than futuristic.

## Palette

- Background: `#050505`
- Elevated surface: `rgba(24, 22, 20, 0.72)`
- Primary text: `#F4F1EC`
- Secondary text: `#C9C3BA`
- Accent: `#D8B78E`
- Accent deep: `#9B7651`
- Focus ring: `rgba(216, 183, 142, 0.92)`

## Typography

- Display and headings: Archivo variable, already bundled locally.
- Body and controls: Manrope variable, already bundled locally.
- Editorial accents: Plus Jakarta Sans variable, already bundled locally.
- Avoid external font requests and preserve fast local rendering.

## Motion

- Framer Motion is the primary animation layer.
- Cinematic section reveals may retain the approved five-second duration.
- Direct interactions (hover, tap, accordion feedback) must remain responsive at 180–600ms.
- Animate opacity and transforms; avoid layout-thrashing properties.
- Pause continuous WebGL motion while offscreen or when the document is hidden.
- Render final readable states under `prefers-reduced-motion`.

## Surfaces

- No visible divider lines around cards or between sections.
- Create separation with depth, soft light, opacity and large multi-stop gradients.
- Use liquid glass only for navigation, primary controls and selected cards.
- Keep text contrast at or above 4.5:1 for reading content.

## Responsive

- The mobile experience must preserve the same narrative and background language as desktop.
- Reduce WebGL pixel density on narrow screens and remove nonessential blur.
- Touch targets remain at least 44×44px, with no horizontal overflow.
