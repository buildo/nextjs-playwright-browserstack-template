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
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
      },
    },
  ],
};

export default config;
