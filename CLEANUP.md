# Cleaning up repository for frontend-only (Vue)

This repository will become a frontend-only GitHub Pages site with Vue. Follow the steps below to remove backend artifacts from git and prepare a separate backend repo for Flask later.

1. Add `.gitignore` (already done)

2. Keep your virtual environments locally, but stop tracking them in git:

PowerShell commands to untrack existing venvs and node_modules (run from repo root):

```powershell
# stop tracking these paths if previously committed
git rm -r --cached flask_venv
git rm -r --cached vue_venv
git rm -r --cached node_modules

# remove any leftover built files if present
git rm -r --cached dist
git rm -r --cached build

# commit the changes
git add .gitignore
git commit -m "chore: ignore venvs and node_modules, clean up workspace"
```

3. Move or copy backend code to a new repo (recommended). Example quick workflow:

```powershell
# create a new repo on GitHub (or locally), then:
git subtree split -P backend-archive -b backend-split
# push that branch to a new repo (on GitHub):
git push <your-backend-repo-url> backend-split:main
```

Or simpler: create a new repository and copy the files in `backend-archive/` into it, then push.

4. Clean up this repo to only contain Vue code

- Keep `index.html`, `package.json`, and frontend code. If you plan to use Vite / Vue CLI, consider creating a `src/` folder and adding build scripts.
- Use GitHub Pages: either commit the built `dist/` files to `gh-pages` branch or use `docs/` on `main`.

If you'd like, I can:

- scaffold a minimal Vite + Vue project here and add GitHub Actions to build/publish to GitHub Pages, or
- prepare the new backend repository contents and show a deployable Flask example.
