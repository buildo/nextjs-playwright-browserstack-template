# nextjs-playwright-browserstack-template

## Versions

- **Next.js**: 15.3.4
- **Playwright**: 1.53.0
- **BrowserStack SDK**: 1.42.7

## Install & Serve Locally

1. **Install dependencies** (using [pnpm](https://pnpm.io/)):

   ```sh
   pnpm install
   ```

2. **Start development server**:

   ```sh
   pnpm dev
   ```

   App will be available at [http://localhost:3000](http://localhost:3000)

3. **Build for production**:
   ```sh
   pnpm build
   pnpm start
   ```

## GitHub Actions

This project uses GitHub Actions for:

- **Deploying to GitHub Pages** on every push to `main`:

  - Installs dependencies and builds static export (`pnpm export`)
  - Uploads the output to GitHub Pages

- **Running Playwright tests on BrowserStack**:
  - Installs Playwright browsers and sets up BrowserStack environment
  - Runs Playwright tests via BrowserStack SDK (`pnpm test:browserstack`)

See `.github/workflows/deploy-and-test.yml` for details.
