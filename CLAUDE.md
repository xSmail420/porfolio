# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server (Vite, hot reload)
npm run build     # Production build
npm run preview   # Preview production build locally
```

No test suite or linter is configured.

## Architecture

This is a single-page React portfolio for Ismail Grira, built with Vite + React 18 + Tailwind CSS. The page is one long scroll with anchor-linked sections.

**Section rendering flow:**  
`App.jsx` → renders all section components in order (Navbar → Hero → About → Experience → Tech → Works → Contact). Each section component (except Navbar/Hero) is wrapped with the `SectionWrapper` HOC from `src/hoc/SectionWrapper.jsx`, which applies Framer Motion scroll-triggered animations and section ID anchors for navbar links.

**Content data is centralized:** All portfolio content (nav links, services, technologies, experience timeline, testimonials, projects) lives in `src/constants/index.js`. This is the primary file to edit when updating portfolio content.

**3D canvas components** (`src/components/canvas/`) use `@react-three/fiber` + `@react-three/drei` to render Three.js scenes:
- `Computers.jsx` — desktop PC model (GLTF) in the Hero section
- `Ball.jsx` — rotating tech icon spheres in the Tech section
- `Earth.jsx` — rotating Earth globe in the Contact section
- `Stars.jsx` — animated star field background

**Animation utilities** in `src/utils/motion.js` export Framer Motion variant presets (`textVariant`, `fadeIn`, `zoomIn`, `slideIn`, `staggerContainer`) used across all sections.

**Styling:** Tailwind with custom theme tokens in `tailwind.config.cjs`. Shared class string presets (padding, heading sizes) are in `src/styles.js`.

## Environment Variables

The Contact form requires EmailJS credentials in a `.env` file:
```
VITE_APP_EMAILJS_SERVICE_ID=
VITE_APP_EMAILJS_TEMPLATE_ID=
VITE_APP_EMAILJS_PUBLIC_KEY=
```

## 3D Assets

GLTF models are served from the `public/` directory (e.g., `public/desktop_pc/scene.gltf`). They are not imported — paths are referenced as strings (e.g., `"./desktop_pc/scene.gltf"`).
