// import { test, expect } from "@playwright/test";
// // test.use({
// //   viewport: { width: 390, height: 844 }, // iPhone 14 Pro
// //   userAgent:
// //     "Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1",
// //   isMobile: true,
// //   hasTouch: true,
// // });

// test("last input should not be hidden when focused", async ({ page }) => {
//   await page.goto(
//     "https://buildo.github.io/nextjs-playwright-browserstack-template/form/"
//   );

//   await expect(page.getByRole("form")).toBeVisible();

//   await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
//   await page.waitForTimeout(500); // let scroll settle

//   const lastInput = page
//     .locator('input[name="lastField"], textarea, input')
//     .last();
//   await lastInput.focus();
//   await page.waitForTimeout(1000); // allow virtual keyboard animation

//   // Check that the input is visible in viewport
//   const box = await lastInput.boundingBox();
//   expect(box).not.toBeNull();

//   const isVisible = await page.evaluate(({ y, height }) => {
//     const top = y;
//     const bottom = y + height;
//     const viewportHeight = window.innerHeight;
//     return top >= 0 && bottom <= viewportHeight;
//   }, box!);

//   expect(isVisible).toBe(true);
// });
