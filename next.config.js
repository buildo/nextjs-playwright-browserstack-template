/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  // Important for GitHub Pages
  basePath:
    process.env.NODE_ENV === "production"
      ? "/nextjs-playwright-browserstack-template"
      : "",
  assetPrefix:
    process.env.NODE_ENV === "production"
      ? "/nextjs-playwright-browserstack-template"
      : "",
  images: {
    unoptimized: true,
  },
  // Add trailing slash to help with GitHub Pages routing
  trailingSlash: true,
};

export default nextConfig;
