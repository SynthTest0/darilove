---
name: DARI LOVE
description: Обучение интимности как переплетённая вручную книга: вишнёвый бархат, золочёный обрез, корешок как единственная вертикальная ось.
colors:
  ink: "#241017"
  wine-deep: "#2C1015"
  wine: "#4A1F24"
  wine-lit: "#6B2A31"
  cream: "#F2E2DA"
  skin: "#C9A392"
  muted: "#A98A85"
  gold: "#D9A24E"
  gold-hi: "#FCCB6D"
  gold-deep: "#7A5320"
  gold-dim: "#8A6A38"
  edge: "rgb(252 231 220)"
typography:
  display:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "clamp(2.8rem, 1rem + 7vw, 6.5rem)"
    fontWeight: 400
    lineHeight: 0.94
    letterSpacing: "-0.015em"
  headline:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "clamp(2rem, 1.2rem + 3.2vw, 3.6rem)"
    fontWeight: 400
    lineHeight: 1.02
  numeral:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "clamp(1.7rem, 1rem + 2.2vw, 2.6rem)"
    fontWeight: 400
    lineHeight: 1
    fontFeature: "tabular-nums"
  title:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "clamp(1.35rem, 1.1rem + 1.1vw, 2rem)"
    fontWeight: 400
    lineHeight: 1.1
  wordmark:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "clamp(1.35rem, 1.1rem + 1.1vw, 2rem)"
    fontWeight: 400
    letterSpacing: "0.34em"
  body:
    fontFamily: "Golos Text, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Golos Text, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0.2em"
  micro:
    fontFamily: "Golos Text, system-ui, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 400
    letterSpacing: "0.18em"
  action:
    fontFamily: "Golos Text, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.01em"
rounded:
  xs: "3px"
  s: "6px"
  m: "10px"
  l: "14px"
  xl: "18px"
  pill: "999px"
spacing:
  spine: "84px"
  spine-narrow: "56px"
  gutter: "clamp(18px, 4vw, 56px)"
  section: "clamp(60px, 9vw, 120px)"
  panel-pad: "clamp(28px, 4vw, 48px)"
  card-pad: "clamp(16px, 2vw, 26px)"
  container: "1360px"
components:
  pill:
    backgroundColor: "{colors.wine-lit}"
    textColor: "{colors.cream}"
    typography: "{typography.action}"
    rounded: "{rounded.pill}"
    padding: "0.95em 1.9em"
  pill-quiet:
    backgroundColor: "transparent"
    textColor: "{colors.skin}"
    typography: "{typography.action}"
    rounded: "{rounded.pill}"
    padding: "0.95em 1.9em"
  panel:
    backgroundColor: "{colors.wine-deep}"
    textColor: "{colors.cream}"
    rounded: "{rounded.xl}"
    padding: "{spacing.panel-pad}"
  tome:
    backgroundColor: "{colors.wine-deep}"
    textColor: "{colors.cream}"
    rounded: "{rounded.l}"
    padding: "{spacing.card-pad}"
  plate:
    backgroundColor: "{colors.wine-deep}"
    rounded: "{rounded.m}"
  colophon-row:
    textColor: "{colors.cream}"
    typography: "{typography.title}"
    padding: "12px 0"
---

# Design System: DARI LOVE

## Overview

**Creative North Star: "The Hand-Bound Volume"**

The site is a book, not a landing page: a cherry-velvet binding, a gilded fore-edge, a spine that is the page's only vertical axis, a cloth ribbon marking how far you have read, and a colophon where a price table would normally sit. Everything the visitor touches is a material — velvet with a light top edge, gold leaf that catches as you scroll, a striped headband at the head of the spine, marbled endpaper behind the footer. The confirmed rejection is the boudoir landing page: no full-bleed photograph, no cover shot behind the headline. Imagery is *tipped in* as plates in 4:5 frames, the way a plate is pasted into a printed book.

Density is editorial rather than promotional. Long measures are capped (46–68ch), display type is set tight (0.94–1.06 line-height) and body type set open (1.6), and vertical rhythm is carried by fluid section padding rather than a fixed 8pt grid. The page is dark throughout and never reaches pure black; the palette was eyedropped from photographs of a burgundy latex dress and floors at Wine Deep (#2C1015).

Motion is one idea repeated. A single scroll-driven variable (`--fill`) and a reading-progress variable (`--read`) drive the hero rule, the wipe that swaps the hero photograph, the gilding of the fore-edge, the length of the ribbon and the state of the spine ticks. Nothing else animates on scroll. Everything decorative stands down under `prefers-reduced-motion`, on coarse pointers, and on narrow viewports.

**Key Characteristics:**
- Cherry velvet ground, no pure black anywhere in the interface
- Gold used only as an event: gilding, ribbon, rules, active state
- One material recipe (light top edge, inner downward shading, soft wine-tinted drop) shared by every raised surface
- Spine as the only vertical axis; the page body is inset by its width
- Bindery detail as ornament: headband, gutter shadow, versal, fleuron, marbled endpaper
- One animation primitive: fill, expressed five ways

## Colors

A single hue family — cherry through wine to ink — lit by one warm metal, sampled from photographs of a burgundy latex dress.

### Primary
- **Gilt Gold** (#D9A24E): the event colour. Fore-edge gilding, ribbon body, active spine tick, active carousel dot, versal, fleuron, FAQ toggle marks, the rule after `.tome__more`, caret.
- **Gilt Highlight** (#FCCB6D): the lit top of any gold gradient, the focus ring, the numeral of the highlighted volume.
- **Gilt Dim** (#8A6A38) and **Gilt Deep** (#7A5320): gold at rest — the fore-edge before the fill runs, and the shadow end of every gold gradient.

### Secondary
- **Lit Wine** (#6B2A31): the raised face. Pill buttons, selection highlight, and the local override that lifts the "private" panel and the consultation volume above the surrounding wine.
- **Wine** (#4A1F24): the brightest velvet field in the fixed background wash.

### Neutral
- **Ink** (#241017): the page floor under the velvet layers; also the header and dock scrims.
- **Wine Deep** (#2C1015): every panel, card, plate frame and the spine. The palette's black substitute; nothing goes darker.
- **Cream** (#F2E2DA): primary text, wordmarks, headings.
- **Skin** (#C9A392): secondary text — ledes, nav links, list items, quiet button labels.
- **Muted Rose** (#A98A85): tertiary text — captions, folio, counters, consent, legal, teaser copy.
- **Edge Light** (rgb 252 231 220): never used raw. It exists only as an alpha ladder (5%, 8%, 10%, 14%, 20%, 32%) for the light edge of the material, borders and hairline dividers.

### Named Rules
**The No-Black Rule.** The darkest interface value is Wine Deep (#2C1015). `#000` never appears as a surface, a border or a shadow; shadows are wine-tinted (rgba(30,12,18,…) / rgba(34,14,20,…)) and mask gradients paint with `var(--cream)` because a mask reads alpha only.

**The Gold-As-Event Rule.** Gold marks a change of state or the edge of an object — gilding, progress, current, opening. It is never a background fill and never body text.

**The Edge Ladder Rule.** Any light stroke, border or inner highlight comes from the `--edge-*` alpha ladder on one cream RGB. Do not introduce a new light colour to get a lighter border; step up the ladder.

**The Photographs Are Not Governed Rule.** The palette governs the interface, not the imagery. Photographs ship in their own colour with no filter and no blend mode; the plate contributes only a frame. Their studio backgrounds are darker than the palette floor, and that is accepted as photographic truth rather than a system value.

## Typography

**Display Font:** Cormorant Garamond (with Georgia, serif)
**Body Font:** Golos Text (with system-ui, sans-serif)

**Character:** A high-contrast Renaissance serif set large and tight against a plain, contemporary Cyrillic grotesque set small and open — the printed page against its caption. The split is forced by Cyrillic coverage: Cormorant carries Cyrillic in both roman and italic, Golos Text in roman only, so **every italic on the site is Cormorant** and Golos never italicizes.

### Hierarchy
- **Display** (400, clamp 2.8–6.5rem, 0.94, −0.015em): the h1 only. Carries a two-part letterpress relief text-shadow (light on the upper edge, shadow beneath). Constrained further by viewport height (`min(--step-5, 9.2vh)`) so the title spread always fits one screen.
- **Headline** (400, clamp 2–3.6rem, 1.0–1.06): section h2s, volume titles, modal h3, the manifesto line.
- **Numeral** (400, clamp 1.7–2.6rem, 1): volume numbers and the live-format facts. Tabular figures via `.tabular`.
- **Title** (400, clamp 1.35–2rem): colophon prices, about-facts, gate heading.
- **Wordmark** (400, 0.34em tracked, uppercase, with `love` in italic Cormorant rotated −4°): brand lockup in the hero, spine (0.44em, vertical) and footer.
- **Body** (400, 1.0625rem, 1.6): all running copy. Measure capped at 44–52ch for paragraphs, 62–68ch for long-form and legal.
- **Label** (400, 0.8125rem, 0.2–0.24em, uppercase): subject line, audience lines, captions, modal meta.
- **Micro** (400, 0.6875rem, 0.18–0.3em, uppercase): spine ticks and folio only.
- **Action** (600, 0.9375rem, 1, 0.01em): pill buttons, the one place a 600 weight appears.

### Named Rules
**The Cormorant-Owns-Italic Rule.** Every italic and every large numeral is Cormorant Garamond. Golos Text is roman only — it has no Cyrillic italic, and synthesized slant is disabled globally (`font-synthesis-weight: none`).

**The Two-Weight Rule.** Golos ships at 400 for text and 600 for actions. Cormorant ships at 400 everywhere. No other weight is used to create emphasis; use size, colour or the gilt treatment instead.

**The Gilt Line Rule.** `.gilt` — italic Cormorant with a gold gradient clipped to the glyphs — marks exactly one phrase per block (the display line, the manifesto). It is the typographic form of the fill primitive and loses its point if repeated.

**No Oldstyle Figures.** Recorded as impossible, not pending: the Google Fonts build of Cormorant Garamond exposes only `calt, ccmp, dnom, frac, liga, lnum, locl, numr, tnum` in GSUB. There is no `onum` on this face, so `font-variant-numeric: oldstyle-nums` is inert. Numerals are lining; where they align in columns, use `tabular-nums` via `.tabular`.

## Layout

The page is inset from the left by the spine width (84px desktop, 56px at ≤640px), which is also the left origin of the fixed bottom dock. Content sits in a 1360px container with a fluid gutter (18–56px).

The title spread is a two-column grid (1.05fr / 0.95fr) with the lead and colophon stacked in the left column and the frontispiece spanning both rows on the right. Above 1020px the whole spread is additionally sized against viewport height — the h1, plate and colophon rows all shrink so the first screen holds the title, the subject line, the button, the colophon and the plate at once. Below 1020px every two-column grid (hero, private, about, lead, modal) collapses to one column and the hero re-orders to heading → lede → actions → plate → prices; the fore-edge is dropped because it has nowhere to sit.

Section rhythm is fluid rather than stepped: `clamp(60px, 9vw, 120px)` between major sections, `clamp(50px, 9vw, 120px)` around the manifesto, panel padding `clamp(28px, 4vw, 48px)`, card padding `clamp(16px, 2vw, 26px)`. Breakpoints are only two: 1020px (layout collapse) and 640px (spine narrows, spine nav and dock note drop).

The table of contents is a pinned horizontal carousel: a sticky pane anchored to the **top** of the viewport (not centred), one full-width volume per step, translated in pixels from JS because the gap is a `clamp()`. It degrades to a plain vertical list on coarse pointers, at ≤1020px, and under reduced motion — the pane goes static and the track becomes a column.

### Named Rules
**The One-Screen Title Rule.** The first viewport must contain the whole title spread. When height is short, type scales against `vh` before anything is allowed to scroll.

## Elevation & Depth

Hybrid: one material recipe plus tonal layering. Depth is built from a light top edge and inner shading rather than from stacked shadow tiers — the surface reads as a raised velvet-covered board, not as a floating card. There is exactly one elevation level; nothing raises on hover.

### Shadow Vocabulary
- **Material** (`0 1px 0 var(--edge-14) inset, 0 -14px 30px rgba(34,14,20,.24) inset, 0 22px 44px -18px rgba(30,12,18,.85)`): every panel, card, modal body and gate card. Applied via `.material`.
- **Pill at rest** (`0 1px 0 rgba(255,240,232,.28) inset, 0 -10px 18px rgba(34,14,20,.24) inset, 0 14px 26px -12px rgba(30,12,18,.9)`): the same recipe, tightened for a small convex object.
- **Pill pressed** (`0 2px 6px rgba(30,12,18,.55) inset, 0 10px 20px rgba(34,14,20,.42) inset, 0 2px 6px -4px rgba(30,12,18,.9)`) with `translateY(2px) scale(0.975)`: the button is pushed into the board.
- **Frontispiece** (`0 40px 80px -30px rgba(30,12,18,.95)`): the deepest drop on the site, reserved for the tipped-in plate.
- **Gutter shadow** (`linear-gradient(90deg, rgba(30,12,18,.55), rgba(30,12,18,.18) 42%, transparent)`, 26px): a painted band, not a box-shadow, where the page leaves the spine.

### Named Rules
**The One Material Rule.** Raised surfaces use `.material` unmodified. To make a surface read brighter, override `--wine-deep` locally to `--wine-lit` (as the private panel and the consultation volume do); do not write a new shadow.

**The Wine Shadow Rule.** Every shadow is tinted wine. A neutral or black shadow is a defect.

**The Flat-Hover Rule.** Hover never lifts. It brightens (`filter: brightness(1.09)`), lengthens a rule, or reveals a label — and only behind `(hover: hover) and (pointer: fine)`, because a sticky hover after a tap is worse than no hover.

## Shapes

One radius ladder, applied by object size: 3px for the hairline detail (fore-edge caps, the spine-side corners of the frontispiece), 6px for image plates inside cards and the focus ring, 10px for standalone plates, 14px for cards and volumes, 18px for full panels and the modal, 999px for pills. The frontispiece is deliberately asymmetric — 3px on the binding side, 14px on the outer side — so the plate reads as a page hinged at the spine.

Borders are 1px hairlines from the edge ladder, brighter on top than on the sides. Dividers are the same hairline: the colophon, the live-format grid, the FAQ rows and the footer all separate with a 1px `--edge-*` line and no other decoration. Photographic frames are 4:5 without exception. Non-rectangular geometry appears exactly twice: the ribbon's notched tail (`clip-path` polygon) and the clip that reveals the gilding on the fore-edge.

## Components

### Buttons
- **Shape:** fully rounded pill (999px).
- **Primary:** lit-wine face under a light-to-dark gradient, cream label at 600/0.9375rem, padding 0.95em 1.9em, top border stepped to `--edge-32` so the object reads convex.
- **Hover / Focus:** brightness 1.09 on fine pointers only; focus-visible is a 2px `--gold-hi` outline offset 3px, globally, on every link, button and summary.
- **Active:** presses in — 2px down, 0.975 scale, shadow inverted to inner.
- **Quiet:** transparent face, skin-coloured label, a single inset highlight line and no drop. Used for the secondary action beside every primary.

### Cards / Containers
- **Corner Style:** 14px for volumes and reviews, 18px for full-width panels and the modal.
- **Background:** `.material` over Wine Deep; brighter variants override `--wine-deep` to Lit Wine.
- **Shadow Strategy:** the Material recipe, unchanged (see Elevation).
- **Border:** 1px edge-ladder hairline, top edge brighter.
- **Internal Padding:** `clamp(16px, 2vw, 26px)` for volumes, `clamp(28px, 4vw, 48px)` for panels.

### Navigation
Two navigations, both quiet. The **header** is sticky, blurred (10px) over an ink-to-transparent scrim, right-aligned, and retracts on downward scroll past 240px; links are skin, brighten to cream on fine-pointer hover, and the Telegram pill always terminates the row. Below 1020px only the tribute link and pill survive; below 640px only the pill. The **spine nav** is a column of 22px ticks: a 1px rule at `scaleX(0.55)` that grows to full width and turns gold when its section is current or hovered, with the section name fading in beside it on hover or focus. It scales on transform, never width. It is removed at ≤640px.

### Colophon
A description list standing in for a price table: label in cream Golos with a muted sub-line, value in Cormorant at title size, one hairline per row and a hairline above the first. No cell backgrounds, no emphasis on any single row.

### Fore-Edge
The signature. A vertical 8px strip outside the frontispiece frame (the plate clips, so the gilding must live outside it), painted in dim gold at rest with a bright gold layer revealed top-down by `clip-path: inset(calc(100% - var(--fill) * 100%) 0 0 0)`. It is the fill primitive's most literal expression: the book gilds itself as you read. Hidden below 1020px.

### Ribbon (Ляссе)
Cloth, not a hairline: 11px wide at the spine's right edge so it clears the wordmark, a lengthwise sheen gradient over a top-lit gold gradient, a notched tail via clip-path, and a length driven directly by `--read`. It is the only reading-progress indicator; there is no progress bar.

### Volume Carousel
Full-width cards in a horizontal track; the off-centre card fades via `opacity: calc(1 - var(--away) * .75)`. Each plate is 4:5 with a per-card `object-position` and scale so four crops from one shoot do not read as a repeated pose. The consultation volume is set apart by lifting its surface to Lit Wine and its numeral to Gilt Highlight — not by a badge. Dots are 34×2px rules, gold when current.

### Bindery Ornament
Non-interactive detail that carries the world: a 2px-striped gold/cream/wine headband across the head of the spine; a letterpress relief on the display line; a Cormorant versal dropping three lines into the manifesto in gold; an inline-SVG fleuron closing the manifesto and repeating in the footer; and marbled endpaper behind the footer — four layered repeating gradients at 38% opacity, masked to fade at both ends. All of it is `aria-hidden` and none of it carries meaning.

## Do's and Don'ts

### Do:
- **Do** build every raised surface from `.material` and change its tone by overriding `--wine-deep` locally.
- **Do** take light strokes from the `--edge-*` alpha ladder and radii from the `--r-*` ladder; a new literal in either family is a drift.
- **Do** drive any new scroll-linked effect from the existing `--fill` / `--read` variables rather than adding a second scroll listener.
- **Do** paint mask gradients with `var(--cream)`; a mask reads alpha, and `#000` there is a false colour token.
- **Do** gate every hover behind `(hover: hover) and (pointer: fine)`, and give every movement a reduced-motion path that keeps opacity and colour.
- **Do** set every italic and every large numeral in Cormorant Garamond, and use `.tabular` wherever figures align.
- **Do** frame photographs 4:5 inside `.plate` and let the frame — not a filter — do the work.

### Don't:
- **Don't** use `#000` or a neutral shadow anywhere in the interface; the floor is Wine Deep and shadows are wine-tinted.
- **Don't** apply a duotone, blend mode or colour filter to a photograph. Removing it was a client decision; the plate contributes a frame only.
- **Don't** use gold as a fill or as body text — it marks state and edges.
- **Don't** raise a surface on hover or introduce a second elevation tier.
- **Don't** rely on `oldstyle-nums`; the shipped Cormorant build has no `onum` table and the declaration does nothing.
- **Don't** put a full-bleed photograph behind the headline. Imagery is tipped in, never a backdrop — this is the build's founding refusal.
- **Don't** let the title spread overflow the first viewport; scale type against `vh` before allowing a scroll.
