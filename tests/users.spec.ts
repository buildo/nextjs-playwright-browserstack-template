import { test, expect } from "@playwright/test";

test("users page displays mocked users correctly", async ({
  page,
}, testInfo) => {
  await page.goto(
    `https://buildo.github.io/nextjs-playwright-browserstack-template/users/`
  );

  const viewportWidth = await page.evaluate(() => window.innerWidth);
  const devicePixelRatio = await page.evaluate(() => window.devicePixelRatio);
  const userAgent = await page.evaluate(() => navigator.userAgent);
  console.log("Simulated device:", testInfo.project.name);

  console.log("Viewport width:", viewportWidth);
  console.log("Device pixel ratio:", devicePixelRatio);
  console.log("User agent:", userAgent);

  // check if mocked data is displayed
  await expect(page.getByTestId("user1")).toBeVisible();

  const hasHorizontalOverflow = await page.$eval("body", (el) => {
    return el.scrollWidth > el.clientWidth;
  });

  expect(
    hasHorizontalOverflow,
    "Viewport horizontal overflow should not exist"
  ).toBeFalsy();
});
