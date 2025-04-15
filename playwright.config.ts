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
    extraHTTPHeaders: {
      "X-Component-Tests": "true", // prevent the app from caching API responses
    },
    ignoreHTTPSErrors: true,
    launchOptions: {
      args: [],
    },
  },

  projects: [
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
      },
    },
  ],
};

export default config;
