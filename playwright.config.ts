import { PlaywrightTestConfig, devices } from "@playwright/test";

const config: PlaywrightTestConfig = {
  testDir: "./tests",
  timeout: 30000,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined, // Allow parallel workers
  reporter: "html",

  // Keep your existing globalSetup that loads env vars
  globalSetup: "./globalSetup.ts",

  use: {
    trace: "on-first-retry",
    ignoreHTTPSErrors: false,
    launchOptions: {
      args: [],
    },
  },

  projects: [
    {
      name: "Galaxy Tab S9",
      use: { ...devices["Galaxy Tab S9"] },
    },
    {
      name: "Galaxy S24",
      use: {
        viewport: { width: 520, height: 980 },
        defaultBrowserType: "chromium",
      },
    },
    {
      name: "iPhone14",
      use: {
        viewport: { width: 475, height: 767 },
        defaultBrowserType: "webkit",
      },
    },
    {
      name: "Pixel 7",
      use: {
        viewport: { width: 512, height: 915 },
        defaultBrowserType: "chromium",
      },
    },
  ],
};

export default config;
