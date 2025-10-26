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

The build output is written to `dist/`.

### 4. Preview the production build locally

```bash
npm run preview
```

The preview server exposes the built site on `0.0.0.0:4173`, letting you verify the production bundle before deploying.

## Deployment Tips

Because the project ships as a static Vite build, you can deploy the contents of `dist/` to any static host:

- **GitHub Pages (recommended)** – this repository includes a `Deploy to GitHub Pages` workflow that builds the site with `npm run build` and publishes the `dist/` directory. Push to `main` (or trigger the workflow manually) and enable GitHub Pages for the `GitHub Actions` source in the repository settings to go live.
- **Netlify / Vercel** – connect the repo, set the build command to `npm run build`, and serve the `dist` directory.
- **Cloudflare Pages / custom hosting** – upload the `dist/` folder to any static file server or object storage bucket (S3, GCS, Azure Blob) with a CDN in front.

When the site is built inside GitHub Actions, the Vite configuration automatically scopes asset paths to the repository slug so the pages render correctly under `https://<user>.github.io/<repo>/`. For other environments that expect a specific port or host binding, adjust the `dev`/`preview` script flags in `package.json` accordingly.
