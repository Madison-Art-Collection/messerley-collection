# Messerley Collection Website

A Jekyll (al-folio-based) showcase site for the **Messerley Collection** — a set of
Virginia trade tokens digitized from a physical binder collection. Home page shows
featured tokens; `/collection/` is the full, filterable gallery; each token has its
own detail page with obverse/reverse images and metadata.

This site's theme/layout code was ported from the `fall-of-the-republic` Roman-coin
collection site (a sibling project using the same al-folio pattern), with the
`_coins` collection renamed and reshaped into `_tokens` to match the Messerley data
schema. No coin content or images were copied over — see `ADDING_TOKENS.md` for the
token front-matter schema and workflow for adding entries.

## Relation to the parent `messerly-collection/` project

This `website/` directory is the presentation layer only. The actual digitization
work — raw scans, per-token image extraction, and inventory matching — lives one
level up in `messerly-collection/` (see its own `README.md` and `PROGRESS.md`).
Relevant source data for populating `_tokens/*.md` entries:

- `../token_inventory_matches.csv` — 498 tokens matched to inventory records
- `../messerly_inventory.csv` — the typed inventory (rarity, estimated price, etc.)
- `../digitized/<scan_pair>/gallery/` and `.../aligned/` — per-token cropped and
  composited images, ready to copy in (no alignment step needed)

Currently this site has a hand-picked sample of 12 tokens to validate the
design and schema mapping. Bulk-generating entries for all ~498 matched tokens is a
follow-up step, not yet done.

## Local development

This project uses the same Docker-based workflow as `fall-of-the-republic` — no
local Ruby/Jekyll install needed:

```bash
docker compose up
```

Then open http://localhost:8080/. Changes to `_tokens/`, `_pages/`, `_layouts/`,
etc. are picked up live (the repo is bind-mounted into the container).

## Deployment

`_config.yml`'s `url`/`baseurl` are currently blank placeholders — set them once a
hosting destination (e.g. a GitHub Pages repo) is chosen. `.github/workflows/deploy.yml`
(ported from `fall-of-the-republic`) builds and deploys via GitHub Pages on push.
