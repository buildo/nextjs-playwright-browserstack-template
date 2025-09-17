import { test, expect } from "@playwright/test";

test("users page displays mocked users correctly", async ({ page }) => {
  await page.goto(
    `https://buildo.github.io/nextjs-playwright-browserstack-template/users/`
  );

  const viewportWidth = await page.evaluate(() => window.innerWidth);
  const devicePixelRatio = await page.evaluate(() => window.devicePixelRatio);
  const userAgent = await page.evaluate(() => navigator.userAgent);

  console.error("Viewport width:", viewportWidth);
  console.error("Device pixel ratio:", devicePixelRatio);
  console.error("User agent:", userAgent);

  await expect(page.getByTestId("user-1")).toBeVisible();

  // Check for horizontal overflow - this will pass locally (528px) but fail on real device (408px)
  const hasHorizontalOverflow = await page.evaluate(() => {
    const body = document.body;
    const container = document.querySelector(".container");
    if (!container) {
      console.error("Container not found!");
      return false;
    }

    const containerWidth = container.getBoundingClientRect().width;
    const bodyWidth = body.clientWidth;

    console.error("Container width:", containerWidth);
    console.error("Body width:", bodyWidth);

    return containerWidth > bodyWidth;
  });

  expect(
    hasHorizontalOverflow,
    "Viewport horizontal overflow should not exist"
  ).toBeFalsy();
});
