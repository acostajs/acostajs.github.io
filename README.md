# Portfolio (React + TypeScript + Bun)

Personal portfolio site built with React and TypeScript, using Bun as the runtime, package manager, and dev/build toolchain.

## Tech stack

- React
- TypeScript
- Bun (runtime + package manager + scripts)

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

## Project goals

- GitHub-inspired UI and design tokens (CSS variables)
- Responsive layout (aside profile + main content)
- Public GitHub API integration (user + repos)
- Highlighted projects section and contact CTA

## Environment variables

This project is designed to use **only public GitHub endpoints** (no secrets).

## License

MIT
