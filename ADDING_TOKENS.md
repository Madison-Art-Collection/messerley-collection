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

## Sourcing images from the Messerly digitization pipeline

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
town: Bridgewater
merchant: "J. W. Click & Co."
denomination: "$0.10"
style: "OVAL AL."              # material/shape code, from the `style` inventory column
rarity: "5-10 KNOWN"           # from the `rarity` inventory column
estimated_price: "$200.00"     # from the `estimated price` inventory column
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
- `featured`: `true` to include in the home page showcase grid
- `town`: used to build the town filter buttons on `/collection/` automatically
  (`site.tokens | map: "town" | uniq`) — no manual filter-list maintenance needed
- `match_tier`: internal provenance/confidence marker carried over from the
  extraction-to-inventory matching pipeline; not currently rendered in the UI, kept
  for future auditing
- `rarity` / `estimated_price`: straight from the typed inventory; leave blank if
  unknown rather than guessing

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
