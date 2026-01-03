# Portfolio (React + TypeScript + Bun)

Personal portfolio site built with React and TypeScript, using Bun as the runtime, package manager, and dev/build toolchain.

## ✨ Features

- Dynamic GitHub portfolio data (AboutJSON + ProjectJSON)
- Component architecture (Bio, Personality, Accordion, Cards)
- Barrel exports (`index.ts`) in each folder for clean imports

## Tech stack

- **React + TypeScript** - Component framework + type safety
- **Bun** - Runtime, package manager, dev/build toolchain
- **react-icons** (^5.5.0) - Icon library (hero, social, UI)
- **react-loading-icons** (^1.1.0) - Animated loading states
- **react-markdown** (^10.1.0) - Markdown rendering for project descriptions

## 📁 Folder structure

Each folder exports its public API via **`index.ts` barrel files**:

src/
├── components/
│ ├── about/
│ │ └── index.ts → exports Bio, Personality, Accordion
│ ├── ui/
│ │ └── index.ts → exports Loading, Image, etc.
│ └── layout/
│ └── index.ts → exports Header, Footer, etc.

**Usage**: `import { Bio } from '@/components/about'`

## Requirements

- Bun installed: https://bun.sh

## Getting started

Install dependencies:

```bash
bun install
```

Run the dev server:

```bash
bun dev
```

Open the URL printed in your terminal http://localhost:3000

## Scripts

Common scripts (see `package.json` for details):

- `bun dev` — serve `src/index.html` for local development
- `bun lint` — lint the codebase with oxlint
- `bun fmt` — format files using dprint
- `bun run build` — bundle the React app from `src/index.tsx` into the `dist/` folder
- `bun start` — serve the production build from `dist/`
- `bun run typecheck` — run TypeScript type checking without emitting files

## Design system

- GitHub-inspired UI tokens (CSS custom properties)
- Responsive aside + main layout
- Public GitHub API integration (Profile Information, Repositories, Custom Portfolio folder per each Repository)
- Smooth animations
- Type-safe data flow

## Project goals

- Production-grade portfolio with modern React patterns
- Scalable component architecture with barrel exports
- Zero-configuration deployment (GitHub Pages ready)
- TypeScript everywhere
- Public APIs only (no secrets/tokens)

## License

MIT
