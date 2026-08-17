# Messerley Collection Website

A Jekyll (al-folio-based) showcase site for the **Messerley Collection** — a set of
Virginia trade tokens digitized from a physical binder collection. Home page shows
10 featured tokens (currently the rarest — "ONLY 1 KNOWN" — tier); `/collection/`
is the full, filterable gallery (498 tokens, filter by town); `/map/` plots a pin
per confirmed Rockingham County town/city, linking into the filtered Collection
view; each token has its own detail page with obverse/reverse images and metadata.

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

All 498 matched tokens are populated. 5 town names (23 tokens) couldn't be
confirmed as real Rockingham County places and are deliberately left off the
`/map/` page's pins rather than guessed at — see `../UNKNOWN_PLACES.md` for detail
and how to resolve them.

## Local development

This project uses the same Docker-based workflow as `fall-of-the-republic` — no
local Ruby/Jekyll install needed:

```bash
docker compose up
```

Then open http://localhost:8080/. Changes to `_tokens/`, `_pages/`, `_layouts/`,
etc. are picked up live (the repo is bind-mounted into the container).

## Deployment

Live at **https://madison-art-collection.github.io/messerley-collection/**. This
`website/` directory is its own git repo (separate from the rest of
`messerly-collection/`, which has no git repo — only the website is on GitHub) with
`origin` set to `https://github.com/Madison-Art-Collection/messerley-collection.git`.
Push to `main` and `.github/workflows/deploy.yml` builds and pushes the built site to
the `gh-pages` branch, which GitHub Pages serves from automatically.

`_config.yml`'s `url`/`baseurl` are set for GitHub Pages *project-site* hosting
(`/messerley-collection` subpath, not a custom domain) — every internal link/asset
path must go through Jekyll's `relative_url` filter or `{{ site.baseurl }}` or it
will 404 in production while looking fine in local dev if you're not paying
attention (this has bitten us once already — see git history on `_pages/map.md`).
