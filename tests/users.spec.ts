import { test, expect } from "@playwright/test"

test("users page displays mocked users correctly", async ({ page }) => {
  await page.goto(
    `https://buildo.github.io/nextjs-playwright-browserstack-template/users/`
  )
  const problematicContainer = page.getByTestId("overflow-container")
  await expect(problematicContainer).toBeVisible()

  const viewportWidth = await page.evaluate(() => window.innerWidth)
  const devicePixelRatio = await page.evaluate(() => window.devicePixelRatio)
  const userAgent = await page.evaluate(() => navigator.userAgent)

  console.error("Viewport width:", viewportWidth)
  console.error("Device pixel ratio:", devicePixelRatio)
  console.error("User agent:", userAgent)

  const bgColor = await page.evaluate(() => {
    const el = document.querySelector('[data-testid="overflow-container"]');
    return el ? getComputedStyle(el).backgroundColor : null;
  });
  expect(bgColor).toBe("rgb(82, 169, 184)")
})
