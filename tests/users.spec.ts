import { test, expect } from "./fixtures/next-server";
import { mockUsersApi } from "./utils/network-mock";

test.describe("User Page", () => {
  test("users page displays mocked users correctly", async ({
    page,
    baseUrl,
  }) => {
    await mockUsersApi(page);
    await page.goto(`${baseUrl}/users`);
    await page.waitForSelector('h2:has-text("Mock User 1")');

    // Check if mocked user data is displayed
    await expect(page.getByText("Mock User 1")).toBeVisible();
    await expect(page.getByText("mock1@example.com")).toBeVisible();
    await expect(page.getByText("Mock User 4")).toBeVisible();
    const userItems = await page.locator("ul li").count();
    expect(userItems).toBe(4);
  });
});
