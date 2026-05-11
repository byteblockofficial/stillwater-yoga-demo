import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("desktop nav has correct links including Classes", async ({ page }) => {
  await page.goto("/");
  const nav = page.getByRole("navigation", { name: "Main navigation" });
  for (const label of ["Home", "Classes", "About", "Contact"]) {
    await expect(nav.getByRole("link", { name: label })).toBeVisible();
  }
});

test.describe("Mobile nav", () => {
  test.use({ viewport: { width: 375, height: 812 } });
  test("hamburger opens mobile menu", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("button", { name: "Open navigation menu" }).click();
    await expect(page.getByRole("navigation", { name: "Mobile navigation" })).toBeVisible();
  });
});

test("classes page loads", async ({ page }) => {
  await page.goto("/classes");
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
});

test("about page has no critical a11y violations", async ({ page }) => {
  await page.goto("/about");
  const results = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa"]).analyze();
  expect(results.violations.filter((v) => v.impact === "critical" || v.impact === "serious")).toHaveLength(0);
});
