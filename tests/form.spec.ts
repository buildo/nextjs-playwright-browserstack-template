import { test, expect } from "@playwright/test";

test.describe("Keyboard visibility issue on mobile", () => {
  test.use({
    viewport: { width: 390, height: 844 }, // iPhone 14 Pro
    userAgent:
      "Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1",
    isMobile: true,
    hasTouch: true,
  });

  test("last input should not be hidden when focused", async ({ page }) => {
    await page.goto(
      "https://buildo.github.io/nextjs-playwright-browserstack-template/form/"
    );

    // Wait for form to render
    await expect(page.getByRole("form")).toBeVisible();

    // Scroll to the bottom of the form
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(500); // let scroll settle

    // Focus the last input (e.g., the submit comment field)
    const lastInput = page
      .locator('input[name="lastField"], textarea, input')
      .last();
    await lastInput.focus();
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
});
