# Portfolio Website

A reusable personal portfolio built with React and TypeScript, designed to showcase projects, technical focus, and growth as a developer.\
The site pulls live data from GitHub and is fully configurable through a single configuration file.

---

## Overview

This portfolio is designed to be both a personal showcase and a reusable project. All portfolio content is driven by public APIs and a centralized configuration file, allowing the site to update automatically as GitHub data changes.

Adapting the project for a new user only requires updating the configuration file. No application logic changes are needed.

---

## Key Features

- Dynamic project and profile data sourced from the GitHub API
- Centralized configuration for easy reuse and customization
- Backend-aware frontend architecture with type-safe data handling
- Contact form powered by Web3Forms API
- Modular, reusable React components
- Responsive layout with a GitHub-inspired design system
- Simple deployment with no environment configuration required

---

## Tech Stack

- React
- TypeScript
- Bun (runtime, package manager, build tooling)
- GitHub Public API
- Web3Forms API

---

## Reusability

This project is designed to be reusable.

To adapt it for a new user:

1. Fork the repository
2. Update the configuration file with your GitHub username, social links, and preferences
3. Deploy

All API endpoints and displayed content update automatically based on the configuration values.

If you wish to use this project as a base, forking the repository and making any changes that fit your needs is encouraged.

---

## Configuration

The application is driven by a single configuration file that controls:

- GitHub username and repository display behavior
- Sorting and pagination rules
- Public contact information
- Portfolio-specific repository folders
- Contact form integration

Example (simplified):

````ts
export const CONFIG = {
  github: {
    username: "your-github-username",
    repos: {
      number_of_repos_to_display: 20,
      sort_by: "updated",
      direction: "desc",
    },
  },
  profile: {
    email: "your@email.com",
    linkedin: "your-linkedin-handle",
  },
  web3forms: {
    access_key: "your-web3forms-access-key",
  },
};

---

## Requirements

- Bun installed: https://bun.sh

---

## Getting started

Install dependencies:

```bash
bun install
````

Run the dev server:

```bash
bun dev
```

Open the URL printed in your terminal http://localhost:3000

---

## Scripts

Common scripts (see `package.json` for details):

- `bun dev` — serve `src/index.html` for local development
- `bun lint` — lint the codebase with oxlint
- `bun fmt` — format files using dprint
- `bun run build` — bundle the React app from `src/index.tsx` into the `dist/` folder
- `bun start` — serve the production build from `dist/`
- `bun run typecheck` — run TypeScript type checking without emitting files

---

## Architecture Decisions

**Configuration-driven design**

All user-specific values are centralized in a single file, making the project easy to reuse, maintain, and adapt without modifying application logic.

**React and TypeScript**

React provides a component-driven architecture, while TypeScript enforces strict typing across API data and component boundaries.

**GitHub as the content source**

Using GitHub as the data source ensures projects remain up to date automatically and removes the need for a custom CMS or database.

**Web3Forms for contact handling**

Web3Forms enables contact form submissions without maintaining a backend or exposing secrets, keeping the project simple and production-ready, free version accepts up to 250 submisions per month, more than enough for a portfolio.

**Barrel exports**

Each folder exposes a clear public API using index.ts barrel files, improving import clarity and long-term maintainability.

**Bun toolchain**

Bun consolidates runtime, package management, and build tooling into a single solution, reducing configuration overhead and improving developer experience.

---

## Project Goals

- Present a clear, professional overview of projects and experience
- Emphasize backend-integrated frontend applications
- Enable reuse through configuration-only customization
- Maintain a scalable and readable codebase
- Rely exclusively on public APIs and configuration-free tooling

---

## Status

This project is actively maintained and updated as new issues are added.

---

## License

MIT
