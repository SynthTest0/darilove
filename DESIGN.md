---
name: DARI LOVE
description: Обучение интимности подано материально — как латекс под студийным светом: почти чёрные натянутые плоскости во всю ширину, жёсткие блики по кромке, один алый акцент.
colors:
  void: "#0A0709"
  pitch: "#120C0F"
  slab: "#191115"
  slab-lit: "#21161B"
  latex: "#A50F26"
  latex-lit: "#D51C3B"
  latex-hot: "#FF4C63"
  latex-low: "#4E0A16"
  latex-shadow: "#2A0710"
  bone: "#F5EFEF"
  ash: "#A2908F"
  dim: "#6E5F62"
  sheen: "rgb(255 244 244)"
  latex-rgb: "165 15 38"
  latex-lit-rgb: "213 28 59"
  latex-hot-rgb: "255 76 99"
  latex-low-rgb: "78 10 22"
  shade: "rgb(12 4 7)"
  shade-lit: "rgb(60 4 14)"
  shade-hot: "rgb(70 6 18)"
typography:
  display:
    fontFamily: "Unbounded, system-ui, sans-serif"
    fontSize: "clamp(2.2rem, 0.6rem + 5.6vw, 4.3rem)"
    fontWeight: 700
    lineHeight: 0.96
    letterSpacing: "-0.035em"
    textTransform: "uppercase"
  headline:
    fontFamily: "Unbounded, system-ui, sans-serif"
    fontSize: "clamp(1.85rem, 1.1rem + 3vw, 3.3rem)"
    fontWeight: 700
    lineHeight: 0.96
    letterSpacing: "-0.035em"
    textTransform: "uppercase"
  numeral:
    fontFamily: "Unbounded, system-ui, sans-serif"
    fontSize: "clamp(1.6rem, 1rem + 2.2vw, 2.5rem)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.04em"
    fontFeature: "tabular-nums"
  title:
    fontFamily: "Unbounded, system-ui, sans-serif"
    fontSize: "clamp(1.25rem, 1rem + 1.1vw, 1.85rem)"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.03em"
  wordmark:
    fontFamily: "Unbounded, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 700
    letterSpacing: "0.18em"
    textTransform: "uppercase"
  accent:
    fontFamily: "Rubik, system-ui, sans-serif"
    fontStyle: "italic"
    fontWeight: 500
    letterSpacing: "-0.01em"
  script:
    fontFamily: "Marck Script (assets/fonts/MarckScript-Regular.ttf, разбирается в контуры)"
    fontSize: "1.7em от кегля строки"
    usage: "единственное слово первого экрана, пишется росчерком"
  quote:
    fontFamily: "Rubik, system-ui, sans-serif"
    fontStyle: "italic"
    fontWeight: 400
    fontSize: "1.0625rem"
    lineHeight: 1.55
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
    letterSpacing: "0.12em"
    textTransform: "uppercase"
  micro:
    fontFamily: "Golos Text, system-ui, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 500
    letterSpacing: "0.2em"
    textTransform: "uppercase"
  action:
    fontFamily: "Golos Text, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.005em"
rounded:
  xs: "2px"
  s: "5px"
  m: "10px"
  l: "18px"
  xl: "28px"
  pill: "999px"
spacing:
  pad: "clamp(20px, 5vw, 64px)"
  section: "clamp(70px, 12vh, 140px)"
  panel-pad: "clamp(28px, 4vw, 52px)"
  card-pad: "clamp(18px, 2.2vw, 26px)"
  container: "1240px"
components:
  pill:
    background: "linear-gradient(178deg, {colors.latex-lit}, {colors.latex} 58%, #8C0C20)"
    textColor: "{colors.bone}"
    typography: "{typography.action}"
    rounded: "{rounded.m}"
    padding: "1em 1.7em"
  pill-quiet:
    background: "linear-gradient(178deg, {colors.slab-lit}, {colors.pitch})"
    textColor: "{colors.bone}"
    typography: "{typography.action}"
    rounded: "{rounded.m}"
    padding: "1em 1.7em"
  material:
    background: "linear-gradient(180deg, {colors.slab-lit}, {colors.slab} 62%, {colors.pitch})"
    textColor: "{colors.bone}"
    rounded: "{rounded.xl}"
    padding: "{spacing.panel-pad}"
  material-hot:
    background: "linear-gradient(168deg, {colors.latex-lit}, {colors.latex} 54%, {colors.latex-low})"
    textColor: "{colors.bone}"
    rounded: "0"
    padding: "{spacing.panel-pad}"
  slab:
    background: "{components.material.background}"
    textColor: "{colors.bone}"
    rounded: "{rounded.l}"
    padding: "{spacing.card-pad}"
  plate:
    backgroundColor: "{colors.pitch}"
    rounded: "{rounded.l}"
  rate:
    textColor: "{colors.bone}"
    typography: "{typography.title}"
    padding: "clamp(20px, 3vw, 30px) clamp(16px, 2.4vw, 32px)"
  thanks-widget:
    background: "linear-gradient(178deg, {colors.slab-lit}, {colors.pitch})"
    textColor: "{colors.bone}"
    typography: "{typography.action}"
    rounded: "{rounded.pill}"
    padding: "0.85em 1.25em"
  ticks:
    color: "{colors.dim}"
    activeColor: "{colors.latex-hot}"
    size: "18x2px, активная растягивается до 1.7"
---

# Design System: DARI LOVE

## Overview

**Creative North Star: "Latex Under Studio Light"**

The page is a material, not a document. Every surface behaves like a sheet of latex pulled taut: near-black, glossy, with a hard specular line along its top edge, an oblique sheen running across the plane, and dense shadow pooling at the bottom. Red appears only where light hits it. This direction replaced "The Hand-Bound Volume" (`variants/a-perepliot.html`) at the client's request; the book metaphor — spine, gilding, ribbon, colophon, fleuron, versal — is gone in full, and nothing from it should be reintroduced piecemeal.

Planes run edge to edge and butt against each other. Air lives *inside* a plane, not between planes: the manifesto and the closing CTA are full-bleed red slabs with generous internal padding, the price strip is a full-width three-cell band with hairline dividers, and the hero photograph runs off the right edge of the screen. There are no floating cards on an empty background.

Typography is a single wide grotesque in uppercase — no serif appears anywhere on the site. Two exceptions, both deliberate: the accent word set in a red italic (`love`, `не учит`), and the hero's last word, which is *written* rather than typeset — Marck Script glyphs parsed into contours and drawn stroke by stroke, then inked in.

Motion is three ideas repeated. Scroll drives `--fill` and `--read`: the header progress line, the seam in the footer, the red edge of the hero frame, the side ticks. Everything else is a spring — the same critically-damped integrator (stiffness 0.16, damping 0.76–0.78) settles the material ribbon after a drag, the attributes floating behind it, and the thanks widget after a scroll kick. Third, sections arrive and leave: 26px of travel and a fade over 420ms on a strong ease-out, staggered 40-80ms between siblings, driven by an `IntersectionObserver` that never disconnects — a block that scrolls back out slides away to the side it came from, because the state is where the block sits relative to the window, not a one-off event. Interaction motion is the metal sweep and the press sink on buttons. The page itself scrolls natively; no script intercepts the wheel. Everything decorative stands down under `prefers-reduced-motion`, on coarse pointers, and at ≤1020px.

**Key Characteristics:**
- Almost-black tensioned planes, full-bleed, no floating cards
- One accent (latex red) in four light states — shadow, base, lit, specular
- One material recipe: hard top edge, oblique sheen, inner bottom darkening, red-tinted drop
- No serif anywhere; uppercase wide grotesque for every heading
- Italic exists once per block, in red, and is a different family by necessity
- One handwritten word per page, drawn as a stroke rather than set as type
- Three motion primitives: scroll fill, the levitation drift, and a one-shot section reveal; native page scrolling, never hijacked

## Colors

One hue family — scarlet through crimson to near-black — lit as if by a single studio strobe.

### Primary
- **Latex Lit** (#D51C3B): the lit face of the accent. Button faces, the red slabs, active carousel dot, chapter numerals.
- **Latex** (#A50F26): the accent at its base value, the bottom of every red gradient.
- **Latex Hot** (#FF4C63): specular red. The accent word, the FAQ toggle, list bullets, the active nav underline, focus ring, and the progress line's leading end. Never a fill.
- **Latex Low** (#4E0A16) and **Latex Shadow** (#2A0710): the shadow end of the red gradient, the background wash on the right of the field, and the face of a button placed *on* red.

### Neutral
- **Void** (#0A0709): the page floor and the scrims behind the header, gate and thanks widget.
- **Pitch** (#120C0F): the bottom of every raised surface's gradient, plate backgrounds.
- **Slab** (#191115) and **Slab Lit** (#21161B): the body and the lit top of every raised surface.
- **Bone** (#F5EFEF): primary text, headings, wordmark.
- **Ash** (#A2908F): secondary text — ledes, running copy, nav links.
- **Dim** (#6E5F62): tertiary text — labels, captions, counters, legal, subject line.
- **Sheen** (rgb 255 244 244): never used raw. It exists only as an alpha ladder (6%, 10%, 16%, 24%, 40%, 70%) for the specular edge, borders and hairline dividers.

### Named Rules
**The No-Black Rule survives the redesign.** The darkest interface value is Void (#0A0709). `#000` never appears as a surface, a border or a shadow; shadows are red-tinted (rgba(12,4,7,…) / rgba(9,3,5,…) / rgba(70,6,18,…)). The palette moved from cherry to scarlet at the client's instruction, but the prohibition on pure black did not move.

**The Light-Makes-Red Rule.** Red is a lit material, not a colour swatch. It always arrives as a gradient with a specular top and a shadowed bottom; a flat `background: var(--latex)` reads as paint, not latex, and is wrong.

**The One-Source Rule.** Every red in a gradient, glow or shadow is mixed from the palette's own triplets (`--latex-rgb`, `--latex-lit-rgb`, `--latex-hot-rgb`, `--latex-low-rgb`) at some alpha, never from a neighbouring shade picked by eye. Wanting a slightly different red means changing the alpha, not inventing a value.

**The Sheen Ladder Rule.** Any light stroke, border or inner highlight comes from the `--sheen-*` alpha ladder on one warm-white RGB. To get a brighter edge, step up the ladder — do not introduce a new light colour.

**The Photographs Are Not Governed Rule.** Carried over unchanged. The palette governs the interface, not the imagery: photographs ship in their own colour, no filter, no blend mode. The plate contributes a crop, a radius and an edge highlight only.

## Typography

**Display Font:** Unbounded (with system-ui, sans-serif)
**Body Font:** Golos Text (with system-ui, sans-serif)
**Accent Font:** Rubik Italic (with system-ui, sans-serif)

**Character:** A wide geometric grotesque set uppercase and very tight against a plain, contemporary Cyrillic sans set small and open. There is no serif on the site — the previous direction's Cormorant Garamond is gone. Cyrillic coverage was verified against the CSS Google Fonts serves to a current Chrome user agent: Unbounded and Golos Text both carry `U+0400-045F`; **neither ships an italic**. Rubik is loaded in italic only, for Cyrillic italic, and appears nowhere in roman. A fourth face, Marck Script, is not loaded as a web font at all: the TTF is vendored in `assets/fonts/` and parsed into contours by `js/handwriting.js`, because a web font renders as filled shapes with nothing to stroke.

### Hierarchy
- **Display** (700, clamp 2.2–4.3rem, 0.96, −0.035em, uppercase): the h1 only. Its first two lines are `nowrap` so the break falls where it was written; the ceiling is set by the longest line fitting the left column. Its third line is the handwritten word at 1.7em.
- **Headline** (700, clamp 1.85–3.3rem, uppercase): section h2s. The private-consultation h2 steps down to the numeral size because its two words are long enough to overflow a half-width column.
- **Numeral** (800, clamp 1.6–2.5rem, −0.04em): chapter numbers (01–04) and the live-format facts. Tabular figures via `.tabular`.
- **Title** (600–700, clamp 1.25–1.85rem): card titles, prices, about-facts, FAQ questions (500).
- **Wordmark** (700, 0.18em tracked, uppercase, with `love` in Rubik italic in Latex Hot): header and footer.
- **Body** (400, 1.0625rem, 1.6): all running copy. Measure capped at 40–46ch for paragraphs, 52–62ch for long-form and legal.
- **Label** (400–500, 0.8125rem, 0.12em, uppercase): nav links, fact captions, footer links.
- **Micro** (500, 0.6875rem, 0.14–0.22em, uppercase): subject line, card audience lines, price notes, meta.
- **Action** (600, 0.9375rem): buttons — the only place Golos ships at 600.

### Named Rules
**The Rubik-Owns-Italic Rule.** Every italic on the site is Rubik. Unbounded and Golos Text have no italic in the served build, and synthesis is disabled globally (`font-synthesis-weight: none`), so an italic requested from either would silently render upright.

**The One-Accent-Per-Block Rule.** `.hot` — red Rubik italic — marks exactly one phrase per block: the manifesto line, the wordmark. Repeating it inside a paragraph destroys the effect.

**The One-Written-Word Rule.** The handwriting treatment belongs to a single word on the page. It costs a font parse and 7 animated contours; a second one would read as a gimmick and double the cost. It writes itself when it first enters the viewport, rewrites on every return, and rewrites once more the moment the age gate is dismissed — otherwise the whole performance happens behind the blur and nobody sees it.

**The Quote Rule.** Direct speech is set in Rubik italic inside guillemets, with a rule in Latex Shadow down its left side — not in the display face, and never in quotation marks alone.

**The No-Serif Rule.** Zero serifs. If a passage needs to feel softer, lower the weight or the contrast; do not reach for an antiqua.

**The Uppercase-Headings Rule.** Every h1/h2/h3 is uppercase with −0.03…−0.035em tracking. Long Russian compounds are handled with `overflow-wrap: break-word` and a smaller step, never by letting a heading run under a neighbouring element.

## Layout

Content sits in a 1240px container with fluid padding (`clamp(20px, 5vw, 64px)`). Full-bleed planes — the price strip, the manifesto, the closing CTA — carry no container and pad themselves with `max(--pad, calc(50vw - var(--page) / 2))` so their text still aligns to the container's left edge while the plane runs to the screen edge.

The first screen is a two-column grid (1fr / 0.86fr): copy on the left, photograph on the right, stretched to the section's full height with its top-left corner rounded and its other edges cut by the viewport. Below it the price strip spans the width as three cells divided by hairlines, with the address note as a separate full-width row underneath.

Section rhythm is `clamp(70px, 12vh, 140px)`; panel padding `clamp(28px, 4vw, 52px)`; card padding `clamp(18px, 2.2vw, 26px)`. Breakpoints: 1020px (every two-column grid collapses; the hero photo loses its radius and the pinned carousel is disabled), 900px (header nav and the thanks link drop, leaving the wordmark and the Telegram key), 860px (private, about, lead and manifesto collapse), 720px (modal collapses), 640px (dock note drops).

The chapter list is a pinned horizontal carousel: a sticky pane centred in the viewport, one step per card, translated in pixels from JS because the gap is a `clamp()`. It degrades to a responsive grid on coarse pointers, at ≤1020px and under reduced motion — the pane goes static, the track becomes a grid, and the dots hide.

### Named Rules
**The Planes-Touch Rule.** Full-bleed planes butt directly against their neighbours with no gap and no radius on the bleeding edges. A red slab with rounded corners floating on the field is the wrong idiom.

## Elevation & Depth

### Shadow Vocabulary
One recipe, applied to every raised surface:
1. `0 1px 0 sheen-24 inset` — the hard specular line along the top edge
2. an oblique `linear-gradient(104deg, …)` sheen at 6–12% across the plane
3. `0 -30px 50px -20px rgba(8,2,4,.7) inset` — pooled shadow at the bottom
4. `0 26px 50px -22px rgb(9 3 5 / .85)` — the red-tinted drop, from the `--shade-*` ramps (`--shade-rgb` under dark surfaces, `--shade-lit-rgb` / `--shade-hot-rgb` under red ones)

Red planes use the same four steps with a brighter top (`sheen-40`) and a red-tinted pool.

### Named Rules
**The One-Light Rule.** Light comes from above and slightly to the left. Every specular edge is on top, every pool is at the bottom, every drop shadow falls down. A surface lit from another direction breaks the material.

## Shapes

Radii are tight because latex is stretched: 2 / 5 / 10 / 18 / 28px plus a pill for dots only. Buttons are 10px rectangles, not pills — the previous direction's pill silhouette is gone. Cards are 18px, full panels 28px, and any edge that meets the viewport is square.

## Components

### Buttons
`.pill` is a liquid-metal key in burgundy, built the way the reference component builds it (21st.dev, "Liquid Metal Button"): the element itself carries a conic gradient that turns continuously through a registered `--metal` angle property, `::before` lays the dark face 2px inside it so the gradient reads as a molten rim, and `::after` runs the oblique highlight. Hover speeds the rotation from 14s to 5s and adds a red bloom; press sinks it `translateY(1px) scale(0.975)` and drops an inner shadow onto the face; a click drops a radial ripple that expands and fades in 600ms. `.pill--quiet` is the same body in a darker, desaturated metal, and a key placed on a red plane inverts to near-black so it stays the darkest thing in the block. Under `prefers-reduced-motion` the metal stops turning and the ripple is suppressed.

### Material Panels
`.material` and `.material--hot` are the only two surface treatments. Cards (`.slab`), the modal, the gate and the private panel all take `.material`; the manifesto and the closing CTA take `.material--hot` with square corners and full bleed.

### Navigation
A fixed header with the wordmark, five section links and the Telegram key. Links carry `aria-current` from the scroll observer and show a red underline when current. The header hides on scroll-down past 240px and returns on scroll-up; a 2px progress line runs along its bottom edge, its width driven by `--read`.

### Price Strip
`.rates` is a three-cell band, not a table and not a card: hairline dividers, the price in Unbounded 600, the note in micro caps below the name. It stacks to one column with the value pushed to the right at ≤1020px.

### Material Accordion
The materials are an elastic accordion, matching the reference the client chose (21st.dev, "Elastic Gallery" by daiv09). Panels share one row; the active one takes `flex: 4`, the rest `flex: 1`, eased with `cubic-bezier(0.25, 1, 0.5, 1)` over 700ms. Inactive panels sit at `brightness(0.5)` (0.75 on hover) with their photograph at `scale(1.1)`; the active one comes to full brightness and `scale(1)` over 1000ms, so the image settles a beat after the panel. Its caption block rises 48px with a 200ms delay; the collapsed panel's vertical label fades out at once and returns with a 500ms delay.

Scroll drives the accordion: on wide screens the section sticks to the viewport for `100vh + 70vh` per extra panel and the active panel advances with the progress; on a phone, where there is no cursor, the same progress runs as the section crosses the screen, so the animation exists there too. A mouse still expands on hover, a finger on tap, the keyboard on focusing the panel's action button. Nothing scrolls horizontally: the row is always exactly the width of the container, so it has nowhere to slide. Below 860px the row becomes a column - a finger-wide strip can hold neither a photograph nor a label.

The panel count is not baked into the layout: it follows `content.js`, and the counter reads `01 / NN`.

### Panel Contents
Each panel carries the photograph, an audience chip, the title in the display face, and a red action link that opens the details sheet - expanding a panel and opening its sheet are two separate actions on purpose. The consultation is **not** among the panels: it lives only in the `.private` section, because a panel for it would duplicate that section.

### Age Gate
The consent card is built from the same metal as the buttons: a turning conic rim with a dark face inside, a red bloom under it, the wordmark above the heading and the consent line below the keys. It fades in over 260ms while the card scales from 0.96 — an entrance, not an appearance. The choice is remembered in `localStorage`, so it shows once per browser; clearing `darilove:age` brings it back.

### Floating Attributes
Cut-out props (cuffs, whip, gag, each used more than once) levitate across the whole page, not just one section: an absolutely positioned layer under `main`, spanning the full document height, with sixteen instances stepped down the page from the hero to the footer — four of them on the first screen. Each is large — up to 720px — sits at 33-50% opacity, carries its own tilt, and takes a blur between 2px and 6px that stands in for depth: the nearer objects are bigger and sharper, the far ones smaller and softer. Motion has two sources. A `levitate` keyframe drifts, turns the object up to 28 degrees around its own axis and breathes its scale over 23-38s, with negative delays so no two are in phase. On top of it the pointer moves the whole layer: two variables are written once on `.attrs`, and each object multiplies them by its own depth `--k` (0.5-1.7), so the far ones barely move and the near ones swing about 30px. There is no spring — the wrapper carries a 900ms ease-out transition, so the objects lag the cursor and drift into place. Parallax runs only on a fine pointer. Every second one is dropped below 700px and the rest fade to 20%.

### Side Ticks
A fixed column of dashes at the left edge, one per section, the current one lit red and stretched; its label appears on hover. Hidden below 1100px, where the header nav carries the same information.

### Thanks Widget
The only "Поблагодарить" on the page: a floating pill at the bottom right that rises after half a viewport and takes a spring kick from every scroll delta. It is deliberately absent from the header and the footer — one place, one gesture. Below 520px it drops its label and becomes a circular heart.

### Seam
`.seam` replaces the book ornament: a hairline with a red segment whose width tracks `--fill`. Used once, in the footer.

## Do's and Don'ts

### Do:
- Give every pressable thing a press state - `scale(0.97)` is enough
- Make a reveal reversible: the block returns to the side it came from, and `--reveal-dir` records which side that is
- Let the page scroll natively; drive motion from scroll position, never from a hijacked wheel or a custom inertia loop
- Let planes run to the screen edge and touch each other
- Build every raised surface from the four-step material recipe
- Keep red as a lit gradient with a specular top
- Set headings uppercase and tight, and cap paragraph measure
- Use the accent italic exactly once per block
- Verify Cyrillic and italic coverage against the served font CSS before adding a face

### Don't:
- Reintroduce book vocabulary: spine, gilding, ribbon, colophon, versal, fleuron
- Introduce a serif, or synthesise an italic from Unbounded or Golos
- Use pure black, or a neutral grey shadow
- Fill an area with flat red
- Float a rounded card on the empty field where a full-bleed plane belongs
- Add a second accent colour, or use Latex Hot as a background
- Let a script hold content invisible: every reveal carries a timeout that inks it in regardless, because a frozen frame loop must never cost the reader the text
- Pin the section and translate a card row by scroll offset. Two attempts at that produced a ribbon that slid past its last card into emptiness; the accordion has no offset to get wrong
- Duplicate a call to action: the consultation belongs to one section, the thanks button to one widget
