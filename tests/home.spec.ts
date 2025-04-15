import { test, expect } from "./fixtures/next-server";

test.describe("Home Page", () => {
  test("should display the correct title", async ({ page, baseUrl }) => {
    await page.goto(baseUrl);
    const title = page.getByRole("main").getByRole("heading", {
      name: "Buildo Next.js App",
      level: 1,
    });

    await expect(title).toBeVisible();
    await expect(title).toHaveText("Buildo Next.js App");
  });
});
