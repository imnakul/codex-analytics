# Codex Analytics Ledger brand guidelines

## Brand idea

Codex Analytics Ledger is a private, local-only view of ChatGPT Codex work. The
identity should feel precise, quiet, technical, and trustworthy—not like a hosted
growth dashboard or a generic AI wrapper.

The canonical mark combines:

1. the supplied OpenAI symbol, preserved without altering its geometry; and
2. a separate acid-lime analytics badge containing three ascending bars and a
   small blue signal point.

The badge identifies this community analytics project. It must remain visually
separate from the underlying OpenAI symbol.

## Canonical logo

Use `app-icon.svg` as the master source. It is self-contained and should be used
to generate all raster exports.

- `app-icon.svg`: canonical editable master
- `app-icon-512.png`: high-resolution application icon
- `app-icon-256.png`: repository and desktop icon
- `app-icon-192.png`: web application icon
- `codex-analytics-mark.svg`: convenience reference to the canonical master
- `codex-analytics-wordmark-dark.svg` and `.png`: wordmark for dark surfaces
- `codex-analytics-wordmark-light.svg` and `.png`: wordmark for light surfaces

### Construction

- The OpenAI symbol is warm ivory and remains geometrically unchanged.
- The analytics badge sits at the lower-right and may overlap the symbol's
  bounding area, but it must not cut, mask, recolor, or redraw the symbol.
- The badge is a rounded square using Signal Lime with Ink-colored bars.
- The blue point indicates live/local data activity. Do not add more points.
- The icon sits on an olive-black rounded square with a restrained border.

### Clear space

Keep clear space around the complete icon equal to at least half the analytics
badge width. For a 512 px icon, this is approximately 52 px.

Do not place text, borders, platform marks, or other icons inside this area.

### Minimum sizes

- Full application icon: 32 px minimum
- Wordmark: 180 px minimum width
- Analytics badge detail: use the simplified favicon exports below 32 px

At very small sizes, preserve the badge silhouette and three-bar rhythm. The blue
point may be omitted only when the output format cannot render it cleanly.

## Wordmark

The preferred product name is **Codex Analytics Ledger**.

The visual lockup uses:

- `Codex Analytics` as the primary line
- `LEDGER` as a smaller, tracked secondary line

Do not use “OpenAI Analytics,” “Official Codex Analytics,” or language that
suggests endorsement. In ordinary prose, the shorter **Codex Analytics** name is
acceptable after the full name has been introduced.

## Color system

| Role | Name | Hex | Usage |
|---|---|---:|---|
| Primary surface | Ink | `#10120e` | Backgrounds and dark badge details |
| Deep surface | Deep Ink | `#080a07` | Gradient depth only |
| Primary type | Paper | `#f1ecdf` | Symbol and high-emphasis text |
| Brand signal | Signal Lime | `#d7ff5f` | Analytics badge, active states, key metrics |
| Secondary signal | Data Blue | `#88bfff` | Live point and secondary data |
| Alert signal | Alert Coral | `#ff8067` | Warnings and exceptional states |
| Muted type | Quiet Olive | `#8e9383` | Secondary copy and labels |
| Border | Frame Olive | `#35382f` | Dividers and icon boundary |

Signal Lime should remain scarce. It is an indicator, not a general background
color. Data Blue and Alert Coral should never compete with it for prominence.

## Typography

The product interface currently uses:

- Display/UI: Space Grotesk, Avenir Next, Segoe UI, sans-serif
- Data/labels: IBM Plex Mono, Cascadia Mono, Consolas, monospace

For static brand files where these fonts are unavailable, use Arial or Helvetica
as a safe export fallback. Keep headings compact and slightly tight; keep labels
uppercase with generous tracking.

## Imagery

Launch imagery should visualize local analytical signals rather than generic AI:

- thread timelines
- token streams
- runtime pulses
- model comparisons
- ledger columns
- restrained connected data points

Avoid robot heads, padlocks, crypto imagery, purple neon, cloud-server clichés,
and fake ChatGPT conversations.

The primary launch background is `launch-background.jpg`. It is intentionally
text-free so it can be reused across layouts.

## Social and launch assets

- `github-social-preview.png`: 1280 × 640 GitHub preview
- `launch-hero.png`: 1600 × 900 website and launch hero
- `launch-square.png`: 1080 × 1080 square social post
- `src/app/opengraph-image.png`: 1200 × 630 Open Graph image
- `src/app/twitter-image.png`: 1200 × 630 X/Twitter preview

Keep the community-project disclaimer on public promotional images:

> Community project · Not affiliated with or endorsed by OpenAI

## Correct usage

- Preserve the supplied OpenAI symbol exactly.
- Keep the analytics badge separate and in the lower-right position.
- Use the supplied exports whenever possible.
- Maintain strong contrast and generous surrounding space.
- Include the community-project disclaimer on launch and repository preview art.

## Incorrect usage

- Do not cut analytics bars into the OpenAI symbol.
- Do not recolor individual OpenAI symbol segments.
- Do not rotate, stretch, outline, or reconstruct the symbol.
- Do not remove the analytics badge when presenting the Codex Analytics product.
- Do not place the official OpenAI wordmark beside the project name.
- Do not imply that Codex Analytics Ledger is an official OpenAI application.
- Do not add shadows, gradients, or decorative nodes inside the symbol itself.

## Ownership and attribution

The underlying OpenAI symbol belongs to OpenAI. Its inclusion communicates that
this tool analyzes local ChatGPT Codex usage. The analytics badge, product name,
layouts, and supporting visual system identify the independent community project.

OpenAI brand usage remains subject to OpenAI's current brand guidelines. If those
guidelines change, reassess public-facing logo usage before the next release.

## Source and regeneration

`PROMPTS.md` records the image-generation prompt used for the abstract launch
background. All logos, typography, UI panels, and export dimensions are composed
deterministically from SVG masters in this directory.
