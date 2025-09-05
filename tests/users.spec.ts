import { test, expect } from "@playwright/test";

test("users page displays mocked users correctly", async ({ page }) => {
  await page.goto(
    `https://buildo.github.io/nextjs-playwright-browserstack-template/users/`
  );

  // Add a small wait to ensure the page is fully loaded
  await page.waitForLoadState("networkidle");

  const viewportWidth = await page.evaluate(() => window.innerWidth);
  const devicePixelRatio = await page.evaluate(() => window.devicePixelRatio);
  const userAgent = await page.evaluate(() => navigator.userAgent);

  console.error("Viewport width:", viewportWidth);
  console.error("Device pixel ratio:", devicePixelRatio);
  console.error("User agent:", userAgent);

  // check if mocked data is displayed
  await expect(page.getByTestId("user1")).toBeVisible();

  const hasHorizontalOverflow = await page.evaluate(() => {
    const body = document.body;
    return body.scrollWidth > body.clientWidth;
  });

  expect(
    hasHorizontalOverflow,
    "Viewport horizontal overflow should not exist"
  ).toBeFalsy();
});
