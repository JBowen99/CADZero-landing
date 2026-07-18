# CADZero — Landing Page Specification

A modern, sleek landing page inspired by the design language of **Cursor**, **Vercel**, and **Linear**. Dark-mode-first, minimal, with a bold hero, animated 3D accents, and content-driven feature sections.

---

## Design Language

### Vibe
- **Dark, premium, technical.** Deep near-black backgrounds with a signature yellow glow.
- Lots of negative space. Large, confident typography. Subtle gradient blooms and grid textures.
- Smooth scroll-reveal animations (fade + translate-y), staggered children.
- Monospace accents for code/technical labels (think `Ctrl+S to save`).

### Color Scheme

Derived from the app's own design tokens (OKLCH-based, Tailwind v4 + shadcn/ui "neutral" base recolored with a brand yellow).

| Role | Value | Usage |
|------|-------|-------|
| **Brand / Accent (dark)** | `oklch(0.82 0.16 85)` — bright yellow (~`#facc15`) | CTAs, links, highlights, wordmark, glow effects |
| **Brand / Accent (light)** | `oklch(0.60 0.14 75)` — deep gold (~`#d4a017`) | Same roles in light mode |
| **Background (dark)** | `oklch(0.145 0 0)` (~`#0a0a0a`) | Page background |
| **Surface / Card (dark)** | `oklch(0.205 0 0)` (~`#141414`) | Cards, elevated panels |
| **Foreground (dark)** | `oklch(0.985 0 0)` (~`#fafafa`) | Primary text |
| **Muted Foreground** | `oklch(0.708 0 0)` (~`#a3a3a3`) | Secondary text, captions |
| **Border (dark)** | `oklch(1 0 0 / 10%)` (~`rgba(255,255,255,0.1)`) | Dividers, card borders |
| **Destructive** | `oklch(0.577 0.245 27)` (~`#ef4444`) | Errors (rare on landing) |

**Gradient accents:** Yellow → amber radial blooms behind hero (`from-yellow-500/20`, `to-transparent`), subtle on hover for feature cards.

### Typography
- **Font:** Inter (variable, 100–900), matching the app.
- **Hero headline:** ~72px, weight 700, tight tracking (`-0.04em`), gradient text (white → muted).
- **Section headings:** ~40px, weight 600.
- **Body:** ~16–18px, weight 400, `text-muted-foreground`.
- **Mono labels:** `font-mono text-xs uppercase tracking-widest text-yellow-500` for kicker labels (e.g., `AI-NATIVE CAD`).

### Effects
- Radial gradient mesh glow (yellow) behind hero text.
- Fine dot-grid or perspective-grid background (1px dots, very low opacity).
- Glassmorphism cards: `bg-white/5 backdrop-blur border border-white/10`.
- Hover: border brightens to `border-yellow-500/50`, subtle inner glow.
- Animated 3D viewport mockup slowly orbiting in hero (optional Three.js or looping video).

---

## Page Structure

### 1. Navbar (sticky, blur on scroll)
```
[ CADZero logo (white "CAD" + yellow "Zero") ]              [ Features ] [ How it Works ] [ Download ] [ GitHub ↗ ] [ Theme Toggle ]
```
- Transparent at top, `backdrop-blur-md bg-black/50 border-b border-white/10` on scroll.
- GitHub icon (lucide `Github`) links to `https://github.com/JBowen99/CADZero`.

---

### 2. Hero
```
                        [ kicker: AI-NATIVE PARAMETRIC CAD ]

              Describe it. Watch it build.
              The CAD tool that speaks your language.

         Type "a bracket with four 5mm mounting holes"
         and CADZero generates real 3D geometry — instantly.

              [ Download for Linux ↓ ]    [ View on GitHub ↗ ]

         [ Floating animated viewport mockup / product screenshot ]
```

- **Kicker:** `font-mono text-sm tracking-widest text-yellow-500` with a small dot or badge.
- **Headline:** Massive gradient text. The word **"build"** glows yellow.
- **Subheadline:** Muted gray, max-width ~600px.
- **Buttons:**
  - Primary: `bg-yellow-500 text-black hover:bg-yellow-400` with download icon.
  - Secondary: `border border-white/15 hover:border-white/30` with GitHub icon.
- **Visual:** Large rounded product screenshot of the app (viewport + chat), with a soft yellow glow behind it and a subtle perspective tilt. Optionally a looping screen-recording.

---

### 3. "How It Works" (3 steps)
A horizontal 3-column layout with numbered cards.

```
  ┌─────────────┐    ┌─────────────┐    ┌─────────────┐
  │     01      │    │     02      │    │     03      │
  │   Describe  │ →  │   Generate  │ →  │    Refine   │
  │  it in chat │    │  real CAD   │    │ iterate in  │
  │             │    │   geometry  │    │  conversation|
  └─────────────┘    └─────────────┘    └─────────────┘
```

- **01 — Describe it.** "Tell CADZero what you need in plain English. No sketching, no menus."
- **02 — It builds real geometry.** "The AI writes parametric CAD code, executes it on a real CAD kernel, and renders the 3D result in your viewport."
- **03 — Refine by chatting.** "Increase thickness. Add fillets. Move that hole. Just ask — the model updates live."

---

### 4. Feature Grid (bento-style)

A responsive bento grid of feature cards. Each card: icon (lucide), title, short description, hover glow.

**Card layout (desktop):**
```
┌──────────────────────────┐  ┌───────────────┐
│   Streaming AI Chat      │  │  Dual CAD     │
│   (large, spans 2 cols)  │  │  Kernels      │
│   [screenshot strip]     │  │               │
└──────────────────────────┘  └───────────────┘
┌───────────────┐  ┌──────────────────────────┐
│  Real 3D      │  │   Code Editor +          │
│  Viewport     │  │   Revision History       │
│               │  │   [screenshot]           │
└───────────────┘  └──────────────────────────┘
┌──────────────────┐  ┌──────────────────┐
│ Multi-Model AI   │  │  Topology Select │
└──────────────────┘  └──────────────────┘
```

#### Features (implemented)

1. **Streaming AI Conversation** — *Chat with the model in real time. Responses stream token-by-token across Plan, Chat, and Build modes.* Icon: `MessageSquare`.

2. **Dual CAD Kernels** — *Powered by real geometry engines — OpenSCAD and Build123D (OpenCascade). Not a toy; this is production-grade parametric modeling.* Icon: `Boxes`.

3. **Interactive 3D Viewport** — *Orbit, pan, and zoom real meshes in a Three.js viewport. Shaded, solid, and wireframe views. View cube, grid, and RGB axes.* Icon: `Orbit`.

4. **Code Editor + Live Preview** — *A full CodeMirror editor with syntax highlighting. Edit the generated parametric code, hit Render, and see the mesh update instantly.* Icon: `Code`.

5. **Revision History (PDM)** — *Every save creates a versioned checkpoint in a DAG revision graph. Preview any past version and restore it with one click.* Icon: `History`.

6. **Multi-Model AI** — *Bring your own model. Supports OpenAI, Anthropic Claude, xAI Grok, Z-AI GLM, Moonshot Kimi, Qwen, DeepSeek, and more via OpenRouter.* Icon: `Sparkles`.

7. **Topology Selection** — *Pick faces, edges, and vertices directly in the viewport. Your selection becomes context for the AI — "put a hole right here."* Icon: `MousePointerClick`.

8. **Image / Vision Input** — *Attach reference images. Drag, drop, or paste — vision-capable models can see your sketches and blueprints.* Icon: `Image`.

9. **Export Anywhere** — *Export to STL, OBJ, 3MF, or STEP (Build123D). From conversation to manufacturing-ready file.* Icon: `Download`.

10. **Self-Contained `.cadz` Files** — *Each part is a portable SQLite database — geometry, code, chat history, and revisions in one shareable file.* Icon: `FileBox`.

---

### 5. Showcase / Demo Section
- A full-width section with a looping screen recording or interactive carousel showing real chat → geometry workflows.
- Example prompts displayed as "chips":
  - `"a 608 skateboard bearing model"`
  - `"an L-bracket with four M5 mounting holes"`
  - `"a gear with 24 teeth, module 2"`
  - `"make the walls 3mm thicker and add a fillet"`

---

### 6. Tech Stack Strip
A minimalist horizontal strip of the technologies powering CADZero:

```
React  •  TypeScript  •  Electron  •  Three.js  •  Tailwind CSS  •  CodeMirror  •  Vercel AI SDK  •  OpenSCAD  •  Build123D
```

Small, muted, monospace. Just to signal credibility.

---

### 7. CTA Section
```
                    Ready to design by describing?

              Stop clicking through menus. Start talking to your CAD.

                    [ Download for Linux ↓ ]    [ Star on GitHub ★ ]
```
- Full-width dark section with a large yellow radial glow.
- Centered text, big buttons.

---

### 8. Footer
```
CADZero                                                    [ GitHub ↗ ]

An AI-native parametric CAD application.                  Built with React, Three.js,
Open-source. Linux desktop (Electron).                    and a love for making things.

© 2025 CADZero          [ Privacy ] [ License (MIT) ]    [ Bluesky ] [ X / Twitter ]
```
- Minimal, dark, `border-t border-white/10`.
- GitHub link prominent.

---

## Interactions & Animations

| Element | Animation |
|---------|-----------|
| Section content on scroll | `opacity: 0 → 1`, `translateY(24px → 0)`, staggered children, `ease-out`, ~600ms |
| Feature cards on hover | Border `white/10 → yellow-500/50`, subtle `shadow-[0_0_30px_-5px_rgba(250,204,21,0.3)]` |
| Hero buttons on hover | Scale `1.02`, brightness `1.1` |
| Hero glow | Slow pulsing radial gradient (optional `@keyframes` or framer-motion) |
| Navbar | Background opacity + blur transitions on scroll |
| Logo | Subtle yellow text-shadow glow |

---

## Responsive Behavior

- **Desktop (>1024px):** Full bento grid, large hero, sticky nav with all links.
- **Tablet (768–1024px):** Bento collapses to 2-column. Hero text scales down. Nav links hide into a hamburger menu.
- **Mobile (<768px):** Single column throughout. Hero headline ~36px. Feature cards stack. CTA buttons full-width. Nav becomes logo + hamburger + GitHub icon.

---

## Assets Needed

1. **Hero product screenshot** — Full app window showing chat prompt → generated 3D mesh (dark theme).
2. **Feature screenshots** — Viewport close-up, code editor, revision history panel, chat with image attachment.
3. **Demo video / GIF** — 5–10s loop of: typing a prompt → mesh building → refining with a follow-up.
4. **App icon / logo** — `CAD` (white) + `Zero` (yellow), for favicon and nav.
5. **OG image** — For social sharing (dark bg + yellow glow + tagline).

---

## Links

| Label | URL |
|-------|-----|
| **GitHub Repository** | https://github.com/JBowen99/CADZero |
| Download (Linux) | TBD — GitHub Releases page (`/releases`) |
| Issue Tracker | https://github.com/JBowen99/CADZero/issues |

---

## Tech Implementation Notes

- **Framework:** Can be built with the existing **React Router 8 + Tailwind v4** stack, or as a standalone Next.js/Astro marketing site.
- **Animations:** `framer-motion` for scroll reveals; or CSS `@keyframes` + `IntersectionObserver` for zero-dependency.
- **Theme:** `next-themes` (already a dependency), dark-first with light toggle.
- **Icons:** `lucide-react` (already in the project).
- **Fonts:** Inter via Google Fonts (already loaded).
