import { test, expect } from "@playwright/test";
test.describe("User Page", () => {
  test("users page displays mocked users correctly", async ({ page }) => {
    await page.goto(
      `https://buildo.github.io/nextjs-playwright-browserstack-template/users/`
    );

    // Check if mocked user data is displayed
    await expect(page.getByTestId("user1")).toBeVisible();

    const hasHorizontalOverflow = await page.$eval("body", (el) => {
      return el.scrollWidth > el.clientWidth;
    });

    expect(
      hasHorizontalOverflow,
      "Viewport horizontal overflow should not exist"
    ).toBeFalsy();
  });
});
