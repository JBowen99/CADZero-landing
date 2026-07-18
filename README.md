# CADZero Landing Page

Landing page for [CADZero](https://cadzero.dev) — an AI-native parametric CAD tool that generates real 3D geometry from natural language descriptions.

Built with [Astro](https://astro.build) + [Tailwind CSS v4](https://tailwindcss.com) as a fully static site.

## Project Structure

```text
/
├── public/              # Static assets (favicon, OG image)
├── src/
│   ├── components/      # Astro components
│   │   └── ui/          # Reusable UI primitives
│   ├── data/            # Site config, feature lists, step content
│   ├── layouts/         # Page layout wrapper
│   ├── pages/           # Route pages (index.astro)
│   └── scripts/         # Client-side TypeScript (navbar, scroll-reveal)
├── astro.config.mjs
└── package.json
```

## Development

```bash
pnpm install
pnpm dev                # localhost:4321
pnpm build              # static output to dist/
pnpm preview            # preview the build locally
```

## Deployment

The site is a fully static site. `pnpm build` outputs to `dist/` which can be served by any static host (Nginx, Coolify, GitHub Pages, Netlify, etc.).

### Coolify

1. New Resource → connect Git repo
2. Build pack: **Nixpacks**
3. Check **"Is it a static site?"** → auto-sets port `80` and publish dir `/dist`
4. Set domain → Deploy
