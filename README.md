# GenOps Marketing Site Clone

This repository hosts a Vite + React recreation of the GenOps marketing experience. It includes the full landing page, login, and admin flows from the original site along with a component library, Tailwind CSS configuration, and shared schema utilities.

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the development server

```bash
npm run dev
```

The dev server now binds to `0.0.0.0` on port `5173`, making it reachable from external tunnels (Replit, Codespaces, etc.).

### 3. Build for production

```bash
npm run build
```

The build output is written to `dist/public/`.

### 4. Preview the production build locally

```bash
npm run preview
```

The preview server exposes the built site on `0.0.0.0:4173`, letting you verify the production bundle before deploying.

## Deployment Tips

Because the project ships as a static Vite build, you can deploy the contents of `dist/public/` to any static host:

- **Netlify / Vercel** – connect the repo, set the build command to `npm run build`, and serve the `dist/public` directory.
- **Cloudflare Pages** – build locally and push the `dist/public/` output, or use their build pipelines with the same command.
- **Custom hosting** – upload the `dist/public/` folder to any static file server or object storage bucket (S3, GCS, Azure Blob) with a CDN in front.

For environments that expect a specific port or host binding, adjust the `dev`/`preview` script flags in `package.json` accordingly.

## Automated GitHub Pages deployment

This repository includes a GitHub Actions workflow in `.github/workflows/deploy.yml` that builds the site and publishes it to GitHub Pages whenever the `main` branch is updated.

1. In your GitHub repository settings, enable **Pages** with the “GitHub Actions” source. GitHub will automatically create the `github-pages` environment referenced by the workflow the first time it runs.
2. Push to `main` (or trigger the workflow manually from the Actions tab) to build and deploy the latest changes.
3. The workflow uploads the static assets from `dist/public/` and exposes the live URL as the environment output for quick access.

If you deploy to a project page (e.g. `github.com/username/project`), the workflow sets a `BASE_PATH` environment variable so Vite generates correct asset URLs under `/<repo-name>/`. For user/organization pages (e.g. `username.github.io`), the base path automatically resolves to `/`. You can override this behavior by setting the `BASE_PATH` variable in the workflow or the repository’s environment/Actions variables.
