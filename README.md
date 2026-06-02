# GodIsBig — Wearable Collective, Built on Faith

A storefront for GodIsBig (godisbig.co). Built with Vite + React + TypeScript + Tailwind CSS v4.

## Develop

```bash
bun install      # or: npm install
bun run dev       # start dev server at http://localhost:5173
```

## Build

```bash
bun run build     # type-check + production build into dist/
bun run preview   # serve the production build locally
```

## Structure

```
src/
├─ App.tsx            # tiny router: Home at "/", NotFound elsewhere
├─ index.css          # theme tokens (oklch palette) + marquee/fade-up animations
├─ main.tsx
├─ pages/
│  ├─ Home.tsx        # the landing page (cart + sound toggle are interactive)
│  └─ NotFound.tsx    # 404 page
└─ assets/            # hero, detail, product, and look images
```

## Deployment

SPA fallback configs are included so direct URLs and the 404 route resolve:

- **Vercel** — `vercel.json` (rewrites to `index.html`)
- **Netlify** — `netlify.toml` and `public/_redirects`

Any static host works: deploy the `dist/` folder and route all paths to `index.html`.
