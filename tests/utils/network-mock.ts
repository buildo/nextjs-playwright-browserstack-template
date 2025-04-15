import { Page } from "@playwright/test";

export async function mockUsersApi(page: Page) {
  await page.route("**/api/users", (route) => {
    route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify([
        { id: 1, name: "Mock User 1", email: "mock1@example.com" },
        { id: 2, name: "Mock User 2", email: "mock2@example.com" },
        { id: 3, name: "Mock User 3", email: "mock3@example.com" },
        { id: 4, name: "Mock User 4", email: "mock4@example.com" },
      ]),
    });
  });
}
