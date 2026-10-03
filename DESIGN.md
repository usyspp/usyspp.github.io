---
name: Syrian Scholars for Peace and Prosperity
description: A bilingual survey sheet of the case for exempting qualified Syrian nationals from PP10998.
colors:
  forest-board: "#002623"
  survey-green: "#054239"
  wheat-sheet: "#edebe0"
  contour-gold: "#b9a779"
  wheat-ink: "#988561"
  charcoal: "#161616"
  charcoal-soft: "#3d3a3b"
  blocked-umber: "#6b1f2a"
  caret-umber: "#4a151e"
typography:
  display:
    fontFamily: "Petrona, Iowan Old Style, Palatino, serif"
    fontSize: "clamp(2.45rem, 4.5vw, 4.5rem)"
    fontWeight: 500
    lineHeight: 1.08
    letterSpacing: "-0.03em"
  display-ar:
    fontFamily: "Noto Naskh Arabic, serif"
    fontSize: "clamp(2.45rem, 4.5vw, 4.5rem)"
    fontWeight: 700
    lineHeight: 1.35
    letterSpacing: "0"
  headline:
    fontFamily: "Petrona, Iowan Old Style, Palatino, serif"
    fontSize: "clamp(2rem, 4vw, 3.25rem)"
    fontWeight: 500
    lineHeight: 1.08
    letterSpacing: "-0.03em"
  body:
    fontFamily: "Petrona, Iowan Old Style, Palatino, serif"
    fontSize: "1.2rem"
    fontWeight: 400
    lineHeight: 1.55
  body-ar:
    fontFamily: "Noto Naskh Arabic, serif"
    fontSize: "1.35rem"
    fontWeight: 400
    lineHeight: 1.9
  label:
    fontFamily: "Readex Pro, Geeza Pro, Noto Naskh Arabic, sans-serif"
    fontSize: "1rem"
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: "0"
rounded:
  none: "0"
spacing:
  seam: "1px"
  tight: "0.4rem"
  control: "0.85rem"
  group: "1.25rem"
  section: "clamp(3.75rem, 9vw, 7rem)"
components:
  button-primary:
    backgroundColor: "{colors.survey-green}"
    textColor: "{colors.wheat-sheet}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.8rem 1.2rem"
  button-primary-hover:
    backgroundColor: "{colors.forest-board}"
    textColor: "{colors.wheat-sheet}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.8rem 1.2rem"
  legend-chip:
    backgroundColor: "{colors.forest-board}"
    textColor: "{colors.wheat-sheet}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.4rem 0.85rem"
  legend-chip-selected:
    backgroundColor: "{colors.wheat-sheet}"
    textColor: "{colors.charcoal}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.4rem 0.85rem"
---

# Design System: Syrian Scholars for Peace and Prosperity

## Overview

**Creative North Star: "The Recovery Survey"**

The site is one survey sheet on a forest board. A wheat title block carries the coalition’s name and the way out. The case is drawn as parcels: umber for what Presidential Proclamation 10998 still blocks, survey green for what 2025 and 2026 already lifted. English prose is Petrona. Arabic prose is Noto Naskh Arabic. Chrome in both languages is Readex Pro. The sheet flips to real right-to-left on the same page.

Density changes on purpose. The first screen is two fields, only as tall as the claim and the timeline. A wheat tape of cases crosses the forest board and advances on its own. The reading room is one wheat sheet: why the restrictions no longer hold, beside a handshake plate, and one mission sentence beside a plate of the two flags. The close is three buttons on survey green: write, contact, and join.

**Key Characteristics:**

- Color marks state. Forest is the board and the lifted ground. Wheat is the sheet. Umber is only the block.
- Square corners, one-pixel gold seams, no shadows.
- The letter action in the title block sits at the inline end. The close is three buttons.
- Both languages carry the same case. Arabic is not a translation skin on a left-to-right layout.

## Colors

The palette is the four committed families, used as fields rather than tints.

### Primary

- **Forest Board** (#002623): The page ground, the quiet state of a parcel, and the ground under the cases tape.
- **Survey Green** (#054239): Lifted parcels, the primary button, and the action station.

### Secondary

- **Wheat Sheet** (#edebe0): The title block, the reading room, text on dark fields, and the three action buttons.
- **Contour Gold** (#b9a779): Seams between parcels, dates, and text selection.

### Tertiary

- **Blocked Umber** (#6b1f2a): The PP10998 parcel, and the single proclamation mark on the timeline.
- **Caret Umber** (#4a151e): The text caret on wheat.

### Neutral

- **Charcoal** (#161616): Text on wheat.
- **Soft Charcoal** (#3d3a3b): Navigation links at rest.
- **Wheat Ink** (#988561): The language control’s resting border.

### Named Rules

**The State Color Rule.** Umber paints the block and the caret. It is not a button color, a link color, or a decoration.

## Typography

**Display and English body:** Petrona, with Iowan Old Style and Palatino behind it.
**Arabic display and body:** Noto Naskh Arabic.
**Labels, navigation, and buttons:** Readex Pro, which covers Arabic and Latin.

**Character:** The case reads as a written brief. The sheet’s controls read as survey lettering. Arabic headings use the 700 cut of Noto Naskh Arabic.

### Hierarchy

- **Display** (Petrona 500, clamp(2.45rem, 4.5vw, 4.5rem), line-height 1.08, tracking -0.03em): The blocked-parcel statement. Arabic uses Noto Naskh Arabic 700, tracking 0, line-height 1.35.
- **Headline** (Petrona 500, clamp(2rem, 4vw, 3.25rem)): Section statements in the reading room and the mission sentence. Arabic uses Noto Naskh Arabic 700.
- **Title** (Readex Pro 600, clamp(1.2rem, 1.6vw, 1.45rem)): Timeline entries.
- **Body** (Petrona 400, 1.2rem, line-height 1.55, max 68ch): The English case. Arabic body is Noto Naskh Arabic 400 at 1.35rem, line-height 1.9.
- **Label** (Readex Pro 500, 1rem): Navigation, language, and buttons. On a phone the name and the language switch share the first line, and the navigation sits on the second at 0.875rem. The letter action is not in the phone header. Institution names stay in Petrona even in Arabic.

### Named Rules

**The Script Rule.** When the document is Arabic, prose and headings switch to Noto Naskh Arabic and the page direction becomes rtl. Readex Pro stays on chrome in both directions.

## Layout

The first screen is only as tall as its content: a one-row wheat title block on a computer (name, navigation, language switch, and the letter action), then a two-column field (blocked parcel about 1.15fr, a green timeline at least 20rem). Below 1080px the title block wraps. On a phone the name and the language switch share the first line, and the navigation sits on the second. The letter action stays out of the phone header. Below 860px the field stacks. The language switch is the same small control on both. The cases tape is a horizontal row of wheat parcels on the forest board. It advances on its own, pauses when the pointer is over the rail or a card has keyboard focus, and while paused that offset becomes a scroll position the visitor can drag or swipe. It does not advance when the visitor prefers reduced motion; that visitor scrolls the row by hand. Reading is one full-bleed wheat band. The circumstances sit beside a handshake plate on the right in English. The mission sentence sits beside a plate of the Syrian and U.S. flags on the left in English. On a phone each plate stacks under its text at full width. Prose stays within 68 characters. Space above a heading is the section padding; space under it is about 0.9rem. The close is three buttons in one row on a laptop, and three equal full-width buttons on a phone.

## Elevation & Depth

The sheet is flat. Depth is a change of field color, not a shadow. A quiet parcel returns to Forest Board. The language switch keeps a 1px Wheat Ink border until hover, when the ground turns Survey Green. There is no box-shadow vocabulary.

### Named Rules

**The Flat Sheet Rule.** Do not add drop shadows, glows, or blur to separate regions. A 1px Contour Gold seam is the only divider.

## Shapes

Corners are square (`0`). Parcels meet at 1px seams. The blocked parcel carries a hairline gold rule; a wheat stroke traces that rule once on load and then rests. Reduced motion leaves the rule already drawn.

## Components

### Buttons

- **Shape:** Square.
- **Primary:** Survey Green ground, Wheat Sheet text, Readex Pro 600, padding 0.8rem 1.2rem, minimum height 48px.
- **Hover / Focus:** Hover moves the ground to Forest Board. Focus is a 2px Contour Gold ring, offset 3px; on wheat the ring is Survey Green.
- **Close:** Write an official, Contact, and Join are three buttons on the survey-green station. On that green field the buttons are Wheat Sheet with Survey Green text, and hover moves them to Forest Board. On a laptop they stay one row. On a phone they stack, each the full width of the station.

### Chips

- **Language:** One square switch in the title block, with a 1px Wheat Ink border. It names the other language: العربية on the English page, English on the Arabic page. It is not repeated in the footer. On a phone it sits on the first line, beside the name.

### Parcels

- **Corner style:** Square.
- **Blocked:** Blocked Umber, Wheat Sheet text, padding clamp(1.5rem, 4vw, 3.25rem).
- **Lifted:** One Survey Green field with a dated timeline. Dates are Contour Gold with tabular figures. Each event has one date, written first. The proclamation is the one Blocked Umber mark on that field.
- **Reading:** Wheat Sheet bands. Institution names are Petrona in Survey Green.
- **Shadow:** None.
- **Border:** The gold seam, not a side stripe.

### Cases tape

Square wheat parcels in one horizontal row, separated by a 1px Contour Gold seam. Each parcel is a link: a name, a field, an institution in Petrona Survey Green, and one sentence. No photographs, logos, or press. The row advances as a continuous shift. It pauses only when the pointer is over the rail, or when a card has keyboard focus. While paused, the current offset becomes a real scroll position so the visitor can drag or swipe. When the pointer leaves, and no card is focused, it advances again from that position. The heading above the rail does not pause it. Reduced motion leaves the row still, for hand scrolling. On the cases sheet each person is a wheat band with the same name, field, institution, and a short reading of the case.

### Navigation

Readex Pro, Soft Charcoal at rest, Survey Green with a 1px underline when current or hovered. On a phone the links wrap. The current page uses `aria-current="page"`.

### Title block

Wheat band, one row on a computer: the coalition name in Readex Pro 600, the primary nav, the language switch, and the letter action. The action sits at the inline end, with empty wheat beside it. In Arabic that end is on the left. On a phone the name and the language switch share the first line, and the navigation sits on the second. The letter action is not in the phone header.

## Do's and Don'ts

### Do:

- **Do** paint whole regions: Forest Board, Survey Green, Wheat Sheet, and Blocked Umber.
- **Do** keep English and Arabic as the same case, and set `dir` and `lang` on the document when the language changes.
- **Do** leave the primary action with empty space around it.
- **Do** use logical properties so the sheet mirrors in Arabic.

### Don't:

- **Don't** use Blocked Umber for buttons, links, or decoration.
- **Don't** add shadows, rounded cards, icon tiles, or a row of equal proof cards.
- **Don't** put a small label above a heading.
- **Don't** invent letters, logos, press, or statistics the case text does not state.
