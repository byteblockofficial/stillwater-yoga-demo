import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("h1 is visible and contains 'Didsbury'", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Didsbury");
});

test("Yoga Alliance badge is visible", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByText("Yoga Alliance Certified").first()).toBeVisible();
});

test("Book a class CTA is visible", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("link", { name: "Book a class" }).first()).toBeVisible();
});

test("3 testimonial blockquotes are visible", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("blockquote")).toHaveCount(3);
});

test("home page has no critical a11y violations", async ({ page }) => {
  await page.goto("/");
  const results = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa"]).analyze();
  expect(results.violations.filter((v) => v.impact === "critical" || v.impact === "serious")).toHaveLength(0);
});
