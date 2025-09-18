import { test, expect } from "@playwright/test";

test("last input should not be hidden when focused", async ({ page }) => {
  await page.goto(
    "https://buildo.github.io/nextjs-playwright-browserstack-template/form/"
  );

  await expect(page.getByRole("form")).toBeVisible();

  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(200); // let scroll settle

  const lastInput = page.getByTestId("problematic-input");
  await lastInput.tap();
  await page.waitForTimeout(1000); // allow virtual keyboard animation

  // Check that the input is visible in viewport
  const box = await lastInput.boundingBox();
  expect(box).not.toBeNull();

  const isVisible = await page.evaluate(({ y, height }) => {
    const top = y;
    const bottom = y + height;
    const viewportHeight = window.innerHeight;
    return top >= 0 && bottom <= viewportHeight;
  }, box!);

  expect(isVisible).toBe(true);
});
