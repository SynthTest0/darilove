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
  title:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "clamp(1.35rem, 1.1rem + 1.1vw, 2rem)"
    fontWeight: 400
    lineHeight: 1.1
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
  action:
    fontFamily: "Golos Text, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.01em"
rounded:
  hairline: "4px"
  plate: "8px"
  plate-lg: "10px"
  card: "12px"
  panel: "16px"
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
  material-panel:
    backgroundColor: "{colors.wine-deep}"
    textColor: "{colors.cream}"
    rounded: "{rounded.panel}"
    padding: "{spacing.panel-pad}"
  tome-card:
    backgroundColor: "{colors.wine-deep}"
    textColor: "{colors.cream}"
    rounded: "{rounded.card}"
    padding: "{spacing.card-pad}"
  tome-card-private:
    backgroundColor: "{colors.wine-lit}"
    textColor: "{colors.cream}"
    rounded: "{rounded.card}"
    padding: "{spacing.card-pad}"
  spine:
    backgroundColor: "{colors.wine-deep}"
    textColor: "{colors.cream}"
    width: "{spacing.spine}"
    padding: "20px 0 22px"
  colophon-row:
    textColor: "{colors.cream}"
    typography: "{typography.body}"
    padding: "12px 0"
---

# Design System: DARI LOVE

## Overview

**Creative North Star: "The Hand-Bound Volume"**

The page is a book handed to you, not a landing page shown at you. A cherry-velvet binding fills the field, a gilded fore-edge runs down the pasted-in frontispiece, and a single vertical spine holds the left edge of every viewport. Prices are set as a colophon, not a pricing table; the four products are four volumes with roman numerals. The subject matter is explicit and the treatment is not: the world earns its intimacy from material — velvet, gilding, grain, ribbon — rather than from skin.

Density is editorial and unhurried. Large Cormorant display type sits against short measures (44–52ch), generous section rhythm (60–120px), and a single wide container (1360px) inset by a fluid gutter. Nothing is neutral: there is no pure black and no pure white anywhere in the build. The darkest ink is a warm near-black wine (#241017) and the lightest surface is a warm cream (#F2E2DA); every shadow, border and divider is tinted toward wine.

One animation primitive governs the entire page. A single scroll-driven custom property, `--fill`, gilds the hero rule, wipes one hero photograph over another, ignites the fore-edge and drives the same growth as `scaleX` on the spine's chapter ticks; a second, `--read`, sets the length of the ribbon bookmark. There is no second motion language, and the build explicitly refuses a full-bleed boudoir photograph as its opening move.

**Key Characteristics:**
- Cherry-velvet field sampled from the client's own burgundy latex photographs; no pure black, no pure white.
- One vertical axis: the fixed spine, 84px desktop / 56px at ≤640px, and the page's left padding is that axis.
- One material recipe for every raised surface: light top edge, inner downward shading, soft wine-tinted offset shadow.
- One motion primitive (`--fill`) and one progress primitive (`--read`).
- Photography is duotoned in CSS over untouched source rasters; gold highlights survive the tint.
- Gilding is reserved: gradient-clipped gold on exactly one accent word per composition.

## Colors

A binding palette: warm cherry and dyed gold, eyedroppered from photographs of a burgundy latex dress rather than picked from a scale.

### Primary
- **Cherry Velvet** (`{colors.wine-lit}`): the lit face of the binding. Button faces, the brighter pole of the velvet field, the tint layer's top stop, and the promoted surface color for the two elevated panels (Private, Volume IV) that override `--wine-deep` locally.
- **Bound Wine** (`{colors.wine}`): the mid-tone of the velvet field's upper-left light pool. Field only; never a text or border color.
- **Deep Wine** (`{colors.wine-deep}`): the floor of the field and the default surface behind every panel, card, plate and the spine.

### Secondary
- **Leaf Gold** (`{colors.gold}`): the gilding at rest-plus. Active spine tick, active carousel dot, the FAQ's plus glyph, the rule that grows under the hero, list bullets and the short rule after "Подробнее".
- **Gold Highlight** (`{colors.gold-hi}`): the top stop of every gold gradient, the focus ring, and the numeral color of the private volume.
- **Dyed Edge** (`{colors.gold-deep}` / `{colors.gold-dim}`): the fore-edge before ignition (`gold-dim`) and the shadowed bottom of every gold gradient (`gold-deep`). These two exist to make gilding read as dyed paper edge, not as a flat gold bar.

### Neutral
- **Ink** (`{colors.ink}`): the page's base fill under the velvet layer, and the tint used in shadow and scrim rgba. The darkest value in the system; pure black does not appear.
- **Cream** (`{colors.cream}`): primary text, wordmark, spine mark, colophon labels, button text, selection foreground.
- **Skin** (`{colors.skin}`): secondary text — ledes, header links, footer links, modal list items, the italic half of the wordmark.
- **Muted Rose** (`{colors.muted}`): tertiary text — captions, notes, counters, teasers, folio, consent copy.

### Named Rules
**The No-Black Rule.** Nothing in this system is `#000` or `#fff`. The darkest token is Ink (#241017), the field floors at Deep Wine, and every shadow, border, scrim and divider is a wine-tinted rgba — never neutral.

**The Single Gilding Rule.** Gradient-clipped gold text (`.gilt`) appears on exactly one accent word per composition — the hero's last word and the manifest's verb. It is never applied to a heading, a price, a metric, or a run of more than one word.

**The Three-Voice Text Rule.** Body copy has three levels and only three: Cream for what must be read, Skin for what supports it, Muted Rose for what is metadata. A fourth text color is not available.

## Typography

**Display Font:** Cormorant Garamond (fallback Georgia, serif) — weights 300–600 roman, 300–500 italic
**Body Font:** Golos Text (fallback system-ui, sans-serif) — weights 400/500/600

**Character:** A bookish, high-contrast serif set against a plain modern Cyrillic grotesque. Cormorant carries the voice — titles, numerals, prices, pull quotes; Golos carries the reading. Both were verified for Cyrillic coverage against the served font CSS.

### Hierarchy
- **Display** (Cormorant 400, `{typography.display.fontSize}`, line-height 0.94, tracking -0.015em): the hero title only. On wide viewports it is additionally capped at `9.2vh` (and `8.4vh` below 1021px) so the first viewport always closes.
- **Headline** (Cormorant 400, clamp 2rem→3.6rem, line-height 1.0–1.02): every section `h2`, the volume title, the modal `h3`, and the manifest sentence.
- **Title** (Cormorant 400, clamp 1.35rem→2rem): colophon prices, about-facts, gate heading; and, with 0.34em tracking and uppercase, the wordmark and spine mark.
- **Body** (Golos 400, 1.0625rem, line-height 1.6): all reading copy. Measures are held short: 44–46ch for ledes and panel copy, 52ch live lede, 62ch FAQ answers, 68ch footer legal.
- **Label** (Golos 400, 0.8125rem, tracking 0.12–0.24em, uppercase): the subjects line, volume audience, frontispiece caption, modal meta, consent, the "заглушка" marker.
- **Action** (Golos 600, 0.9375rem, line-height 1): pill buttons only.

### Named Rules
**The Cormorant Italic Rule.** Every italic on the page is Cormorant. Golos Text ships Cyrillic in roman only, so an italic Golos would fall back and break the line. Emphasis in a Golos passage is expressed by color or weight, never by italic.

**The Serif-Numeral Rule.** Numbers that are content — prices, volume numerals, facts, live-format counters — are set in Cormorant with `font-variant-numeric: tabular-nums` where they change in place. Numbers inside running copy stay in Golos.

**The Six-Step Ramp Rule.** The type scale is six steps (`--step-0` … `--step-5`); the three lowest are fixed rem, the three highest are clamps. A new size means picking a step, not inventing a value.

## Layout

A single fixed vertical axis plus one centered measure. The spine is a fixed 84px column at the left edge (56px at ≤640px), and the body's left padding is that same token — the axis is structural, not decorative. Content sits in a 1360px container with a fluid gutter of `clamp(18px, 4vw, 56px)`.

The desktop hero is a two-column grid (1.05fr / 0.95fr): title, gilded rule, lede, subjects line and buttons stack in the left column's first row, the price colophon in its second, and the 4:5 frontispiece spans both rows on the right. It is height-budgeted, not just width-fluid: `min-height: calc(100svh - 62px)` with the title, lede, spacings and plate all clamped against viewport height so the whole spread lands in one viewport.

Below 1021px every multi-column block (hero, private, about, lead, modal) collapses to one column and the hero re-orders deliberately to title → lede → buttons → photograph → prices. Header nav links hide at that width; below 640px the spine's chapter ticks and the dock note also drop out and the spine narrows.

Vertical rhythm is section-scale, not step-scale: `clamp(60px, 9vw, 120px)` between major sections, `clamp(50px, 9vw, 120px)` around the manifest, and internal gaps at `clamp(18px, 3vw, 40px)`. Grid gaps and paddings are always clamps; fixed pixel values appear only for hairlines, small internal gaps and the spine.

## Elevation & Depth

Hybrid, and consistent to a single recipe. Depth comes from one shared material — a light edge on the top border, inner downward shading, and a soft offset outer shadow — applied by one class to every raised surface. Pills are the pressable form of that material; slightly rounded rectangles are the panel form. Behind everything, a fixed velvet layer of three radial wine pools drifts on a 52s alternate transform, with a fixed SVG grain layer at 22% opacity in `soft-light` above it to kill gradient banding.

### Shadow Vocabulary
- **Material** (`0 1px 0 rgba(252,231,220,.06) inset, 0 -14px 30px rgba(34,14,20,.24) inset, 0 22px 44px -18px rgba(30,12,18,.85)`): every raised panel, card, review, modal body, gate card.
- **Pill at rest** (`0 1px 0 rgba(255,240,232,.28) inset, 0 -10px 18px rgba(34,14,20,.24) inset, 0 14px 26px -12px rgba(30,12,18,.9)`): the convex button.
- **Pill pressed** (`0 2px 6px rgba(30,12,18,.55) inset, 0 10px 20px rgba(34,14,20,.42) inset, 0 2px 6px -4px rgba(30,12,18,.9)`) with `translateY(2px) scale(0.975)`: the button pushed into the binding.
- **Pasted plate** (`0 40px 80px -30px rgba(30,12,18,.95)`): the hero frontispiece only — a deeper, longer throw that reads as a physical inset sheet.
- **Fore-edge** (`2px 0 6px -2px rgba(30,12,18,.9)`): the gilded edge lifting off the page block.

### Named Rules
**The One Material Rule.** Every raised surface uses the same three-part recipe — light top edge, inner downward shading, soft outer shadow. A new surface adopts it; it does not invent its own shadow.

**The Wine Shadow Rule.** Shadows are rgba built on the wine inks (34,14,20 / 30,12,18). A neutral or blue-grey shadow is wrong in this binding.

**The Reserved Depth Rule.** Cards, panels and buttons share one elevation. The only surface allowed a deeper shadow is the hero frontispiece, because it is the one object depicted as physically pasted in.

## Shapes

Soft rectangles and one true pill. The radius ladder is small-to-large by surface size: photographic plates 8–10px, cards and reviews 12px, full-width panels and the modal 16px, buttons fully round (999px). The frontispiece is the only asymmetric shape in the system — `4px 14px 14px 4px`, tight at the binding edge and rounded at the fore-edge, which is what makes it read as a book block rather than a photo card.

Borders are hairlines only (1px) in cream at 8–14% alpha, with the top border lightened to `rgba(252,231,220,.20)` on material surfaces to catch the light. Dividers — colophon rows, FAQ rows, the about-facts, section rules, the footer — are the same hairline; there is no heavy rule anywhere. Vertical elements (the spine mark, the folio) use `writing-mode: vertical-rl` with wide tracking. Icons are inline SVG strokes at 1.25 weight, currentColor, round caps; the FAQ's plus is built from two 1px gradients so it can rotate and collapse to a minus.

## Components

### Buttons
- **Shape:** fully round (999px), inline-flex with a 0.6em gap for optional icon.
- **Primary (`pill`):** cherry-velvet face under a top-light gradient, cream label, Golos 600 at 0.9375rem, padding `0.95em 1.9em`, convex shadow.
- **Hover:** `filter: brightness(1.09)` — gated behind `(hover:hover) and (pointer:fine)` so it cannot stick after a tap.
- **Active:** presses into the surface: `translateY(2px) scale(0.975)` plus the inset pressed shadow.
- **Quiet (`pill--quiet`):** transparent face, skin-toned label, a single top highlight line and no outer shadow. Always paired beside the primary, never used alone as the only call to action.
- **Focus:** `2px solid` gold-highlight ring, 3px offset, 6px radius — the same ring for every link, button and summary in the page.

### Cards / Containers
- **Corner Style:** 12px for volume cards and reviews, 16px for full-width panels (private, lead, modal body, gate card).
- **Background:** deep wine under the shared material gradient; the private panel and the private volume promote their surface to cherry velvet by overriding `--wine-deep` locally.
- **Shadow Strategy:** the Material recipe, unmodified.
- **Border:** 1px cream hairline at 10%, top edge at 20%.
- **Internal Padding:** `clamp(16px, 2vw, 26px)` for cards, `clamp(28px, 4vw, 48px)` for panels.

### Navigation
- **Spine (primary):** a fixed vertical column carrying the vertical wordmark at top, five chapter ticks in the middle, and the city folio at the bottom. A tick is a 22px hairline at `scaleX(0.55)`; hover (fine pointer only) and the current section grow it to `scaleX(1)` and turn it gold, with the section name fading in beside it at 26px. Ticks are hidden below 640px.
- **Header:** sticky, right-aligned, blurred wine gradient; skin-toned links warming to cream on hover, one primary pill at the end. It retracts on downward scroll past 240px and returns on upward scroll.
- **Dock:** fixed bottom bar inset by the spine width; slides up after the chapters section clears 90% of the viewport, carrying the current flow note, a quiet link and a pill. It leaves faster (200ms) than it arrives (280ms), because the exit is a system reaction.

### Photographic Plate (signature)
Every image on the page is a `.plate`: a 4:5 duotone built in CSS over an untouched source raster. The image itself is filtered (`saturate(.62) contrast(1.06) brightness(1.01)`), a wine gradient sits above it in `color` blend mode at 72% opacity, radially masked so the tint weakens where the frame is bright, and a warm gold layer sits above that in `screen` at 20%. The mask is what keeps gold highlights gold. The four volume plates each carry their own `object-position` and a 1.02–1.18 scale so the crops do not fall into the same rhythm.

### Gilded Fore-Edge (signature)
The hero frontispiece is a book block: the plate, a 4:5 wipe pair of images inside it, and an 8px gilded edge mounted *outside* the plate's overflow so the gilding is not clipped. The edge exists from the first frame in `gold-dim`, and `--fill` reveals the lit gradient over it via `clip-path`. Below 1021px the edge is removed rather than shrunk.

### Volume Carousel (signature)
On fine-pointer, wide, motion-allowed viewports the chapters section is pinned for `count × 85vh + 60vh` and the four volumes track horizontally, off-slides fading via `--away` to 25% opacity, with a counter and 34×2px dot rules beneath. On coarse pointers, below 1021px, or under reduced motion the pin is dropped entirely and the volumes become a plain vertical stack at full opacity — not a degraded carousel.

### Modal Sheet
A native `<dialog>` on the material panel at 16px radius, `min(920px, 92vw)` wide, opening from center at `scale(0.96) → 1` in 180ms with `@starting-style` and `allow-discrete` transitions. Backdrop is wine at 78% with a 6px blur. Closes on the stroke-icon button or a backdrop click.

### Age Gate
A fixed full-page scrim in wine at 55% with a 14px backdrop blur — the page stays visible but unreadable behind it — carrying a centered material card with the two pills. The answer is remembered in `localStorage`, and `body[data-gated="1"]` locks scroll while it is up.

## Do's and Don'ts

### Do:
- **Do** put every raised surface on the shared material recipe (light top edge, inner downward shading, wine-tinted offset shadow) and every button on the pill.
- **Do** drive new scroll-linked visuals from the existing `--fill` and `--read` custom properties rather than adding a second scroll primitive.
- **Do** keep gilding scarce: one gradient-clipped accent word per composition, gold otherwise reserved for active state and hairline marks.
- **Do** tint all photography through the `.plate` duotone and leave the source raster untouched; the mask that preserves gold highlights is part of the recipe.
- **Do** set every italic in Cormorant Garamond, because Golos Text has no Cyrillic italic.
- **Do** gate hover effects behind `(hover: hover) and (pointer: fine)`, and give reduced motion the same information through opacity and color instead of movement.
- **Do** budget the first viewport against `svh` height, not just width, when a composition must land whole.
- **Do** hold reading measures between 44ch and 62ch.

### Don't:
- **Don't** introduce `#000`, `#fff`, or a neutral grey shadow; the darkest value available is Ink (#241017).
- **Don't** give a new surface its own shadow vocabulary — only the hero frontispiece gets a deeper throw, because it is the one pasted-in object.
- **Don't** apply the `.gilt` gradient-text treatment to headings, prices, metrics or multi-word runs.
- **Don't** add a second vertical axis or a second fixed rail; the spine is the only one, and page padding is derived from its width.
- **Don't** ship a full-bleed photograph as the opening move — the confirmed rejection this direction was chosen against.
- **Don't** degrade the pinned carousel into a cramped horizontal scroller on touch or reduced motion; drop the pin and show the plain vertical stack.
- **Don't** invent a type size outside the six-step ramp, or a fourth body text color outside Cream / Skin / Muted Rose.
