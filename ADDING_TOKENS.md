# Adding New Tokens to the Collection

## Quick Reference: Manual Workflow

```bash
# 1. Create directory
mkdir -p assets/img/tokens/token-slug

# 2. Copy images with standardized naming
cp "/path/to/obverse.jpg" "assets/img/tokens/token-slug/token-slug-obverse.jpg"
cp "/path/to/reverse.jpg" "assets/img/tokens/token-slug/token-slug-reverse.jpg"
cp "/path/to/aligned.jpg" "assets/img/tokens/token-slug/token-slug-aligned.jpg"

# 3. Create markdown file (see template below)
nano _tokens/token_slug.md

# 4. Test locally
docker compose up

# 5. Commit and push
git add _tokens/ assets/img/tokens/
git commit -m "Add [Town] [Merchant] [Denomination] token"
git push
```

## Sourcing images from the Messerley digitization pipeline

If the token comes from the parent `messerly-collection/` digitization project (raw
scans → `digitized/<scan_pair>/`), the obverse, reverse, **and aligned** images are
already generated — there is no need to run `tools/align_coin_images.py`:

```bash
SRC=/Users/jforsyth/Documents/GitHub/messerly-collection/digitized/<scan_pair>
cp "$SRC/gallery/<page>_r<row>c<col>_obverse.jpg" "assets/img/tokens/token-slug/token-slug-obverse.jpg"
cp "$SRC/gallery/<page>_r<row>c<col>_reverse.jpg" "assets/img/tokens/token-slug/token-slug-reverse.jpg"
cp "$SRC/aligned/<page>_r<row>c<col>_aligned.jpg" "assets/img/tokens/token-slug/token-slug-aligned.jpg"
```

The `<scan_pair>`, `<page>`, `<row>`, `<col>` values come from
`messerly-collection/token_inventory_matches.csv` (or `token_extraction_final.csv`
for unmatched slots). `tools/align_coin_images.py` is only needed for tokens
photographed/added outside that pipeline, where no pre-aligned composite exists.

## Slug convention

`<town>-<merchant-abbrev>-<denom-without-$-or-decimal>`, lowercase and hyphenated,
e.g. `bridgewater-click-010` for J. W. Click & Co.'s 10¢ token in Bridgewater. The
denomination **must** be embedded in the slug — the same merchant frequently issued
several tokens of different denominations (e.g. E. G. Crist has four).

## Token Markdown Template

```yaml
---
layout: token
title: "10¢ Token — J. W. Click & Co., Bridgewater"
town: ["Bridgewater"]
merchant: "J. W. Click & Co."
denomination: "$0.10"
style: "Oval Aluminum"         # human-readable expansion of the `style` inventory column's shape/material code
rarity: "5-10 KNOWN"           # from the `rarity` inventory column
catalog_reference:             # optional, blank unless a published catalog number exists
match_tier: exact              # exact | fuzzy-denom | special-merchant-only (from token_inventory_matches.csv)
image_obverse: tokens/bridgewater-click-010/bridgewater-click-010-obverse.jpg
image_reverse: tokens/bridgewater-click-010/bridgewater-click-010-reverse.jpg
image_aligned: tokens/bridgewater-click-010/bridgewater-click-010-aligned.jpg
obverse_description:           # optional free text
reverse_description:           # optional free text
sort_key: "Bridgewater|J. W. Click & Co.|$0.10"   # plain string, alphabetical sort
featured: true                 # true = shows in the home page grid
---

Optional free-form markdown body — merchant/town history, provenance notes, etc.
```

## Field Reference

### Required
- `layout`: always `token`
- `title`: descriptive title, e.g. `"10¢ Token — J. W. Click & Co., Bridgewater"`
- `sort_key`: plain string used for alphabetical ordering across the site (both the
  home page featured grid and the collection gallery sort by this field). Convention:
  `"<town>|<merchant>|<denomination>"` — pipe-separated so it sorts town-first,
  then merchant, then denomination within a merchant.

### Image Paths (relative to `/assets/img/`)
- `image_obverse`: `tokens/token-slug/token-slug-obverse.jpg`
- `image_reverse`: `tokens/token-slug/token-slug-reverse.jpg`
- `image_aligned`: `tokens/token-slug/token-slug-aligned.jpg`

### Other Important Fields
- `style`: human-readable, not the inventory's raw abbreviation. The inventory's
  `style` column uses `<shape>. <material>.` codes (e.g. `RD. BR.` = Round Bronze,
  `OCT. AL.` = Octagon Aluminum, `SCAL. AL.` = Scalloped Aluminum). Run the raw
  value through `messerly-collection/scripts/expand_style.py`'s `expand_style()`
  before writing it into front matter — it covers every code seen in
  `messerly_inventory.csv` as of 2026-08-17 and falls back to the raw code
  unchanged (rather than guessing) if it hits an unrecognized token, so check for
  any pass-through values when bulk-generating and extend its `SHAPE`/`MATERIAL`
  maps as needed.
- `featured`: `true` to include in the home page showcase grid
- `town`: **always a YAML list**, even for a single town (e.g. `["Bridgewater"]`,
  not `Bridgewater`) — this is what lets a token valid in more than one town (see
  below) show up under each town's filter button without duplicating the entry.
  Don't include the state (`"Bridgewater"`, not `"Bridgewater, Virginia"`); the
  templates append ", Virginia" wherever the town is displayed to visitors (detail
  page header/dl, grid overlays) since the whole collection is Virginia tokens.
  Filter buttons on `/collection/` are built automatically from every distinct
  value across all entries' `town` arrays
  (`site.tokens | map: "town" | join: "|" | split: "|" | uniq`).
  - **Multi-town tokens**: if the source inventory's `location` names more than one
    town (e.g. `"Elkton & New Market"`), split it into separate list entries:
    `town: ["Elkton", "New Market"]`. The token still gets one `_tokens/*.md` entry
    and one detail page (displayed as "Elkton & New Market, Virginia"), but shows
    up under both towns' filter buttons on `/collection/`.
  - Strip any parenthetical annotation from the raw inventory `location` value —
    `"Athlone (John Reubush)"` → `["Athlone"]`. These annotations are consistently
    redundant with data already in the `merchant` field, or an internal
    catalog code, not part of the town name.
  - `"Rockingham"` (the county name, not a town) in the raw inventory should become
    `["Rockingham County"]`.
- `match_tier`: internal provenance/confidence marker carried over from the
  extraction-to-inventory matching pipeline; not currently rendered in the UI, kept
  for future auditing
- `rarity`: straight from the typed inventory; leave blank if unknown rather than
  guessing. Note: estimated/appraisal value is intentionally NOT part of this
  schema — it's private data, not for public display.

## Display Order

Tokens are sorted alphabetically by `sort_key` everywhere (home page and gallery) —
there's no date-based ordering, since the collection has no reliable issue dates for
most tokens.

## Troubleshooting

### Token not appearing on the home page
- Verify `featured: true` is set

### Sort order looks wrong
- Check `sort_key` is a plain string, not left blank, and follows the
  `town|merchant|denomination` convention consistently

### Images not displaying
- Verify the file exists at the path given in `image_obverse`/`image_reverse`/`image_aligned`
- Image paths should start with `tokens/`, not `/assets/img/tokens/`
- Restart Jekyll / rebuild with `docker compose up`

### Town filter button missing/wrong
- The collection page's filter buttons are generated automatically from every
  distinct `town` value across `_tokens/*.md` — check for typos/inconsistent
  capitalization in the `town` field across entries for the same town
