# cayanprola.github.io

This repository contains the frontend for my portfolio site. It's built with Vue 3 and Vite.

Local development

1) Install dependencies

```powershell
npm install
```

2) Run in dev mode

```powershell
npm run dev
```

3) Build for production

```powershell
npm run build
```

The build output is placed in `docs/` so GitHub Actions can deploy it to the `gh-pages` branch for GitHub Pages serving.

Routing & styles

- This project uses Vue Router (pages available at `/`, `/about`, `/contact`).
- Tailwind CSS is configured — development builds use the Tailwind PostCSS setup included here.

Environment variables

The frontend reads the contact backend URL from `VITE_API_URL`. For local testing you can use the default in `.env.example` (`http://localhost:5000`). When you deploy your Flask backend, set `VITE_API_URL` to its public URL in the repository's secrets or deployment environment.
