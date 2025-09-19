import { test, expect } from "@playwright/test";

test("users page displays mocked users correctly", async ({ page }) => {
  await page.goto(
    `https://buildo.github.io/nextjs-playwright-browserstack-template/users/`
  );

  await expect(page.getByTestId("overflow-container")).toBeVisible();
  const viewportWidth = await page.evaluate(() => window.innerWidth);
  const devicePixelRatio = await page.evaluate(() => window.devicePixelRatio);
  const userAgent = await page.evaluate(() => navigator.userAgent);
  const bgColor = await page
    .locator('[data-testid="overflow-container"]')
    .evaluate((el) => getComputedStyle(el).backgroundColor);
  console.error("Viewport width:", viewportWidth);
  console.error("Device pixel ratio:", devicePixelRatio);
  console.error("User agent:", userAgent);

  expect(bgColor).toBe("rgb(82, 169, 184)");
});
